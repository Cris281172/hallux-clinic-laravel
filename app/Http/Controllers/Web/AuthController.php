<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function create(){
        return Inertia::render('auth/login');
    }
    public function store(LoginRequest $request){
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->to(route('dashboard'));
    }
    public function destroy(Request $request)
    {
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('login');
    }
}

