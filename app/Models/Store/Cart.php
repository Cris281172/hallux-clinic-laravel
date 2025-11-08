<?php

namespace App\Models\Store;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = ['user_id', 'status', 'shipping_price'];

    public function cartItems(){
        return $this->hasMany(CartItem::class, 'cart_id',  'id');
    }
}
