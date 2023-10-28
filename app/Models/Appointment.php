<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    use HasFactory;
    protected $table = 'appointment';
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'vehicles_id',
        'start_appointment',
        'end_appointment',
        'pickup_loc',
        'dropoff_loc',
        
    ];



    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicles::class, 'vehicles_id');
    }

    public function userHistoryAppointments()
    {
        return $this->hasMany(UserAppointmentHistory::class);
    }
}
