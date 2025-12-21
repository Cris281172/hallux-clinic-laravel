<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Schedule;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Schedule::command('app:update-patient-statuses')->daily('02:00');
Schedule::command('generate:sitemap')->daily('02:00');
Schedule::command('app:backup-database-command')->daily('02:00');
Schedule::command('app:visit-notification-status-command')->daily('02:00');
Schedule::command('queue:work --stop-when-empty')->everyMinute()->withoutOverlapping();
