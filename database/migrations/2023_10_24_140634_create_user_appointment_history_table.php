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
        Schema::create('user_appointment_history', function (Blueprint $table) {
            
            $table->id();
            $table->unsignedBigInteger('appointment_id');
            $table->enum('status',['success',"cancelled"]);            
            $table->timestamps();
            

            $table->foreign('appointment_id')
                ->references('id')
                ->on('appointment')
                ->onDelete(('cascade'));
            // foreign key
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_appointment_history');
    }
};
