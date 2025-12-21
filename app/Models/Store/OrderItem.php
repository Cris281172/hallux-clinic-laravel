<?php

namespace App\Models\Store;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $fillable = ['order_id', 'product_id', 'quantity', 'price', 'variant_id'];

    public function order(){
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }
}
