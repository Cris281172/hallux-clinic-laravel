<?php

namespace App\Http\Controllers\Web\Store;

use App\Http\Controllers\Controller;
use App\Models\Store\Order;
use Inertia\Inertia;

class PaymentController extends Controller
{
    public function getPaymentView(string $uuid)
    {
        $order = Order::where('uuid', $uuid)->with('deliveryDetails', 'cart')->firstOrFail();

        if(!$order){
            abort(404);
        }

        return Inertia::render('store/payment', compact('order'));
    }
}
