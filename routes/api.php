<?php

use App\Http\Controllers\FeedbackController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\VehiclesListController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::middleware('auth:web')->group(function () {
    Route::get('/comments', [FeedbackController::class, 'show']);
    Route::post('/comments', [FeedbackController::class, 'store']);
// });

Route::get('/appointments/pending', [AppointmentController::class, 'getPendingAppointments']);
Route::put('/appointments/{userId}/{vehicleId}/approve', [AppointmentController::class, 'approveAppointment']);
Route::put('/appointments/{userId}/{vehicleId}/reject', [AppointmentController::class, 'rejectAppointment']);

// Create
Route::post('/staff/vehicles/add', [VehiclesListController::class, 'store']);


// Delete
Route::delete('/staff/vehicles/{id}/delete', [VehiclesListController::class, 'destroy']);