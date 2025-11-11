<?php

namespace App\Observers;

use App\Models\Store\Attribute;
use App\Models\Store\ProductAttribute;

class AttributeObserver
{
    public function deleted(Attribute $attribute): void
    {
        ProductAttribute::where('attribute_id', $attribute->id)->delete();
    }
}
