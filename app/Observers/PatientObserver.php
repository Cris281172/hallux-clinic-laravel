<?php

namespace App\Observers;

use App\Models\Patient;
use App\Models\Visit;

class PatientObserver
{
    /**
     * Handle the Visit "created" event.
     */
    public function created(Patient $patient): void
    {
        //
    }

    /**
     * Handle the Visit "updated" event.
     */
    public function updated(Patient $patient): void
    {
        //
    }

    /**
     * Handle the Visit "deleted" event.
     */
    public function deleted(Patient $patient): void
    {
        Visit::where('patient_id', $patient->id)->delete();
    }

    /**
     * Handle the Visit "restored" event.
     */
    public function restored(Patient $patient): void
    {
        //
    }

    /**
     * Handle the Visit "force deleted" event.
     */
    public function forceDeleted(Patient $patient): void
    {
        //
    }
}
