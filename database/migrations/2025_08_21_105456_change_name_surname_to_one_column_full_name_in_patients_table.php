<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('patients', function (Blueprint $table) {
            $table->string('full_name')->after('surname');
        });

        DB::statement('UPDATE patients SET full_name = CONCAT(name, " ", surname)');

        Schema::table('patients', function (Blueprint $table) {
            $table->dropColumn(['name', 'surname']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('patients', function (Blueprint $table) {
            $table->string('name')->after('id');
            $table->string('surname')->after('name');
        });

        DB::statement('UPDATE patients SET name = SUBSTRING_INDEX(full_name, " ", 1), surname = SUBSTRING_INDEX(full_name, " ", -1)');

        Schema::table('patients', function (Blueprint $table) {
            $table->dropColumn('full_name');
        });
    }
};
