<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Providers\RouteServiceProvider;
use App\Models\UserAppointmentHistory;
use App\Models\UserNotification;
use App\Models\Vehicles;

class AppointmentController extends Controller
{
  
    
    /**
     * Store a newly created vehicle appointment in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate and store the appointment data
        $request->validate([
            'startDate' => 'required|date|after_or_equal:today', 
            'endDate' => 'required|date|after:start_appointment', 
            'pickup_loc' => 'required|string|max:255',
            'dropoff_loc' => 'required|string|max:255',
    
        ]);
        
        $appointment = Appointment::create([
            'user_id' => auth()->user()->id,
            'vehicles_id' => $request->input('vehicle_id'),
            'start_appointment' => $request->input('startDate'),
            'end_appointment' => $request->input('endDate'),
            'pickup_loc' => $request->input('pickup_loc'),
            'dropoff_loc' => $request->input('dropoff_loc'),            
        ]);

        $appointment->save();

        $vehicle = Vehicles::find($request->input('vehicle_id')); // Find the vehicle by its ID

        if ($vehicle) {
            $vehicle->update(['occupied' => true]);
            $vehicleModel = $vehicle->model;
            // Optionally, you can add other fields you want to update in the 'vehicles' table.
            // Example: $vehicle->update(['occupied' => true, 'another_field' => 'new_value']);
        } else {
            // Handle the case where the vehicle with the provided ID was not found.
        }

        $userAppointmentHistory = UserAppointmentHistory::create([
            'appointment_id' => $appointment->id,
            'status' => 'success',
        ]);

        $userNotification = UserNotification::create([
            'user_id' => auth()->user()->id,
            'title' => 'Appointment of the vehicle ' . $vehicleModel, 
            'date' => $request->input('startDate') . ' ' . $request->input('endDate'),
            'read' => false,
            // Add other fields you want to save in userNotification
        ]);
        
        $userNotification->save();
                
        $userAppointmentHistory->save();

        // Find all vehicles with associated appointments
        $vehiclesWithAppointments = Vehicles::has('appointments')->get();

        // Update the 'occupied' column to true for vehicles with appointments
        $vehiclesWithAppointments->each(function ($vehicle) {
            $vehicle->update(['occupied' => true]);
        });
        
        // Update the 'occupied' column to false for vehicles without appointments
        Vehicles::whereNotIn('id', $vehiclesWithAppointments->pluck('id')->toArray())
            ->update(['occupied' => false]);

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Display the specified vehicle appointment.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request): Response
    {  
        $vehicles = json_decode($request->input('vehicles'));

        return Inertia::render('Appoint/CreateAppointment', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'vehicles' => $vehicles,
        ]);
    }

    /**
     * Display the history of appointment.
     *
     * @param  \App\Models\UserAppointmentHistory  $appointment
     * @return \Illuminate\Http\Response
     */
    public function history(Request $request): Response
    {  
        // Retrieve all vehicles from the 'vehicle' table
        $userAppointmentHistory = UserAppointmentHistory::with('appointment.vehicle')->get();
        
        return Inertia::render('Appoint/history/ShowAppointmentHistory', [
            'userAppointmentHistory' => $userAppointmentHistory,
        ]);
    }



    /**
     * Update the specified vehicle appointment in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Appointment $appointment)
    {
        // Validate and update the appointment data

        $appointment->update([
            'vehicle_id' => $request->input('vehicle_id'),
            'start_date' => $request->input('start_date'),
            'end_date' => $request->input('end_date'),
            'status' => $request->input('status'),
        ]);

        // Find all vehicles with associated appointments
        $vehiclesWithAppointments = Vehicles::has('appointments')->get();

        // Update the 'occupied' column to true for vehicles with appointments
        $vehiclesWithAppointments->each(function ($vehicle) {
            $vehicle->update(['occupied' => true]);
        });

        // Update the 'occupied' column to false for vehicles without appointments
        Vehicles::whereNotIn('id', $vehiclesWithAppointments->pluck('id')->toArray())
            ->update(['occupied' => false]);

        return redirect()->route('vehicle-appointments.index');
    }

    /**
     * Remove the specified vehicle appointment from storage.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    // public function destroy(Appointment $appointment)
    // {
    //     $appointment->delete();
    //     return redirect()->route('vehicle-appointments.index');
    // }
}
