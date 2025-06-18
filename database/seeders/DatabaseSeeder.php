<?php

namespace Database\Seeders;

use App\Models\Comment;
use App\Models\Patient;
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
        // User::factory(10)->create();

//        User::factory()->create([
//            'name' => 'Test User',
//            'email' => 'test@example.com',
//        ]);

//        Post::factory(500)->create();

//        Comment::factory(3000)->create();
//        Patient::factory(50)->create();
        Visit::factory(120)->create();
    }
}
