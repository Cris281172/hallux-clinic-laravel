<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\VisitNotification;
use App\Notifications\AppointmentConfirmedNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class SmsController extends Controller
{
    public function inbound(Request $request){
        $to = $request->input('sms_to');
        $text = $request->input('sms_text');
        $msgId = $request->input('MsgId');

        \Log::info('Inbound SMS', $request->only([
            'sms_from', 'sms_to', 'sms_text', 'sms_date', 'username', 'MsgId'
        ]));

        if ($text === 'TAK') {
            $appointment = VisitNotification::where('phone', $to)
                ->where('msg_id', $msgId)
                ->first();

            if ($appointment) {
                $appointment->update([
                    'status' => 'confirmed'
                ]);

                Notification::route('mail', 'hallux.clinic@gmail.com')->notify(new AppointmentConfirmedNotification($appointment));
            }
        }

        return response("OK", 200)
            ->header('Content-Type', 'text/plain');

    }
}
