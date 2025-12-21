<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\PatientStatus>
 */
class PatientStatusFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->randomElement(['Nowy', 'Aktywny', 'Nieaktywny', 'Zarchiwizowany', 'Zablokowany']),
            'slug' => $this->faker->unique()->randomElement(['new', 'active', 'inactive', 'archived', 'blocked']),
        ];
    }
}
