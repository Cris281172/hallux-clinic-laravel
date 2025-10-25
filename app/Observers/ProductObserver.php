<?php

namespace App\Observers;

use App\Models\Store\Product;
use App\Models\Store\ProductAttribute;
use App\Models\Store\ProductImage;
use App\Models\Store\ProductSimilar;
use App\Models\Store\ProductVariant;
use App\Models\VisitNotification;
use Illuminate\Support\Facades\Storage;

class ProductObserver
{
    public function deleted(Product $product): void
    {
        $product->similarProducts()->detach();
        $product->variants()->detach();
        $product->attributes()->detach();
        $product->categories()->detach();

        Storage::disk('r2')->deleteDirectory("products/{$product->id}");

        $product->images()->delete();
    }
}
