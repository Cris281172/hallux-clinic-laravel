<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Store\CartItem;

class CartItemController extends Controller
{
    public function deleteCartItem(string $id){
        $cartItem = CartItem::findOrFail($id);
        $cartItem->delete();
        return back();
    }
}
