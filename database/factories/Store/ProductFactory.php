<?php

namespace Database\Factories\Store;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "name" => $this->faker->text(35),
            "slug" => $this->faker->slug(),
            "description" => $this->faker->text(300),
            "price" => $this->faker->randomFloat(2, 10),
            "type" => $this->faker->randomElement(['voucher', 'shoe', 'insert']),
        ];
    }
}
