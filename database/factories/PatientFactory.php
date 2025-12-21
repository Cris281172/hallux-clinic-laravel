<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Patient>
 */
class PatientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => $this->faker->name(),
            "surname" => $this->faker->lastName(),
            "phone" => $this->faker->numberBetween(90000000, 99999999),
            "email" => $this->faker->unique()->safeEmail(),
            "description" => $this->faker->text(200),
            "gender" => $this->faker->randomElement(['male', 'female']),
            "status_id" => $this->faker->randomElement([1, 2, 3, 4, 5]),
            "birth_date" => $this->faker->date(),
            "patient_card" => $this->faker->randomElement([0, 1]),
            "user_id" => 2
        ];
    }
}
