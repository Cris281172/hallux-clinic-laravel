<?php

namespace App\Http\Controllers\Api\Store;

use App\Http\Controllers\Controller;
use App\Models\Store\Cart;
use App\Models\Store\Product;
use Illuminate\Http\Request;

class CartController extends Controller
{
    public function getCartProducts(Request $request)
    {
        $items = collect($request->all());

        $ids = $items->pluck('id');

        $products = Product::whereIn('id', $ids)->with('images')->get();

        $products = $products->map(function ($product) use ($items) {
            $quantity = $items->firstWhere('id', $product->id)['quantity'] ?? 1;
            $product->quantity = $quantity;
            return $product;
        });

        return response()->json([
            'products' => $products,
            'success' => true
        ]);
    }
}
