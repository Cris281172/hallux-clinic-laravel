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
        Schema::create('promotions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->enum('type', ['product', 'category', 'cart', 'code']);
            $table->string('discount_value');
            $table->enum('discount_type', ['percent', 'fixed']);
            $table->timestamp('start_date')->nullable();
            $table->timestamp('end_date')->nullable();
            $table->boolean('active')->default(false);;
            $table->string('min_order_value')->nullable();
            $table->boolean('only_once_per_user')->default(false);;
            $table->enum('visibility', ['all', 'logged_in', 'specific_users'])->default('all');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('promotions');
    }
};
