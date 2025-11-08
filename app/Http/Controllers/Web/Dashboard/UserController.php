<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;

class UserController extends Controller
{
    public function getUsers(){
        $users = User::paginate(10);
        return Inertia::render('dashboard/store/users/getAllUsers', compact('users'));
    }
    public function deleteUser(string $id){
        $user = User::findOrFail($id);

        $user->delete();

        return back();
    }
    public function getUserDetails(string $id){
        $user = User::where('id', $id)->with('cart')->firstOrFail();
        return Inertia::render('dashboard/store/users/getUserDetails', compact('user'));
    }
}
