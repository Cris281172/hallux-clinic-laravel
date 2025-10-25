<?php

namespace App\Http\Controllers\Web\Store;

use App\Events\MessageSent;
use App\Events\UserVerified;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function signUpView(){

    }
    public function signUp(Request $request){
        $user = User::create([
            "name" => $request->name . $request->surname,
            "email" => $request->email,
            "password" => $request->password,
        ]);
        event(new Registered($user));

        Auth::login($user);

        return redirect()->to('/sklep?auth=weryfikacja');
    }
    public function verificationEmail($id, $hash, Request $request){
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        if (!hash_equals((string) $hash, sha1($user->getEmailForVerification()))) {
            return response()->json(['message' => 'Invalid verification link.'], 403);
        }

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        event(new UserVerified());

        return redirect()->to('/sklep?auth=weryfikacja-sukces');
    }
    public function verificationEmailResend(Request $request){
        $user = auth()->user();
        if (!$user) {
            return response()->json(['message' => 'User not found.'], 404);
        }

        if ($user->hasVerifiedEmail()) {
            return response()->json(['message' => 'Email already verified.'], 400);
        }

        $user->sendEmailVerificationNotification();
        return back();
    }
    public function signIn(LoginRequest $request){
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->to('/sklep');
    }
    public function verifyEmailNotice(){

        return redirect()->to(route('store.view') . '?auth=weryfikacja');
    }
}
