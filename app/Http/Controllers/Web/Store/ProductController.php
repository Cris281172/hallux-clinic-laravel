<?php

namespace App\Http\Controllers\Web\Store;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Models\Store\Category;
use App\Models\Store\Product;
use App\Services\CategoryService;
use Inertia\Inertia;

class ProductController extends Controller
{
    protected $categoryService;

    public function __construct(CategoryService $categoryService){
        $this->categoryService = $categoryService;
    }
    public function getAllProducts(){
        $categories = Category::where('parent_id', null)->get();
        $products = Product::with('images', 'categories')->paginate(20);
        $categories = $this->categoryService->map($categories);
        return Inertia::render('store/products', compact('products', 'categories'));
    }
    public function getProduct($slug){
        $product = Product::where('slug', $slug)->with('images', 'categories', 'variants', 'attributes', 'similarProducts')->first();
        return Inertia::render('store/product', compact('product'));
    }

    public function getCategoryProducts($slug){
        $category = Category::where('slug', $slug)->with('childrenRecursive')->first();
        if(!$category){
            return abort(404);
        }
        $products = Product::with('images','categories')->whereHas('categories', function($q) use ($category){
            $q->whereIn('categories.id', $category->allChildrenIds());
        })->paginate(20);

        $categories = $category->childrenRecursive;
        $parentCategory = Category::where('id', $category->parent_id)->first();
        if(count($categories) === 0){
            $categories = Category::where('parent_id', $category->parent_id)->get();
        }
        $categories = $this->categoryService->map($categories);
        return Inertia::render('store/products', compact('products', 'categories', 'parentCategory'));
    }
}
