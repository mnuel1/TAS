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
use App\Models\UserNotification;

class NotificationController extends Controller
{
    /**
     * Display the notification.
     *
     * @param  \App\Models\Appointment  $appointment
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request): Response
    {  
        // Retrieve all notification from the 'vehicle' table
        $notification = UserNotification::all();
        
        return Inertia::render('Notification', [
            'notification' => $notification,
        ]);
    }
}
