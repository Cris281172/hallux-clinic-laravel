<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\PatientStatus;

use App\Models\Visit;

class Patient extends Model
{
    use HasFactory;
    protected $fillable = ['full_name', 'pesel', 'phone', 'description', 'comments', 'gender', 'status_id', 'birth_date', 'address', 'city', 'postal_code', "patient_card", "user_id", "email"];

    public function status(){
        return $this->belongsTo(PatientStatus::class, 'status_id', 'id');
    }
    public function visits(){
        return $this->hasMany(Visit::class, 'patient_id', 'id');
    }
    public function updateStatusBasedOnVisits()
    {
        if ($this->status->slug === 'blocked' || $this->status->slug === 'archived') {
            return;
        }

        $startDate = Carbon::now()->subMonths(6);
        $endDate = Carbon::now()->addMonths(6);
        $hasVisit = $this->visits()
            ->whereBetween('date', [$startDate, $endDate])
            ->exists();
        $statusName = $hasVisit ? 'active' : 'inactive';
        $statusID = PatientStatus::where('slug', $statusName)->value('id');

        if ($statusID && $this->status_id !== $statusID) {
            $this->status_id = $statusID;
            $this->save();
        }
    }
}

