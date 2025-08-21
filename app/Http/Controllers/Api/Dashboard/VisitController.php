<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Visit;
use App\Models\VisitStatus;

class VisitController extends Controller
{
    public function getPatientVisits(string $patientID){
        $visits = Visit::where('patient_id', $patientID)
            ->with('status')
            ->orderBy('date', 'desc')
            ->paginate(40);
        $statuses = VisitStatus::all();
        return response()->json(['visits' => $visits, 'statuses' => $statuses]);
    }
}
