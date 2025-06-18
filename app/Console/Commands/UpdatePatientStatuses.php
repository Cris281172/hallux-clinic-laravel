<?php

namespace App\Console\Commands;

use App\Models\Patient;
use Illuminate\Console\Command;

class UpdatePatientStatuses extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:update-patient-statuses';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        Patient::chunk(100, function ($patients) {
            foreach ($patients as $patient) {
                $patient->updateStatusBasedOnVisits();
            }
        });
    }
}
