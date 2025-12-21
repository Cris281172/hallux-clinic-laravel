<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Visit>
 */
class VisitFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "patient_id" => $this->faker->numberBetween(7, 57),
            "user_id" => 2,
            "description" => $this->faker->text(200),
            "status_id" => $this->faker->numberBetween(1, 5),
            "price" => 0,
            "date" => $this->faker->dateTimeBetween('-1 year', '+1 year'),
        ];
    }
}
