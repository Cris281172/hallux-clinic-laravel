<?php

namespace App\Console\Commands;

use App\Models\Patient;
use App\Models\Visit;
use App\Models\VisitNotification;
use App\Notifications\AppointmentConfirmedNotification;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;

class VisitNotificationStatusCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:visit-notification-status-command';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update appointment notification status when patient has not confirmed visit';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        VisitNotification::chunk(20, function ($visitNotifications) {
            foreach ($visitNotifications as $visitNotification) {
                $visit = Visit::where('id', $visitNotification->visit_id)->first();
                $visitDate = Carbon::parse($visit->date);
                $now = Carbon::now();

                if($now->greaterThanOrEqualTo($visitDate->subDay()) && $now->lessThan($visitDate) || $visitNotification->status !== 'confirmed' || $visitNotification->status !== 'answered') {
                    Notification::route('mail', 'hallux.clinic@gmail.com')->notify(new AppointmentConfirmedNotification($visitNotification, 'Klient nie potwierdził wizyty'));
                    $visitNotification->update(['status' => 'unconfirmed']);
                }
            }
        });
    }
}
