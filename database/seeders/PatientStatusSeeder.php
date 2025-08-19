<?php

namespace Database\Seeders;

use App\Models\Patient;
use App\Models\PatientStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PatientStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = [
            ["name" => "Nowy", "slug" => "new"],
            ["name" => "Aktywny", "slug" => "active"],
            ["name" => "Nieaktywny", "slug" => "inactive"],
            ["name" => "Zarchiwizowany", "slug" => "archived"],
            ["name" => "Zablokowany", "slug" => "blocked"],
        ];
       foreach ($statuses as $status) {
           PatientStatus::create($status);
       }
    }
}
