<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPreference extends Model
{
    use HasFactory;
    protected $table = 'user_preference';
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'user_preferred_vehicles_id',
        'pickup_loc',
        'dropoff_loc',
        'email_notif',
        'sms_notif',
    ];


    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
