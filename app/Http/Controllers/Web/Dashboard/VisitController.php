<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Visit\VisitCreateRequest;
use App\Jobs\SendVisitReminder;
use App\Models\ReminderPhone;
use App\Models\User;
use App\Models\Visit;
use App\Models\VisitNotification;
use App\Models\VisitStatus;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class VisitController extends Controller
{
    private function sendReminder($visit, $phoneReminder){
        if($phoneReminder){
            $nowDate = Carbon::now();
            $visitDate = Carbon::parse($visit->date);

            $diffTime = floor($nowDate->diffInMinutes($visitDate)) - $phoneReminder;

            if($diffTime > 0){
                $job = new SendVisitReminder($visit->id);
                dispatch($job)->delay(Carbon::now()->addMinutes($diffTime));;
                $visit->update([
                    'job_id' => $job->jobID,
                ]);
            }
        }
    }
    public function index(){
        $futureVisits = Visit::where('user_id', auth()->user()->id)->with(['status', 'patient', 'user'])->where('date', '>=', Carbon::now())->orderBy('date', 'asc')->limit(3)->get();
        return Inertia::render('dashboard/visits/index', compact('futureVisits'));
    }
    public function createVisitView(){
        $users = User::whereHas('roles', function ($query) {
            $query->where('name', 'Doktor');
        })->get();
        $statuses = VisitStatus::all();
        return Inertia::render('dashboard/visits/createVisit', compact('statuses', 'users'));
    }
    public function createVisit(VisitCreateRequest $request){

        $visit = Visit::create([
            "user_id" => $request->userID,
            "patient_id" => $request->patientID,
            "description" => "$request->description",
            "status_id" => $request->statusID,
            "price" => $request->price,
            "date" => $request->date
        ]);

        if($request->phone){
            VisitNotification::create([
                "visit_id" => $visit->id,
                "phone" => $request->phone,
                "status" => 'pending'
            ]);
        }
        $this->sendReminder($visit, $request->phoneReminder);
    }
    public function getAllVisits(string $date, $user_id = null){
        $users = User::whereHas('roles', function ($query) {
            $query->where('name', 'Doktor');
        })->get();
        $parsed = Carbon::parse($date);
        $visits = Visit::with(['status', 'patient.status', 'visitNotification'])->whereDate('date', $parsed)->with('user');
        if($user_id && $user_id != 'all'){
            $visits = $visits->where('user_id', $user_id);
        }
        $visits = $visits->get();
        return Inertia::render('dashboard/visits/getAllVisits',  compact('visits', 'users', 'date', 'user_id'));
    }
    public function deleteVisit(string $id){
        Visit::where('id', $id)->delete();
        return back();
    }
    public function editVisitView(string $id){
        $visit = Visit::with(['status', 'patient.status', 'user'])->where('id', $id)->first();
        $users = User::whereHas('roles', function ($query) {
            $query->where('name', 'Doktor');
        })->get();
        $statuses = VisitStatus::all();
        return Inertia::render('dashboard/visits/editVisit', compact('statuses', 'users', 'visit'));
    }
    public function editVisit(Request $request, string $id){
        $visit = Visit::find($id);


        if($visit->date !== $request->date && $visit->job_id !== null){
            DB::table('jobs')->where('payload', 'like', "%" . $visit->job_id . "%")->delete();

            $this->sendReminder($visit, $request->phoneReminder);
        }

        $visit->update([
            "user_id" => auth()->id(),
            "description" => "$request->description",
            'patient_id' => $request->patientID,
            "status_id" => $request->statusID,
            "price" => 0,
            "date" => $request->date
        ]);

        return back();
    }
    public function getAvailableHours(string $date, string $user_id){
        $carbonDate = Carbon::parse($date);

        $startTime = Carbon::createFromTime(8, 0);
        $endTime = Carbon::createFromTime(22, 0);
        $intervalMinutes = 15;

        $allPossibleTimes = [];
        $current = $startTime->copy();
        while ($current <= $endTime) {
            $allPossibleTimes[] = $current->format('H:i');
            $current->addMinutes($intervalMinutes);
        }

        $bookedTimes = Visit::where('user_id', $user_id)->whereDate('date', $carbonDate->format('Y-m-d'))
            ->pluck('date')
            ->map(function ($dt) {
                return Carbon::parse($dt)->format('H:i');
            })
            ->toArray();

        $availableTimes = array_values(array_diff($allPossibleTimes, $bookedTimes));

        return response()->json($availableTimes);
    }
}
