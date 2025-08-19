<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $user = User::create([
            "name" => "Krzysztof Juczyński",
            "email" => "krzyszdawdtofjuczynski@gmail.com",
            "password" => "Test12345!",
            "password_changed" => false,
        ]);

        $user->assignRole('default');
    }
}
