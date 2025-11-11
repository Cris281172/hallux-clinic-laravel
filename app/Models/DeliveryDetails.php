<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DeliveryDetails extends Model
{
    protected $fillable = ['name', 'surname', 'address_line_1', 'address_line_2', 'city', 'zip_code', 'phone', 'order_id'];
}
