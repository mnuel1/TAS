<?php

namespace App\Http\Controllers\Auth;

use App\Rules\BirthdayRule;
use App\Rules\NumberRule;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{   
    
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'pickup_loc' => 'required|string|max:255',
            'dropoff_loc' => 'required|string|max:255',
            'email_notif' => 'required|boolean',
            'sms_notif' => 'required|boolean',
            
        ]);

        $user = User::create([
            'pickup_loc' => $request->pickup_loc,
            'dropoff_loc' => $request->dropoff_loc,
            'email_notif' => $request->email_notif,
            'sms_notif' => $request->sms_notif,
            // 'number' => $request->number,
        ]);

        event(new Registered($user));
        
        Auth::login($user);
        
        return redirect(RouteServiceProvider::HOME);
    }
}
