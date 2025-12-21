<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\VisitStatus;

class VisitStatusController extends Controller
{
    public function getVisitStatuses()
    {
        $users = User::whereHas('roles', function ($query) {
            $query->where('name', 'Doktor');
        })->get();
       $status = VisitStatus::all();

       return response()->json(['success' => true, 'data' => ['statuses' => $status, 'users' => $users]]);
    }
}
