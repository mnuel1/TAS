<?php
namespace App\Http\Controllers;

use Inertia\Response;
use Inertia\Inertia;
use App\Models\Users;
use Illuminate\Http\Request;


class UsersController extends Controller
{

    public function show(Request $request): Response
    {  
        // Retrieve all vehicles from the 'vehicle' table
        $users = Users::where('access', 1)->get();
        
        return Inertia::render('Users', [
            'users' => $users,
        ]);
    }

    public function showStaff(Request $request): Response
    {  
        // Retrieve all vehicles from the 'vehicle' table
        $users = Users::where('access', 2)->get();
        
        return Inertia::render('Users', [
            'users' => $users,
        ]);
    }
}
