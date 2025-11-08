<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SendContactFormRequest;
use App\Models\ContactMessage;
use App\Notifications\SendContactFormNotification;
use Illuminate\Support\Facades\Notification;

class MailController extends Controller
{
    public function sendContactForm(SendContactFormRequest $request){

        ContactMessage::create(array(
           "name" => $request->name,
           "surname" => $request->surname,
           "email" => $request->email,
           "phone" => $request->phone,
           "message" => $request->message,
        ));

        Notification::route('mail', $request->email)->notify(new SendContactFormNotification($request));
        return response()->json(["success" => $request->all()]);
    }
}
