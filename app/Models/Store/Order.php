<?php

namespace App\Models\Store;

use App\Models\DeliveryDetails;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Order extends Model
{
    protected $fillable = ['status', 'email', 'user_id', 'uuid', 'price'];
    protected static function booted()
    {
        static::creating(function ($order) {
            if (!$order->uuid) {
                $order->uuid = (string) Str::uuid();
            }
        });
    }

    public function deliveryDetails(){
        return $this->hasOne(DeliveryDetails::class , 'order_id' , 'id');
    }
    public function cart(){
        return $this->hasOne(Cart::class , 'order_id' , 'id')->with(['cartItems.product', 'cartItems.variant']);
    }
}
