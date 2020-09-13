<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/getTasks', [TaskController::class, 'getTasks']);
Route::POST('/taskComplete', [TaskController::class, 'taskComplete']);
Route::POST('/addTask', [TaskController::class, 'addTask']);
Route::POST('/deleteTask', [TaskController::class, 'deleteTask']);
