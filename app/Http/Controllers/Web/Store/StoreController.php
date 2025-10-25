<?php

namespace App\Http\Controllers\Web\Store;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class StoreController extends Controller
{
    public function storeView(){
        return Inertia::render('store/store');
    }
}
