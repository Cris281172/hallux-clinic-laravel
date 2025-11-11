<?php

namespace App\Http\Controllers\Api\Dashboard\Store;

use App\Http\Controllers\Controller;
use App\Models\Store\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function getAllProducts(Request $request){
        $search = $request->input('search');

        $searchProducts = Product::where('name', 'like', "%$search%")->take(10)->get();

        return response()->json(['products' => $searchProducts]);
    }
}
