<?php

namespace App\Models\Store;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = ['user_id', 'status'];
}
