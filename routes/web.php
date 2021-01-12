<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
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



Route::get('/', [App\Http\Controllers\HomeController::class, 'index'])->name('app');
Route::get('/logout',[App\Http\Controllers\UserController::class,'logout']);
Route::post('/login',[App\Http\Controllers\UserController::class,'login']);

Auth::routes();

Route::get('{any}', function () {
    return view('home'); // or wherever your React app is bootstrapped.
})->where('any', '.*');
