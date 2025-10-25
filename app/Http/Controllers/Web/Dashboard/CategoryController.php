<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Services\CategoryService;
use Inertia\Inertia;
use App\Http\Requests\Dashboard\Store\CreateCategoryRequest;
use App\Models\Store\Category;

class CategoryController extends Controller
{
    protected $categoryService;
    public function __construct(CategoryService $categoryService){
        $this->categoryService = $categoryService;
    }
    public function createCategoryView(){
        $categories = Category::whereNull('parent_id')->get();
        $categories = $this->categoryService->map($categories);
        return Inertia::render('dashboard/store/categories/createCategory', compact('categories'));
    }
    public function createCategory(CreateCategoryRequest $request){
        Category::create([
           "name" => $request->name,
           "slug" => $request->slug,
           "description" => $request->description,
           'parent_id' => $request->parentID
        ]);
    }
    public function getAllCategories(){
        $categories = Category::whereNull('parent_id')->get();
        $categories = $this->categoryService->map($categories);

        return Inertia::render('dashboard/store/categories/getAllCategories', compact('categories'));
    }
}
