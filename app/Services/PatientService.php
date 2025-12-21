<?php

namespace App\Services;

use App\Models\Patient;
use App\Models\VisitStatus;
use Illuminate\Http\Request;
class PatientService
{
    public function fetchPatientsData(Request $request): array
    {
        $search = $request->input('search');

        $status_id = $request->input('status_id');

        $patientsQuery = Patient::with(['status', 'visits' => function ($query) {
            $query->with('status');
        }])
            ->when($search, function ($query, $search) {
                $query->where(function ($q) use ($search) {
                    $q->where('full_name', 'like', "%$search%")
                        ->orWhere('email', 'like', "%$search%")
                        ->orWhere('phone', 'like', "%$search%");
                });
            })
            ->when($status_id, function ($query, $status_id){
                $query->where('status_id', $status_id);
            })
            ->orderBy('created_at', 'desc');

        $patients = $patientsQuery->paginate(8);

        $patients->getCollection()->transform(function ($patient) {
            $visits = $patient->visits;

            $pastVisits = $visits->where('date','<', now());
            $futureVisits = $visits->where('date','>=', now());

            $patient->lastVisit = $pastVisits->sortByDesc('date')->first();
            $patient->upcomingVisit = $futureVisits->sortBy('date')->first();
            $patient->totalVisits = $visits->count();

            return $patient;
        });

        $visitStatuses = VisitStatus::all();

        return [
            'patients' => $patients,
            'filters' => [
                'search' => $search,
                'status_id' => $status_id,
            ],
            'visitStatuses' => $visitStatuses,
        ];
    }
}
