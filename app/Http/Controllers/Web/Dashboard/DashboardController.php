<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\Visit;
use Carbon\Carbon;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(){
        $userCountVisits = Visit::where('user_id', auth()->user()->id)->where('status_id', 2)->get()->count();
        $userAddPatientsCount = Patient::where('user_id', auth()->user()->id)->get()->count();
        return Inertia::render('dashboard/dashboard', compact('userCountVisits', 'userAddPatientsCount'));
    }
}
