<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\VisitStatus;

class StatisticsController extends Controller
{
    public function getStatistics(){
        $patientsCount = Patient::get()->count() + 200;
        $visitsCount = VisitStatus::get()->count() + 5000;
        return response()->json(["patientsCount" => $patientsCount, "visitsCount" => $visitsCount]);
    }
}
