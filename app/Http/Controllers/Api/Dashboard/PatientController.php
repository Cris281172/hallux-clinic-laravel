<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Services\PatientService;
use Carbon\Carbon;
use Illuminate\Http\Request;
class PatientController extends Controller
{
    protected $patientService;
    public function __construct(PatientService $patientService){
        $this->patientService = $patientService;
    }
    public function getAgeStatistics(){

        $now = Carbon::now();

        $ageStatistic = [
            [
                "ageGroup" => "1-10",
                "count" => Patient::whereBetween('birth_date', [
                    $now->copy()->subYears(10),
                    $now
                ])->count(),
            ],
            [
                "ageGroup" => "11-20",
                "count" => Patient::whereBetween('birth_date', [
                    $now->copy()->subYears(20),
                    $now->copy()->subYears(11)
                ])->count(),
            ],
            [
                "ageGroup" => "21-30",
                "count" => Patient::whereBetween('birth_date', [
                    $now->copy()->subYears(30),
                    $now->copy()->subYears(21)
                ])->count(),
            ],
            [
                "ageGroup" => "31-50",
                "count" => Patient::whereBetween('birth_date', [
                    $now->copy()->subYears(50),
                    $now->copy()->subYears(31)
                ])->count(),
            ],
            [
                "ageGroup" => "51-70",
                "count" => Patient::whereBetween('birth_date', [
                    $now->copy()->subYears(70),
                    $now->copy()->subYears(51)
                ])->count(),
            ],
            [
                "ageGroup" => "71-89",
                "count" => Patient::whereBetween('birth_date', [
                    $now->copy()->subYears(89),
                    $now->copy()->subYears(71)
                ])->count(),
            ],
            [
                "ageGroup" => "90+",
                "count" => Patient::where('birth_date', '<=', $now->copy()->subYears(90))->count(),
            ]
        ];

        $total = array_sum(array_column($ageStatistic, 'count'));


        foreach ($ageStatistic as &$stat) {
            $stat['percentage'] = $total > 0 ? round(($stat['count'] / $total) * 100, 2) . '' : '0';
        }
        unset($stat);

        return response()->json($ageStatistic);
    }
    public function getGenderStatistics(){
        $maleCount = Patient::where('gender', 'male')->count();
        $femaleCount = Patient::where('gender', 'female')->count();

        return response()->json([
           'maleCount' => $maleCount,
           'femaleCount' => $femaleCount
        ]);
    }
    public function getAllPatients(Request $request)
    {
        $data = $this->patientService->fetchPatientsData($request);

        return response()->json($data);
    }
    public function getPatient(string $id){
        $patient = Patient::where('id', $id)->with('visits', 'status')->first();
        $visits = $patient->visits;

        $pastVisits = $visits->where('date','<', now());
        $futureVisits = $visits->where('date','>=', now());
        $patient->lastVisit = $pastVisits->sortByDesc('date')->first();
        $patient->upcomingVisit = $futureVisits->sortBy('date')->first();
        $patient->totalVisits = $visits->count();


        return response()->json(['success' => true, 'data' => $patient]);
    }
    public function searchPatients(Request $request){
        $query = Patient::query();

        if ($search = $request->get('q')) {
            $query->where(function($q) use ($search) {
                $q->where('full_name', 'like', "%{$search}%")
                    ->orWhere('phone', 'like', "%{$search}%");
            });
        }

        return response()->json(['success' => true, 'data' => $query->take(5)->get()]);
    }
}
