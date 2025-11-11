<?php

namespace App\Http\Middleware;

use App\Models\AdminsUser;
use Closure;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminAccessMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $adminsUserID = AdminsUser::where('user_id', $request->user()->id)->first();
        if($request->user() && $adminsUserID){
            return $next($request);
        }
        return redirect()->to(route('store.view') . '?auth=rejestracja');
    }
}
