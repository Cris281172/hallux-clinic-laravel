<?php

namespace App\Http\Controllers;

use App\Jobs\SendVisitReminder;
use App\Models\Visit;
use Illuminate\Http\Request;
use App\Models\NewsletterEmail;
use Carbon\Carbon;

class NewsletterEmailController extends Controller
{
    public function addNewEmail(Request $request){
        NewsletterEmail::create([
           "email" => $request->email
        ]);
        return back();
    }
    public function test(){
//        $visit = Visit::find(176);
//
//        $nowDate = Carbon::now();
//        $visitDate = Carbon::parse($visit->date);
//
//        $diffTime = floor($nowDate->diffInMinutes($visitDate)) - 15;
//
//        if($diffTime > 0){
//            dispatch(new SendVisitReminder($visit->id))->delay(Carbon::now()->addMinutes($diffTime));
//        }

        SendVisitReminder::dispatch(176);

//
    }
}
