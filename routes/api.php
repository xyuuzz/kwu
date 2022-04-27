<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware("auth:sanctum")->group(function() {

    Route::resource("categories", CategoryController::class);

    Route::resource("cards", CardController::class);
    Route::controller(CardController::class)->group(function() {
        Route::post("/top-up", "topUpSaldo");
    });

    Route::resource( "items", ItemController::class);
    Route::controller(ItemController::class)->group(function() {
//        Route::post("/add-item-order", "addItemOrder");
    });

    Route::resource("sellers", SellerController::class);
    Route::controller(SellerController::class)->group(function() {
        Route::post("/withdraw-seller", "withdrawBalance");
    });

    Route::resource("orders", OrderController::class);
    Route::controller(OrderController::class)->group(function() {
        Route::post("/confirm-order", "confirmOrder");
    });


});


