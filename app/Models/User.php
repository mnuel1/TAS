<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'access',
        'name',
        'email',
        'password',
        'birthday',
        'number',
        'address',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        
    ];

    public function preference() {
        return $this->hasOne(UserPreference::class);
    }

    public function notifications() {
        return $this->hasMany(UserNotification::class);
    }

    public function appointmentHistory() {
        return $this->hasMany(UserAppointmentHistory::class);
    }

    public function preferredVehicles() {
        return $this->hasMany(UserPreferredVehicle::class);
    }

    public function appointment() {
        return $this->hasMany(Appointment::class);
    }

    public function feedback() {
        return $this->hasMany(Feedback::class);
    }

}
