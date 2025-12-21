<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\PatientStatus;

class PatientStatusController extends Controller
{
    public function getPatientStatuses(){
        $statuses = PatientStatus::all();
        return response()->json(['data' => $statuses, 'success' => true]);
    }
}
