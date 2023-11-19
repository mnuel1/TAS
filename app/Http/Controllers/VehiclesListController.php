<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use App\Models\Vehicles;

class VehiclesListController extends Controller
{
    /**
     * Display the vehicles.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function show(Request $request)
    {  
        // Retrieve all vehicles from the 'vehicles' table
        $vehicles = Vehicles::all();
        
        return Inertia::render('Appointment', [
            'vehicles' => $vehicles,
        ]);
    }

    /**
     * Show the form for creating a new vehicle.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        // Retrieve all vehicles from the 'vehicles' table
        $vehicles = Vehicles::all();

        return Inertia::render('Staff/Vehicles', [
            'vehicles' => $vehicles,
        ]);
    }
    /**
     * Store a newly created vehicle in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'model' => 'required',
            'img' => 'required',
            'driver' => 'required',
            'rate' => 'nullable',
            'ratings' => 'required',
            'description' => 'required',
            'occupied' => 'required',
            // Add other fields as needed
        ]);
        
        $vehicle = Vehicles::create($validatedData);


        return redirect()->route('staff.create');
    }
    
    /**
     * Remove the specified vehicle from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy($id)
    {
        $vehicle = Vehicles::findOrFail($id);
        $vehicle->delete();


        return redirect()->route('staff.create');
    }
}
