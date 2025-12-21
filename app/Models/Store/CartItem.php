<?php

namespace App\Models\Store;

use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    protected $fillable = ['cart_id', 'product_id', 'quantity', 'variant_id'];

    public function cart()
    {
        return $this->belongsTo(Cart::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id')->with('images');
    }

    public function variant()
    {
        return $this->belongsTo(Variant::class, 'variant_id');
    }
}
