<?php

namespace App\Http\Controllers\Api\Store;

use App\Http\Controllers\Controller;
use App\Models\Store\ShippingMethod;

class ShippingMethodController extends Controller
{
    public function getShippingMethods(string $id){
        $shippingMethod = ShippingMethod::find($id);

        return response()->json(['success' => true, 'data' => $shippingMethod]);
    }
}
