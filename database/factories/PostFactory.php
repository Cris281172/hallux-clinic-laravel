<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "title" => fake()->title(),
            "short_desc" => fake()->realTextBetween($minNbChars = 500, $maxNbChars = 1000, $indexSize = 2),
            "desc" => fake()->randomHtml(),
            "image" => "eXzgXYTTZ8DAmHUoLmpO_1742835289.webp",
            "slug" => fake()->slug(),
        ];
    }
}
