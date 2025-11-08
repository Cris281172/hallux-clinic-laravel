<?php

namespace App\Http\Controllers\Web\Store;

use App\Http\Controllers\Controller;
use App\Models\Store\Product;
use Inertia\Inertia;

class StoreController extends Controller
{
    public function storeView(){
        $productsBestseller = Product::with('images', 'categories')->take(2)->get();
        return Inertia::render('store/store', compact('productsBestseller'));
    }
}
