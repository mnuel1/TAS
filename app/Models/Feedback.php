<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    use HasFactory;
    

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'vehicle_id',
        'rating',
        'comment',
        
    ];



    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // UserFeedback.php
    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

}
