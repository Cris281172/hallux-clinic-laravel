<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [
            'dodawanie pacjentów',
            'wyświetlanie wszystkich pacjentów',
            'dodawanie wizyt',
            'wyświetlanie wszystkich wizyt',
            'dodawanie zdjęć do galerii',
            'wyświetlanie wszystkich zdjęć w galerii',
            'dodawanie wpisów na bloga',
            'wyświetlanie wszystkich wpisów na blogu',
            'wyświetlanie wszystkich komentarzy',
            'dodawanie użytkowników',
            'wyświetlanie wszystkich użytkowników',
            'dodawanie ról',
            'wyświetlanie wszystkich ról',
            'usuwanie wizyt',
            'edytowanie ról',
            'usuwanie ról',
            'edytowanie użytkowników',
            'usuwanie użytkowników',
        ];

        foreach ($permissions as $permission) {
            Permission::create(['name' => $permission, 'guard_name' => 'web']);
        }
    }
}
