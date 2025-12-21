<?php

namespace Database\Seeders;

use App\Models\VisitStatus;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VisitStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $statuses = [
            ["name" => "Zaplanowana", "slug" => "scheduled"],
            ["name" => "Odbyta", "slug" => "completed"],
            ["name" => "Nieobecny", "slug" => "no_show"],
            ["name" => "Odwołana", "slug" => "cancelled"],
            ["name" => "W trakcie", "slug" => "in_progress"],
        ];

        foreach ($statuses as $status) {
            VisitStatus::create($status);
        }
    }
}
