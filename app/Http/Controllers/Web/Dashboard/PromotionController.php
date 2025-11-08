<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class PromotionController extends Controller
{
    public function createPromotionView(){
        return Inertia::render('dashboard/store/promotions/createPromotion');
    }
}
