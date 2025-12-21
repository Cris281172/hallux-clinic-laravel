<?php

namespace App\Observers;

use App\Models\Store\ProductVariant;
use App\Models\Store\Variant;

class VariantObserver
{
    public function deleted(Variant $variant): void
    {
        ProductVariant::where('variant_id', $variant->id)->delete();
    }
}
