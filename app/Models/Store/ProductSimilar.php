<?php

namespace App\Models\Store;

use Illuminate\Database\Eloquent\Model;

class ProductSimilar extends Model
{
    protected $table = 'product_similar';
    protected $fillable = ['product_id', 'product_similar_id'];
}
