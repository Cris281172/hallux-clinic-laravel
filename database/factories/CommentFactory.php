<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Post;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Comment>
 */
class CommentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $ids = Post::get()->pluck('id')->toArray();

        return [
            "text" => fake()->text(),
            "email" => fake()->email(),
            "username" => fake()->userName(),
            "published" => fake()->numberBetween(0, 1),
            "post_id" => count($ids) ? $ids[array_rand($ids)] : null,
            "token" => Str::random(30)
        ];
    }
}
