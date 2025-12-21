<?php

namespace App\Models\Store;

use Illuminate\Database\Eloquent\Model;

class ProductVariant extends Model
{
    protected $fillable = ['product_id', 'variant_id'];
}
