<?php

namespace App\Models\Store;

use Illuminate\Database\Eloquent\Model;

class PromotionUser extends Model
{
    protected $fillable = ['user_id', 'promotion_id'];
}
