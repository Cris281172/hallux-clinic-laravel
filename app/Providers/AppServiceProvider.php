<?php

namespace App\Providers;

use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
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
        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            return (new MailMessage)
                ->subject('Potwierdź e-mail')
                ->view('emails.verifyEmail', ['url' => $url, 'user' => $notifiable]);
        });
        if(env('FORCE_HTTPS') === true) {
            URL::forceScheme('https');
        }
        Gate::before(function (User $user, $ability) {
            return $user->is_super_admin ? true : null;
        });

        Inertia::share([
            'userPermissions' => fn () => auth()->user() ? auth()->user()->getPermissionsViaRoles() : [],
            'treatments' =>   config('treatments'),
        ]);

    }
}
