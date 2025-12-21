<?php

namespace App\Models\Store;

use Illuminate\Database\Eloquent\Model;

class PromotionProduct extends Model
{
    protected $fillable = ['promotion_id', 'product_id'];
}
