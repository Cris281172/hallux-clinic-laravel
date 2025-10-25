<?php

namespace App\Models\Store;

use Illuminate\Database\Eloquent\Model;

class ProductImage extends Model
{
    protected $fillable = ['product_id', 'filename', 'order'];
}
