<?php


return [

    /*
    |--------------------------------------------------------------------------
    | Default Broadcaster
    |--------------------------------------------------------------------------
    |
    | Ta opcja kontroluje, który broadcaster będzie używany przez framework
    | podczas nadawania zdarzeń. Możesz ustawić "pusher", "ably", "redis",
    | "log" lub "null".
    |
    */

    'default' => env('BROADCAST_DRIVER', 'null'),

    /*
    |--------------------------------------------------------------------------
    | Broadcasters
    |--------------------------------------------------------------------------
    |
    | Tutaj możesz zdefiniować wszystkie broadcastery, które będą używane
    | do wysyłania zdarzeń. Laravel obsługuje Pushera, Ably, Redis oraz Log.
    |
    */

    'connections' => [

        'pusher' => [
            'driver' => 'pusher',
            'key' => env('PUSHER_APP_KEY'),
            'secret' => env('PUSHER_APP_SECRET'),
            'app_id' => env('PUSHER_APP_ID'),
            'options' => [
                'cluster' => env('PUSHER_APP_CLUSTER'),
                'useTLS' => true,
            ],
        ],

        'ably' => [
            'driver' => 'ably',
            'key' => env('ABLY_KEY'),
        ],

        'redis' => [
            'driver' => 'redis',
            'connection' => 'default',
        ],

        'log' => [
            'driver' => 'log',
        ],

        'null' => [
            'driver' => 'null',
        ],

    ],

];
