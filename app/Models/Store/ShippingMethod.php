<?php

namespace App\Models\Store;

use Illuminate\Database\Eloquent\Model;

class ShippingMethod extends Model
{
    protected $fillable = ['name', 'code', 'type', 'price', 'active'];
}
