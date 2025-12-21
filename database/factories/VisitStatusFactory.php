<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VisitStatus>
 */
class VisitStatusFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->randomElement(['Zaplanowana', 'Odbyta', 'Nieobecny', 'Odwołana', 'W trakcie']),
            'slug' => $this->faker->unique()->randomElement(['scheduled', 'completed', 'no_show', 'cancelled', 'in_progress']),
        ];
    }
}
