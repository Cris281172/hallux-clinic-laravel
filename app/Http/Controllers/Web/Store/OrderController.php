<?php

namespace App\Http\Controllers\Web\Store;

use App\Http\Controllers\Controller;
use App\Http\Requests\Store\Order\OrderAccountRequest;
use App\Http\Requests\Store\Order\OrderDeliveryDetailsRequest;
use App\Http\Requests\Store\Order\OrderShippingMethodRequest;
use App\Models\DeliveryDetails;
use App\Models\Store\Cart;
use App\Models\Store\Order;
use App\Models\Store\OrderItem;
use App\Models\Store\Product;
use App\Models\Store\ShippingMethod;
use App\Notifications\Store\OrderCreatedNotification;
use Illuminate\Support\Facades\Cookie;
use Inertia\Inertia;
use Illuminate\Support\Facades\Notification;
class OrderController extends Controller
{
    public function getOrderView(){
        $account = session('order.account');
        $deliveryDetails = session()->get('order.delivery_details');
        $availableShippingMethod = ShippingMethod::where('active', 1)->get();
        $shippingMethod = session()->get('order.shipping_method');
        return Inertia::render('store/order', compact('deliveryDetails', 'account', 'availableShippingMethod', 'shippingMethod'));
    }
    public function deliveryDetails(OrderDeliveryDetailsRequest $request){
        session()->put('order.delivery_details', $request->all());

        return back();
    }
    public function account(OrderAccountRequest $request){
        session()->put('order.account', $request->all());

        return back();
    }
    public function shippingMethod(OrderShippingMethodRequest $request){
        session()->put('order.shipping_method', $request->all());

        return back();
    }
    public function createOrder()
    {
        $isLoggedIn = auth()->check();
        $account = session('order.account');
        $deliveryDetails = session('order.delivery_details');

        $cart = $isLoggedIn
            ? Cart::where('user_id', auth()->id())->with('cartItems')->first()
            : collect(json_decode(request()->cookie('cart')));

        $orderData = [
            'status' => 'new',
            'price' => 0,
        ];

        if ($isLoggedIn) {
            $orderData['user_id'] = auth()->id();
        } else {
            $orderData['email'] = $account['email'] ?? null;
        }

        $order = Order::create($orderData);

        $sum = 0;
        $items = $isLoggedIn ? $cart->cartItems : $cart;

        foreach ($items as $item) {
            $productId = $isLoggedIn ? $item->product_id : $item->id;
            $variantId = $isLoggedIn ? $item->variant_id : $item->variant;
            $product = Product::find($productId);

            $sum += $product->price * $item->quantity;

            OrderItem::create([
                'order_id'   => $order->id,
                'product_id' => $productId,
                'quantity'   => $item->quantity,
                'price'      => $product->price,
                'variant_id' => $variantId,
            ]);
        }

        $order->update(['price' => $sum]);

        $isLoggedIn
            ? Cart::where('user_id', auth()->id())->delete()
            : Cookie::queue('cart', null);

        DeliveryDetails::create([
            'name'          => $deliveryDetails['name'],
            'surname'       => $deliveryDetails['surname'],
            'address_line_1'=> $deliveryDetails['addressLine1'],
            'address_line_2'=> $deliveryDetails['addressLine2'],
            'zip_code'      => $deliveryDetails['zipCode'],
            'city'          => $deliveryDetails['city'],
            'phone'         => $deliveryDetails['phone'],
            'order_id'      => $order->id,
        ]);

        $isLoggedIn
            ? auth()->user()->notify(new OrderCreatedNotification($order))
            : Notification::route('mail', $order->email)->notify(new OrderCreatedNotification($order));

        session()->forget(['order.account', 'order.delivery_details', 'order.shipping_method']);
        session(['guest_order_token' => $order->uuid]);

        return back();
    }



}
