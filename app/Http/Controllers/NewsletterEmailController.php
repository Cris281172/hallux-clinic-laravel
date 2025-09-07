<?php

namespace App\Http\Controllers;

use App\Jobs\SendVisitReminder;
use App\Models\Visit;
use Illuminate\Http\Request;
use App\Models\NewsletterEmail;
use Carbon\Carbon;
use DB;

class NewsletterEmailController extends Controller
{
    public function addNewEmail(Request $request){
        NewsletterEmail::create([
           "email" => $request->email
        ]);
        return back();
    }
    public function test(){
        $visit = Visit::find(176);

        $nowDate = Carbon::now();
        $visitDate = Carbon::parse($visit->date);

        $diffTime = floor($nowDate->diffInMinutes($visitDate)) - 15;

        if($diffTime > 0){
            $job = new SendVisitReminder($visit->id);
            dispatch($job)->delay(Carbon::now()->addMinutes($diffTime));
            dd($job->jobID);
        }
//
////        SendVisitReminder::dispatch(176);
//

//        $jobs = DB::table('jobs')->get();
//
//        foreach($jobs as $job){
//            dd(json_decode($job->payload), true);
//        }
//
//        dd($jobs);
    }
}
