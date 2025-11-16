<?php

namespace App\Http\Controllers\Api\Dashboard\Store;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function searchUsers(Request $request){
        $query = User::query();

        if ($search = $request->get('q')) {
            $query->where(function($q) use ($search) {
                $q->where('name', 'like', "%{$search}%")
                    ->orWhere('email', 'like', "%{$search}%");
            });
        }

        return response()->json(['success' => true, 'data' => $query->take(5)->get()]);
    }
}
