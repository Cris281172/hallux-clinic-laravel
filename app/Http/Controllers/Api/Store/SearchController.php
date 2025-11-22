<?php

namespace App\Http\Controllers\Api\Store;

use App\Http\Controllers\Controller;
use App\Models\Store\Category;
use App\Models\Store\Product;
use App\Services\CategoryService;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    protected $categoryService;
    public function __construct(CategoryService $categoryService){
        $this->categoryService = $categoryService;
    }
    public function suggestions(Request $request)
    {
        $query = $request->get('q');

        if (!$query) {
            return response()->json([]);
        }

        $products = Product::where('name', 'LIKE', "%{$query}%")->with('images')->limit(10)->get(['id', 'name', 'slug']);

        $categories = Category::where('name', 'LIKE', "%{$query}%")->limit(10)->get(['slug', 'name', 'id']);

        $categories = $this->categoryService->map($categories);

        return response()->json(['products' => $products, 'categories' => $categories, 'success' => true]);
    }
}
