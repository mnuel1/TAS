<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
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
use App\Models\Feedback;
use Illuminate\Support\Js;


class FeedbackController extends Controller
{
    
    /**
     * Store a newly created vehicle appointment in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Validate the incoming request data, e.g., for comment text and user authentication.
        $request->validate([
            'vehicles_id' => 'required|integer',
            'comment' => 'required|string',
            'rating' => 'required|integer|max:5',
            // You can add more validation rules as needed.
        ]);
            
        
        // Create a new comment record in your comments table.
        Feedback::create([
            'user_id' => $request->input('user'),
            'vehicles_id' => $request->input('vehicles_id'),
            'rating' => $request->input('rating'),
            'comment' => $request->input('comment'),
        ]);

        $vehicleId = $request->input('vehicles_id');
        $ratings = Feedback::where('vehicles_id', $vehicleId)->pluck('rating');

        $newRating = $ratings->avg();
        Vehicles::where('id', $vehicleId)->update(['rating' => $newRating]);


        return back();
    
    }

    /**
     * Display the specified vehicle appointment.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request): JsonResponse
    {  
        // Validate the request if needed
        $request->validate([
            'vehicles_id' => 'required|exists:vehicles,id',
        ]);

        // Fetch comments for the specific vehicle
        $comments = Feedback::with('user')
        ->where('vehicles_id', $request->vehicles_id)
        ->get();
        
        $comments->each(function ($comment) {
            $comment->user_name = $comment->user->name; // Assuming 'name' is the user's name attribute
            unset($comment->user); // Optionally, you can remove the entire 'user' attribute if you don't need it.
        });
        
        return response()->json(['comments' => $comments]);
    }

    /**
     * Display the history of appointment.
     *
     * @param  \App\Models\UserAppointmentHistory  $appointment
     * @return \Illuminate\Http\Response
     */
    public function history(Request $request)
    {  
        
    }

    /**
     * Show the form for editing the vehicle appointment.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function edit(Appointment $appointment)
    {
       
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
        
    }

    /**
     * Remove the specified vehicle appointment from storage.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Appointment $appointment)
    {
        
    }
}
