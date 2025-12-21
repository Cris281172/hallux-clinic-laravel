<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Patient;
use App\Models\PatientStatus;
use App\Models\Post;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Visit;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
//            PermissionSeeder::class,
//            RoleSeeder::class,
//            UserSeeder::class,
//            PatientStatusSeeder::class,
//            VisitStatusSeeder::class,
            ProductSeeder::class,
        ]);
    }
}
