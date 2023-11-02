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
use App\Models\UserPreference;


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

        // Validate the incoming request data, e.g., the user preferences.
        $request->validate([
            'user_preferred_vehicles_id' => 'required|integer',
            'pickup_loc' => 'required|string',
            'dropoff_loc' => 'required|string',
            'email_notif' => 'boolean',
            'sms_notif' => 'boolean',
        ]);

        // Check if the user already has preferences, or create a new entry.
        $userPreferences = UserPreference::where('user_id', $user->id)->first();
        
        // dd($userPreferences);

        if ($userPreferences) {
            // User preferences already exist, update them.
            $userPreferences->update([
                'user_preferred_vehicles_id' => $request->input('user_preferred_vehicles_id'),
                'pickup_loc' => $request->input('pickup_loc'),
                'dropoff_loc' => $request->input('dropoff_loc'),
                'email_notif' => $request->input('email_notif'),
                'sms_notif' => $request->input('sms_notif'),
            ]);
        } else {
            // User preferences don't exist, create a new entry.
            UserPreference::create([
                'user_id' => $user->id,
                'user_preferred_vehicles_id' => $request->input('user_preferred_vehicles_id'),
                'pickupLocation' => $request->input('pickup_loc'),
                'dropoffLocation' => $request->input('dropoff_loc'),
                'email_notif' => $request->input('email_notif'),
                'sms_notif' => $request->input('sms_notif'),
            ]);
        }


        // return response()->json(['message' => 'Preference stored successfully']);
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
