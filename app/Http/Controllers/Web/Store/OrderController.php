<?php

namespace App\Http\Controllers\Web\Store;

use App\Http\Controllers\Controller;
use App\Http\Requests\Store\Order\OrderAccountRequest;
use App\Http\Requests\Store\Order\OrderDeliveryDetailsRequest;
use App\Http\Requests\Store\Order\OrderShippingMethodRequest;
use App\Models\DeliveryDetails;
use App\Models\Store\Order;
use App\Models\Store\ShippingMethod;
use App\Notifications\Store\OrderCreatedNotification;
use Inertia\Inertia;
use Illuminate\Support\Facades\Notification;
class OrderController extends Controller
{
    public function getOrderView(){
        $account = session('order.account');
        $deliveryDetails = session()->get('order.delivery_details');
        $availableShippingMethod = ShippingMethod::where('active', 1)->get();
        $shippingMethod = session()->get('order.shipping_method');
        return Inertia::render('store/order', compact('deliveryDetails', 'account', 'availableShippingMethod', 'shippingMethod'));
    }
    public function deliveryDetails(OrderDeliveryDetailsRequest $request){
        session()->put('order.delivery_details', $request->all());

        return back();
    }
    public function account(OrderAccountRequest $request){
        session()->put('order.account', $request->all());

        return back();
    }
    public function shippingMethod(OrderShippingMethodRequest $request){
        session()->put('order.shipping_method', $request->all());

        return back();
    }
    public function createOrder()
    {
        $account = session('order.account');
        $cartData = [
            "status" => "new"
        ];

        if(auth()->check()){
            $cartData['user_id'] = auth()->id();
        } else {
            $cartData['email'] = $account['email'] ?? null;
        }

        $order = Order::create($cartData);

        $deliveryDetails = session()->get('order.delivery_details');

        DeliveryDetails::create([
            "name" => $deliveryDetails['name'],
            "surname" => $deliveryDetails['surname'],
            "address_line_1" => $deliveryDetails['addressLine1'],
            "address_line_2" => $deliveryDetails['addressLine2'],
            "zip_code" => $deliveryDetails['zipCode'],
            "city" => $deliveryDetails['city'],
            "phone" => $deliveryDetails['phone'],
            "order_id" => $order->id,
        ]);

        session(['guest_order_token' => $order->uuid]);

        session()->forget('order.account');
        session()->forget('order.delivery_details');
        session()->forget('order.shipping_method');

        if(auth()->check()){
            auth()->user()->notify(new OrderCreatedNotification($order));
        }
        else{
            Notification::route('mail', $order->email)->notify(new OrderCreatedNotification($order));
        }

        return redirect()->route('store.payment.get.view', $order->uuid);
    }

}
