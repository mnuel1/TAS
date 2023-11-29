<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Vehicles;

class DashboardController extends Controller
{
    public function getUsersCount()
    {
        $usersCount = User::count();
        return response()->json(['users_count' => $usersCount]);
    }

    public function getStaffsCount()
    {
       
        $staffsCount = User::where('access', 2)->count();

        return response()->json(['staffs_count' => $staffsCount]);
    }

    public function getVehiclesCount()
    {
        $vehiclesCount = Vehicles::count();
        $occupiedCount = Vehicles::where('occupied', 1)->count();
        $availableCount = Vehicles::where('occupied', 0)->count();

        return response()->json([
            'vehicles_count' => $vehiclesCount,
            'occupied_count' => $occupiedCount,
            'available_count' => $availableCount,
        ]);
    }
}
