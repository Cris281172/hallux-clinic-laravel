<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Patient\PatientCreateRequest;
use App\Models\Patient;
use App\Models\PatientStatus;
use App\Models\User;
use App\Models\VisitStatus;
use App\Services\PatientService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatientController extends Controller
{
    protected $patientService;
    public function __construct(PatientService $patientService){
        $this->patientService = $patientService;
    }
    public function index(){
        $patientsCount = Patient::all()->count();
        $newPatientsCount = Patient::where('created_at', '>=', Carbon::now()->subMonth())->count();
        $activePatientsCount = Patient::where('status_id', 2)->count();
        $newActivePatientsCount = Patient::where('created_at', '>=', Carbon::now()->subMonth())->where('status_id', 2)->count();

        $latestPatients = Patient::latest()->with('status')->take(2)->get();


        $statistics = [
            "patientsCount" => $patientsCount,
            "newPatientsCount" => $newPatientsCount,
            "activePatientsCount" => $activePatientsCount,
            "newActivePatientsCount" => $newActivePatientsCount,
        ];

        return Inertia::render('dashboard/patients/index', compact('statistics', 'latestPatients'));
    }
    public function createPatientView(){
        $statuses = PatientStatus::all();
        return Inertia::render('dashboard/patients/createPatient', compact('statuses'));
    }
    public function createPatient(PatientCreateRequest $request){
        Patient::create([
            "name" => $request->name,
            "surname" => $request->surname,
            "phone" => $request->phone,
            "description" => $request->description,
            "comments" => $request->comments,
            "gender" => $request->gender,
            "birth_date" => $request->birthdate,
            "user_id" => auth()->id(),
            "status_id" => $request->statusID,
            "patient_card" => $request->patientCard,
            "email" => $request->email
        ]);
        return redirect()->to(route('dashboard.patient.get.all'));
    }
    public function editPatientView($id){
        $patient = Patient::where('id', $id)->first();
        $statuses = PatientStatus::all();
        return Inertia::render('dashboard/patients/editPatient', compact('patient', 'statuses'));
    }
    public function editPatient(Request $request, $id){
        Patient::where('id', $id)->update([
            "name" => $request->name,
            "surname" => $request->surname,
            "pesel" => $request->pesel,
            "phone" => $request->phone,
            "description" => $request->description,
            "comments" => $request->comments,
            "gender" => $request->gender,
            "birth_date" => $request->birthdate,
            "address" => $request->address,
            "city" => $request->city,
            "postal_code" => $request->postalCode,
            "user_id" => auth()->id(),
            "status_id" => $request->statusID,
            "patient_card" => $request->patientCard,
            "email" => $request->email
        ]);
        return back();
    }
    public function getAllPatients(Request $request)
    {
        $users = User::whereHas('roles', function ($query) {
            $query->where('name', 'Doktor');
        })->get();
        $data = $this->patientService->fetchPatientsData($request);

        $statuses = PatientStatus::all();

        return Inertia::render('dashboard/patients/getAllPatients', compact('data', 'statuses', 'users'));
    }
}
