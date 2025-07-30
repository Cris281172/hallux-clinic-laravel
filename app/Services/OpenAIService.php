<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class OpenAIService{
    protected $apiKey;

    public function __construct(){
        $this->apiKey = env('OPENAI_API_KEY');
    }
    public function chat($message)
    {
        $response = Http::withHeaders([
            'Authorization' => 'Bearer ' . $this->apiKey,
        ])->post('https://api.openai.com/v1/chat/completions', [
            'model' => 'gpt-3.5-turbo',
            'messages' => [
                ['role' => 'user', 'content' => $message],
            ],
        ]);

        dd($response->body());

        return $response->json('choices')[0]['message']['content'] ?? 'Brak odpowiedzi.';
    }
}
