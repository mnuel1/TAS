<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\UserPreferredVehicle;


class UserPreferenceController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    public function storePreferences(Request $request)
    {
        $user = auth()->user();

        // Validate the incoming request data, e.g., the vehicle ID.
        $request->validate([
            'vehicle_id' => 'required|integer|exists:vehicles,id',
        ]);

        // Check if the user already has this vehicle in preferences.
        $userPreferred = UserPreferredVehicle::where('user_id', $user->id)
            ->where('vehicle_id', $request->input('vehicle_id'))
            ->first();

        // If not, create a new user preference entry.
        if (!$userPreferred) {
            UserPreferredVehicle::create([
                'user_id' => $user->id,
                'user_preferred_vehicles_id' => $request->input('vehiclePreferences'),
                'user_preferred_vehicles_id' => $request->input('pickupLocation'),
                'user_preferred_vehicles_id' => $request->input('dropoffLocation'),
                'email_notif' => $request->input('email_notif'),
                'sms_notif' => $request->input('sms_notif'),
            ]);
        }

        return response()->json(['message' => 'Preference stored successfully']);
    }
    

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
