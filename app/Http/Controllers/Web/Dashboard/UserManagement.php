<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Controllers\Dashboard\Hash;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Spatie\Permission\Models\Role;

class UserManagement extends Controller
{
    public function createUserView(){
        $roles = Role::all();
        return Inertia::render('dashboard/users/createUser', compact('roles'));
    }
    public function createUser(Request $request){
        $user = User::create([
            "name" => $request->name,
            "email" => $request->email,
            "password" => $request->password,
        ]);
        $user->assignRole($request->role);
    }
    public function getAllUsers(){
        $users = User::all()->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->getRoleNames(),
            ];
        });

        return Inertia::render('dashboard/users/getAllUsers', compact('users'));
    }
    public function editUserView(string $id){
        $roles = Role::all();
        $user = User::where('id', $id)->first();
        $role = $user->roles->pluck('id')->toArray();
        return Inertia::render('dashboard/users/editUser', compact('roles', 'user', 'role'));
    }
    public function editUser(Request $request, string $id) {
        $user = User::where('id', $id)->first();

        $data = [
            'name' => $request->name,
            'email' => $request->email,
        ];

        if (!empty($request->password)) {
            $data['password'] = Hash::make($request->password);
        }

        $user->update($data);

        if ($request->role) {
            $user->syncRoles($request->role);
        }
    }
    public function deleteUser(string $id){
        User::where('id', $id)->delete();
        return back();
    }
}
