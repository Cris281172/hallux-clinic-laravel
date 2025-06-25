<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;
use App\Models\User;

class AppServiceProvider extends ServiceProvider
{
    protected $policies = [];

    public function boot(): void
    {
        if(env('FORCE_HTTPS')) {
            URL::forceScheme('https');
        }
        Gate::before(function (User $user, $ability) {
            return $user->is_super_admin ? true : null;
        });

        Inertia::share([
            'permissions' => fn () => auth()->user() ? auth()->user()->getPermissionsViaRoles() : [],
        ]);
    }
}
