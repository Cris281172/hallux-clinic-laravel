<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class VisitNotificationController extends Controller
{
    public function updateNotificationStatus(Request $request){
        \Log::info($request->all());
    }
}
