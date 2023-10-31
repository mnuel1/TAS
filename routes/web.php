<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VehiclesListController;
use App\Models\UserAppointmentHistory;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// pages

Route::get('/appointment', [VehiclesListController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('appointment');

Route::get('/notification', [NotificationController::class, 'show'])
    ->middleware(['auth', 'verified'])
    ->name('notification');




Route::get('/settings', function () {
    return Inertia::render('Settings');
})->middleware(['auth', 'verified'])->name('settings');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/appoint', [AppointmentController::class, 'show'])->name('appoint.show');
    Route::post('/appoint', [AppointmentController::class, 'store'])->name('appoint.store');
    Route::get('/appoint/history', [AppointmentController::class, 'history'])->name('appoint.history');
    
});


require __DIR__.'/auth.php';
