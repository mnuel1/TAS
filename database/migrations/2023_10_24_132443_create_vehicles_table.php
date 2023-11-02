<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;


return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('model');
            $table->string('img')->nullable();    
            $table->string('driver');
            $table->integer('rate');
            $table->integer('ratings');
            $table->boolean('occupied')->default(false);
            $table->timestamps();
        });

        $vehiclesData = [
            [
                'model' => 'L300',
                'img' => 'l300',
                'driver' => 'John Doe',
                'rate' => 1550,
                'ratings' => 5,
                'description' => 'Spacious van for cargo transportation',
                'occupied' => 0,
            ],
            [
                'model' => 'Motorcycle',
                'img' => 'motor',
                'driver' => 'Jane Smith',
                'rate' => 403,
                'ratings' => 4,
                'description' => 'Compact motorized van',
                'occupied' => 0,
            ],
            [
                'model' => 'Car',
                'img' => 'car',
                'driver' => 'Michael Johnson',
                'rate' => 1800,
                'ratings' => 5,
                'description' => 'Sleek and stylish sedan',
                'occupied' => 0,
            ],
            [
                'model' => 'Bike',
                'img' => 'bike',
                'driver' => 'Sarah Davis',
                'rate' => 50,
                'ratings' => 4,
                'description' => 'Efficient and eco-friendly bicycle',
                'occupied' => 0,
            ],
            [
                'model' => 'E-Bike',
                'img' => 'ebike',
                'driver' => 'Robert Lee',
                'rate' => 60,
                'ratings' => 5,
                'description' => 'Electric bike for urban commuting',
                'occupied' => 0,
            ],
            [
                'model' => 'Tricycle',
                'img' => 'tric',
                'driver' => 'Megan Wilson',
                'rate' => 500,
                'ratings' => 4,
                'description' => 'Traditional three-wheeled transport',
                'occupied' => 0,
            ],
            [
                'model' => 'Multicab',
                'img' => 'multicab',
                'driver' => 'David Brown',
                'rate' => 1425,
                'ratings' => 5,
                'description' => 'Versatile small pickup truck',
                'occupied' => 0,
            ],
            [
                'model' => 'Van',
                'img' => 'van',
                'driver' => 'William Turner',
                'rate' => 1350,
                'ratings' => 5,
                'description' => 'Another van motor description',
                'occupied' => 0,
            ],
            [
                'model' => 'Car',
                'img' => 'car',
                'driver' => 'Emily Harris',
                'rate' => 1799,
                'ratings' => 4,
                'description' => 'Another car description',
                'occupied' => 0,
            ],
            [
                'model' => 'Bike',
                'img' => 'bike',
                'driver' => 'Daniel Clark',
                'rate' => 40,
                'ratings' => 4,
                'description' => 'Another bike description',
                'occupied' => 0,
            ],
            [
                'model' => 'E-Bike',
                'img' => 'ebike',
                'driver' => 'Olivia Rodriguez',
                'rate' => 70,
                'ratings' => 4,
                'description' => 'Another e-bike description',
                'occupied' => 0,
            ],
            [
                'model' => 'Tricycle',
                'img' => 'tric',
                'driver' => 'Liam Martinez',
                'rate' => 654,
                'ratings' => 5,
                'description' => 'Another tricycle description',
                'occupied' => 0,
            ],
            [
                'model' => 'Multicab',
                'img' => 'multicab',
                'driver' => 'Sophia Scott',
                'rate' => 1475,
                'ratings' => 4,
                'description' => 'Another multicab description',
                'occupied' => 0,
            ],
            [
                'model' => 'L300',
                'img' => 'l300',
                'driver' => 'Noah Young',
                'rate' => 1550,
                'ratings' => 5,
                'description' => 'Yet another L300 description',
                'occupied' => 0,
            ],
            [
                'model' => 'Van',
                'img' => 'van',
                'driver' => 'Emma Hall',
                'rate' => 1350,
                'ratings' => 4,
                'description' => 'Yet another van motor description',
                'occupied' => 0,
            ],
            [
                'model' => 'Car',
                'img' => 'car',
                'driver' => 'Alexander King',
                'rate' => 1800,
                'ratings' => 5,
                'description' => 'Yet another car description',
                'occupied' => 0,
            ],
            [
                'model' => 'Bike',
                'img' => 'bike',
                'driver' => 'Ava Turner',
                'rate' => 46,
                'ratings' => 4,
                'description' => 'Yet another bike description',
                'occupied' => 0,
            ],
            [
                'model' => 'E-Bike',
                'img' => 'ebike',
                'driver' => 'William Harris',
                'rate' => 66,
                'ratings' => 4,
                'description' => 'Yet another e-bike description',
                'occupied' => 0,
            ],
            [
                'model' => 'Tricycle',
                'img' => 'tric',
                'driver' => 'Olivia Turner',
                'rate' => 450,
                'ratings' => 5,
                'description' => 'Yet another tricycle description',
                'occupied' => 0,
            ],
            [
                'model' => 'E-Bike',
                'img' => 'ebike',
                'driver' => 'William Harris',
                'rate' => 66,
                'ratings' => 4,
                'description' => 'Yet another e-bike description',
                'occupied' => 0,
            ],
        ];
        
        // Insert the initial data
        DB::table('vehicles')->insert($vehiclesData);
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
