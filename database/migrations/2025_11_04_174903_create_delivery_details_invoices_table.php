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
        Schema::create('delivery_details_invoices', function (Blueprint $table) {
            $table->id();
            $table->string('nip');
            $table->string('company');
            $table->string('address_line_1');
            $table->string('address_line_2')->nullable();
            $table->string('zip_code');
            $table->string('city');
            $table->unsignedBigInteger('order_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('delivery_details_invoices');
    }
};
