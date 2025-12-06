<?php

namespace App\Http\Controllers\Api\Store;

use App\Http\Controllers\Controller;
use App\Models\Store\Cart;
use App\Models\Store\CartItem;
use App\Models\Store\CodeUser;
use App\Models\Store\Product;
use App\Models\Store\PromotionCode;
use App\Models\Store\PromotionUser;
use App\Models\Store\Variant;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cookie;

class CartController extends Controller
{

    private function cookieProductsMap($items){
        return $items->map(function ($item) {
            $product = Product::where('id', $item['id'])->with('images')->first();
            if (!$product) return null;
            $variantValue = Variant::where('id', $item['variant'])->first();
            $item['variant_value'] = $variantValue ? $variantValue : null;
            $item['item'] = $product;
            return $item;
        });
    }
    private function products($userCart){
        return $userCart
            ? $userCart->cartItems
                ->filter(fn($item) => $item->product)
                ->map(function ($item) {
                    return [
                        'id' => $item->product_id,
                        'quantity' => $item->quantity,
                        'item' => $item->product,
                        'variant_value' => $item->variant,
                    ];
                })
                ->values()
            : collect();
    }

    private function calculateTotal($products)
    {
        return $products->sum(function($p) {
            if($p['item']['promotion_active']){
                return ($p['item']['promotion_active']['final_discount'] * $p['quantity']);
            }
            else{
                return ($p['item']->price * $p['quantity']);
            }
        });
    }

    public function getCartProducts()
    {
        if (auth()->check()) {
            $userCart = Cart::where('user_id', auth()->id())
                ->with(['cartItems.product', 'cartItems.variant'])
                ->first();

            $products = $this->products($userCart);
        }
        else{
            $items = collect(json_decode(Cookie::get('cart'), true));

            $products = $this->cookieProductsMap($items);
        }

        $deliveryPrice = $userCart->shippingMethod->price ?? 0;
        $productsTotal = $this->calculateTotal($products);

        $freeShippingLimit = 5000;

        $grandTotal = $productsTotal + $deliveryPrice;

        return response()->json([
            "products_total" => $productsTotal,
            "freeShippingApplied" => $productsTotal >= $freeShippingLimit,
            "grandTotal" => $grandTotal,
            'products' => $products,
            'success' => true
        ]);
    }
    public function cartUpdate(Request $request){
        $userCart = Cart::where('user_id', auth()->id())->firstOrFail();
        $cartItem = $userCart->cartItems()->where('product_id', $request->id)->where('variant_id', $request->variant_id ?? null)->first();
        switch($request->type){
            case 'add':
                $cartItem->increment('quantity');
                break;
            case 'remove':
                if($cartItem->quantity > 1) $cartItem->decrement('quantity');
                else $cartItem->delete();
                break;
        }
        $products = $this->products($userCart);
        $total = $this->calculateTotal($products);

        $userCart->total = $total;
        $userCart->save();

        return response()->json([
            "total" => $total,
            'products' => $products,
            'success' => true
        ]);
    }
    public function addToCart(Request $request)
    {
        $cart = Cart::firstOrCreate(['user_id' => auth()->id()]);

        $cartItem = $cart->cartItems()
            ->where('product_id', $request->product_id)
            ->where('variant_id', $request->variant_id ?? null)
            ->first();

        if ($cartItem) {
            $cartItem->quantity += $request->quantity ?? 1;
            $cartItem->save();
        } else {
            $cart->cartItems()->create([
                'product_id' => $request->product_id,
                'variant_id' => $request->variant_id ?? null,
                'quantity' => $request->quantity ?? 1,
            ]);
        }

        $products = $this->products($cart);
        $total = $this->calculateTotal($products);

        $cart->total = $total;

        $cart->save();

        return response()->json(['total' => $total, 'success' => true, 'cart' => $cart->load('cartItems.product', 'cartItems.variant')]);
    }
    public function applyPromotionCode(Request $request){
        $code = PromotionCode::where('code', $request->code)->with('promotion')->first();
        if(!$code || !$code->promotion->active){
            return response()->json(['success' => false, 'message' => 'Kod promocyjny nie został znaleziony.']);
        }
        if($code->usage_limit && $code->usage_count >= $code->usage_limit){
            return response()->json(['success' => false, 'message' => 'Kod promocyjny został wykorzystany.']);
        }
        if($code->promotion->start_date && $code->promotion->start_date > Carbon::now() || $code->promotion->end_date && $code->promotion->end_date < Carbon::now()){
            return response()->json(['success' => false, 'message' => 'Kod promocyjny jest nieaktywny.']);
        }

        if(auth()->check()){
            if($code->promotion->visibility === 'specific_users'){
                $userPromotion = PromotionUser::where('user_id', auth()->id())->first();
                if(!$userPromotion){
                    return response()->json(['success' => false, 'message' => 'Nie masz dostep do tego kodu promocyjnego.']);
                }
            }
            $userUsage = CodeUser::where('user_id', auth()->id())->count();
            if($code->count_per_user && $userUsage >= $code->count_per_user){
                return response()->json(['success' => false, 'message' => 'Wykorzystałeś makymalna ilość użyć kodu promocyjnego.']);
            }
            $userCart = Cart::where('user_id', auth()->id())->first();

            if($code->promotion->min_order_value && $userCart->total <= $code->promotion->min_order_value){
                return response()->json(['success' => false, 'message' => 'Twoja wartość koszyka jest zbyt niska. Minimalna wartość koszyka to: ' . $code->promotion->min_order_value . " zł"]);
            }
            if($code->promotion->discount_type === 'fixed') $promotionPrice = $userCart->total - $code->promotion->discount_value;
            else if($code->promotion->discount_type === 'percent') $promotionPrice = $userCart->total - ($userCart->total * ( $code->promotion->discount_value / 100));
            return response()->json(['success' => true, 'promotionPrice' => $promotionPrice, 'codeID' => $code->id]);
        }
        else{
            if($code->promotion->visibility === 'logged_in' || $code->promotion->visibility === 'specific_users'){
                return response()->json(['success' => false, 'message' => 'Musisz być zalogowany aby skorzystać z kodu promocyjnego.']);
            }
            else{
                $items = collect(json_decode(Cookie::get('cart'), true));
                $products = $this->cookieProductsMap($items);
                $total = $this->calculateTotal($products);
                if($code->promotion->discount_type === 'fixed') $promotionPrice = $total - $code->promotion->discount_value;
                else if($code->promotion->discount_type === 'percent') $promotionPrice = $total - ($total * ( $code->promotion->discount_value / 100));
                return response()->json(['success' => true, 'promotionPrice' => $promotionPrice, 'codeID' => $code->id]);
            }
        }
    }
}
