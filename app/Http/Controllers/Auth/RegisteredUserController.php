<?php

namespace App\Http\Controllers\Auth;

use App\Rules\BirthdayRule;
use App\Rules\NumberRule;
use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\UserPreference;
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
            'access' => 'required|numeric|max:255',
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,            
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'birthday' => 'required|string|max:255',
            'number' => 'required|string|max:255',
            'address' => 'required|string|max:255',
            
        ]);

        $user = User::create([
            'access' => $request->access,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'birthday' => $request->birthday,
            'number' => $request->number,
            'address' => $request->address,
        ]);

        // Create the user's initial user preference
        $userPreference = new UserPreference();
        $userPreference->user_id = $user->id; 
        $userPreference->user_preferred_vehicles_id = null; 
        $userPreference->pickup_loc = 'default_pickup_location';
        $userPreference->dropoff_loc = 'default_dropoff_location';
        $userPreference->email_notif = true;
        $userPreference->sms_notif = true;
        $userPreference->save();

        event(new Registered($user));
        
        Auth::login($user);
        
        return redirect(RouteServiceProvider::HOME);
    }
}
