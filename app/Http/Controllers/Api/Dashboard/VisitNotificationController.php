<?php

namespace App\Http\Controllers\Api\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\VisitNotification;
use App\Notifications\AppointmentConfirmedNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class VisitNotificationController extends Controller
{
    public function updateNotificationStatus(Request $request){
        $data = $request->all();

        $id = $data['list'][0]['id'] ?? null;

        if($id == null){
            return response('OK', 200)->header('Content-Type', 'text/plain');
        }

        VisitNotification::where('msg_id', $id)->update(['status' => $data['status']]);

        return response('OK', 200)->header('Content-Type', 'text/plain');
    }
    public function inbound(Request $request){
        $text = strtolower(trim($request->input('sms_text')));
        $msgId = $request->input('MsgId');

        $appointment = VisitNotification::where('msg_id', $msgId)->first();

        $statusMessage = '';

        if($appointment){
            if($text === 'tak'){
                $appointment->update([
                    'status' => 'confirmed'
                ]);
                $statusMessage = 'Klient potwierdził wizytę.';
            }
            else{
                $statusMessage = "Klient wysłał inną odpowiedź: '{$text}'.";
            }

            Notification::route('mail', 'hallux.clinic@gmail.com')->notify(new AppointmentConfirmedNotification($appointment, $statusMessage));
        }
        return response("OK", 200)
            ->header('Content-Type', 'text/plain');

    }
}
