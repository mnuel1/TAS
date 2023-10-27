<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicles extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [        
        'user_id',
        'model',
        'driver',
        'rate',
        'ratings',
        'img',
        'description',
        
    ];

    
    public function appointments()
    {
        return $this->hasMany(Appointment::class);
    }

    public function userFeedback()
    {
        return $this->hasMany(UserFeedback::class);
    }
}
