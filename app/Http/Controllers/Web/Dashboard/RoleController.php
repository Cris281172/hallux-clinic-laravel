<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function createRoleView(){
        $permissions = Permission::all();
        return Inertia::render('dashboard/users/createRole', compact('permissions'));
    }
    public function createRole(Request $request){
        $role = Role::create([
            "name" => $request->roleName,
        ]);
        $permissions = Permission::whereIn('id', $request['permissions'])->get();
        $role->syncPermissions($permissions);
    }
    public function getAllRoles(){
        $roles = Role::withCount('permissions')->get();
        return Inertia::render('dashboard/users/getAllRoles', compact('roles'));
    }
    public function editRoleView(string $id){
        $role = Role::where('id', $id)->with('permissions')->first();
        $permissions = Permission::all();
        return Inertia::render('dashboard/users/editRole', compact('role', 'permissions'));
    }
    public function editRole(Request $request, string $id){
        $role = Role::find($request->id);
        $role->update([
            "name" => $request->roleName,
        ]);

        $role->syncPermissions($request->permissions);
    }
    public function deleteRole(string $id){
        Role::where('id', $id)->delete();
        return back();
    }
}
