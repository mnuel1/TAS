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
        Schema::create('user_preference', function (Blueprint $table) {
            
            $table->id();
            
            $table->unsignedBigInteger('user_id');
            // foreign key
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascade'); // Define foreign key constraint

            $table->unsignedBigInteger('user_preferred_vehicles_id');
            $table->foreign('user_preferred_vehicles_id')
                ->references('id')
                ->on('user_preferred_vehicles')
                ->onDelete('cascade'); // Define foreign key constraint
                
            $table->string('pickup_loc')->nullable();
            $table->string('dropoff_loc')->nullable();
            $table->boolean('email_notif')->nullable();
            $table->boolean('sms_notif')->nullable();
            $table->timestamps();


            

            

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_preference');
    }
};
