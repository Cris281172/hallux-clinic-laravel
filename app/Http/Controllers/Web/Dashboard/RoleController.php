<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    private function groupPermissions($permissions){
        return [
            [
                "title" => 'Pacjenci',
                "permissions" => [$permissions[0], $permissions[1]]
            ],
            [
                "title" => 'Wizyty',
                "permissions" => [$permissions[2], $permissions[3], $permissions[13]]
            ],
            [
                "title" => 'Role',
                "permissions" => [$permissions[11], $permissions[12], $permissions[14], $permissions[15]]
            ],
            [
                "title" => 'Użytkownicy',
                "permissions" => [$permissions[9], $permissions[10], $permissions[16], $permissions[17]]
            ],
            [
                "title" => 'Blog',
                "permissions" => [$permissions[6], $permissions[7], $permissions[8]]
            ],
            [
                "title" => 'Galeria',
                "permissions" => [$permissions[4], $permissions[5]]
            ],
        ];
    }
    public function createRoleView(){
        $permissions = Permission::all();
        $permissions = $this->groupPermissions($permissions);
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
        $permissions = $this->groupPermissions($permissions);

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
