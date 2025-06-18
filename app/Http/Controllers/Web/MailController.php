<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\SendContactFormRequest;
use App\Notifications\SendContactFormNotification;
use Illuminate\Support\Facades\Notification;

class MailController extends Controller
{
    public function sendContactForm(SendContactFormRequest $request){
        Notification::route('mail', $request->email)->notify(new SendContactFormNotification($request));
        return back();
    }
}
