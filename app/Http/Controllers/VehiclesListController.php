<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Vehicles;

class VehiclesListController extends Controller
{
    /**
     * Display the vehicles.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request): Response
    {  
        // Retrieve all vehicles from the 'vehicle' table
        $vehicles = Vehicles::all();

        return Inertia::render('Appointment', [
            'vehicles' => $vehicles,
        ]);
    }
}
