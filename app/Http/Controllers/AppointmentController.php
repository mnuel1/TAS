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

class AppointmentController extends Controller
{
    /**
     * Display a listing of the vehicle appointments.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $appointments = Appointment::all();
        return view('vehicle-appointments.index', compact('appointments'));
    }

    /**
     * Show the form for creating a new vehicle appointment.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('vehicle-appointments.create');
    }

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
            'startDate' => 'required|date|after_or_equal:today', // Example: Ensure it's a date and not in the past
            'endDate' => 'required|date|after:start_appointment', // Example: Ensure it's a date and after the start appointment
            'pickup_loc' => 'required|string|max:255',
            'dropoff_loc' => 'required|string|max:255',
            // 'number' => 'required|string|max:255',
            
        ]);
        
        $appointment = Appointment::create([
            'user_id' => auth()->user()->id,
            'vehicles_id' => $request->input('vehicle_id'),
            'start_appointment' => $request->input('start_date'),
            'end_appointment' => $request->input('end_date'),
            'pickup_loc' => $request->input('pickup_loc'),
            'dropoff_loc' => $request->input('dropoff_loc'),
            // 'status' => $request->input('status'),
        ]);

        $appointment->save();

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
     * Show the form for editing the vehicle appointment.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
        return view('vehicle-appointments.edit', compact('appointment'));
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

        return redirect()->route('vehicle-appointments.index');
    }

    /**
     * Remove the specified vehicle appointment from storage.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointment $appointment)
    {
        $appointment->delete();
        return redirect()->route('vehicle-appointments.index');
    }
}
