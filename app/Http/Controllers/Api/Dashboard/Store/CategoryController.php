<?php

namespace App\Http\Controllers\Api\Dashboard\Store;

use App\Http\Controllers\Controller;
use App\Models\Store\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getAllCategories(Request $request){
        $search = $request->input('search');

        $searchCategories = Category::where('name', 'like', "%$search%")->take(10)->get();

        return response()->json(['categories' => $searchCategories]);
    }
}
