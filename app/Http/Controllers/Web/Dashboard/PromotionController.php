<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Store\Promotion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PromotionController extends Controller
{
    public function createPromotionView(){
        return Inertia::render('dashboard/store/promotions/createPromotion');
    }
    public function createPromotion(Request $request){
        $promotionData = $request->promotion;
        Promotion::create([
            "name" => $promotionData['name'],
            "type" => $promotionData['type'],
            "discount_value" => $promotionData['discountValue'],
            "discount_price" => $promotionData['discountType'],
            "start_date" => $promotionData['startDate'],
            "end_date" => $promotionData['endDate'],
            "active" => true,
            "min_order_value" => $promotionData['minOrderValue'],
            "only_once_per_user" => $promotionData['onlyOncePerUser'],
            "visibility" => $promotionData['visibility'],
        ]);
    }
}
