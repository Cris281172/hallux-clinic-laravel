<?php

namespace App\Models\Store;

use Illuminate\Database\Eloquent\Model;

class PromotionCode extends Model
{
    protected $fillable = ['promotion_id', 'code', 'usage_limit', 'usage_count', 'count_per_user'];
}
