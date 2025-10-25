<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Store\CreateProductRequest;
use App\Http\Requests\Dashboard\Store\EditProductRequest;
use App\Models\Store\Attribute;
use App\Models\Store\Category;
use App\Models\Store\CategoryProduct;
use App\Models\Store\Product;
use App\Models\Store\ProductImage;
use App\Models\Store\ProductSimilar;
use App\Models\Store\Variant;
use App\Services\CategoryService;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use App\Models\Store\ProductAttribute;
use App\Models\Store\ProductVariant;

class ProductController extends Controller
{
    protected $categoryService;

    public function __construct(CategoryService $categoryService){
        $this->categoryService = $categoryService;
    }
    public function createProductView(){
        $categories = Category::whereNull('parent_id')->get();
        $categories = $this->categoryService->map($categories);

        return Inertia::render('dashboard/store/products/createProduct', compact('categories'));
    }
    public function createProduct(CreateProductRequest $request){

        $product = Product::create([
            "name" => $request->name,
            "slug" => $request->slug,
            "description" => $request->description,
            "price" => $request->price,
            "type" => $request->type,
            "is_active" => $request->isActive,
        ]);

        $variants = $request->variants;

        if($variants && count($variants) !== 0){
            foreach ($variants as $variant){
                ProductVariant::create([
                    "product_id" => $product->id,
                    "variant_id" => $variant,
                ]);
            }
        }

        $attributes = $request->input('attributes', []);

        if (!empty($attributes)) {
            foreach ($attributes as $attribute) {
                ProductAttribute::create([
                    'product_id' => $product->id,
                    'attribute_id' => $attribute,
                ]);
            }
        }

        $similarProducts = $request->input('similar', []);

        if (!empty($similarProducts)) {
            foreach ($similarProducts as $similarProduct) {
                ProductSimilar::create([
                    'product_id' => $product->id,
                    'product_similar_id' => $similarProduct,
                ]);
            }
        }

        $images = $request->images;

        if($images != null){
            foreach ($request->images as $image) {
                $file = $image['file'];
                $filename = uniqid() . '.' . $file->getClientOriginalExtension();
                $path = 'products/' . $product->id . '/' . $filename;
                Storage::disk('r2')->put($path, file_get_contents($file));

                ProductImage::create([
                    'product_id' => $product->id,
                    'filename' => $path,
                    'order' => $image['order']
                ]);
            }
        }


        if($request->categoryID){
            CategoryProduct::create([
               'category_id' => $request->categoryID,
               'product_id' => $product->id
            ]);
        }
    }

    public function getAllProducts(){
        $products = Product::with('images', 'categories')->get();
        return Inertia::render('dashboard/store/products/getAllProducts', compact('products'));
    }
    public function deleteProduct(string $id){
        $product = Product::find($id);
        $product->delete();
        return back();
    }
    public function activeToggle(string $id, string $status){
        $product = Product::find($id);
        $product->update([
            "is_active" => $status === 'active' ? 1 : 0
        ]);

        return back();
    }
    public function editProductView(string $id){
        $categories = Category::whereNull('parent_id')->get();
        $categories = $this->categoryService->map($categories);
        $product = Product::with('images', 'categories', 'attributes', 'variants', 'similarProducts')->find($id);
        return Inertia::render('dashboard/store/products/editProduct', compact('product', 'categories'));
    }
    public function editProduct(string $id, EditProductRequest $request){
        $product = Product::findOrFail($id);

        $product->update([
            "name" => $request->name,
            "slug" => $request->slug,
            "description" => $request->description,
            "price" => $request->price,
            "type" => $request->type,
            "is_active" => $request->isActive,
        ]);

        ProductVariant::where('product_id', $product->id)->delete();
        $variants = $request->variants ?? [];
        foreach ($variants as $variant){
            ProductVariant::create([
                "product_id" => $product->id,
                "variant_id" => $variant,
            ]);
        }

        ProductAttribute::where('product_id', $product->id)->delete();
        $attributes = $request->input('attributes', []);
        foreach ($attributes as $attribute) {
            ProductAttribute::create([
                'product_id' => $product->id,
                'attribute_id' => $attribute,
            ]);
        }

        ProductSimilar::where('product_id', $product->id)->delete();
        $similarProducts = $request->input('similar', []);
        foreach ($similarProducts as $similarProduct) {
            ProductSimilar::create([
                'product_id' => $product->id,
                'product_similar_id' => $similarProduct,
            ]);
        }

        if ($request->images) {
            $existingImageIds = array_filter(array_map(fn($img) => $img['id'] ?? null, $request->images));
            $currentImages = ProductImage::where('product_id', $product->id)->get();

            foreach ($currentImages as $img) {
                if (!in_array($img->id, $existingImageIds)) {
                    Storage::disk('r2')->delete($img->filename);
                    $img->delete();
                }
            }

            foreach ($request->images as $image) {

                if (isset($image['filename'])) {
                    $img = ProductImage::find($image['id']);
                    if ($img) {
                        $img->update(['order' => $image['order']]);
                    }
                } elseif (isset($image['file'])) {
                    $file = $image['file'];
                    $filename = uniqid() . '.' . $file->getClientOriginalExtension();
                    $path = 'products/' . $product->id . '/' . $filename;
                    Storage::disk('r2')->put($path, file_get_contents($file));

                    ProductImage::create([
                        'product_id' => $product->id,
                        'filename' => $path,
                        'order' => $image['order']
                    ]);
                }
            }
        } else {

            $currentImages = ProductImage::where('product_id', $product->id)->get();
            foreach ($currentImages as $img) {
                Storage::disk('r2')->delete($img->filename);
                $img->delete();
            }
        }

        if($request->categoryID){
            CategoryProduct::where('product_id', $product->id)->delete();
            CategoryProduct::create([
                'category_id' => $request->categoryID,
                'product_id' => $product->id
            ]);
        }

        return back();
    }
}
