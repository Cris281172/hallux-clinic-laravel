<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\ReminderPhone;
use App\Notifications\AppointmentConfirmedNotification;
use Illuminate\Http\Request;

class SmsController extends Controller
{
    public function inbound(Request $request){
        $from = $request->input('sms_from');
        $text = strtoupper(trim($request->input('sms_text')));
        $msgId = $request->input('MsgId');

        if ($text === 'TAK') {
            $appointment = ReminderPhone::where('phone', $from)
                ->where('msg_id', $msgId)
                ->first();

            if ($appointment && !$appointment->confirmed_at) {
                $appointment->update([
                    'confirmed_at' => now(),
                    'status' => 'confirmed'
                ]);

                auth()->user()->notify(new AppointmentConfirmedNotification($appointment));
            }
        }

        return response("OK", 200)
            ->header('Content-Type', 'text/plain');

    }
}
