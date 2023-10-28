<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAppointmentHistory extends Model
{
    use HasFactory;
    protected $table = 'user_appointment_history';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'appointment_id',        
        'status',
    ];



    public function appointment()
    {
        return $this->belongsTo(Appointment::class, 'appointment_id');
    }

}
