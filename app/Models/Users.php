<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $fillable = [
        'name', 'email', 'address', 'number','birthday', // Add other fields as needed
    ];

    // You can add other methods or relationships if necessary
}
