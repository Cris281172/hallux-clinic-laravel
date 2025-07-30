<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\Dashboard\PatientController;
use App\Http\Controllers\Api\MailController;

Route::prefix('dashboard')->name('api.dashboard.')->middleware('auth')->group(function () {

    Route::group(['prefix' => 'patients'], function () {

        Route::get('/get/all', [PatientController::class, 'getAllPatients'])->name('patient.get.all');

    });

});


Route::post('/contact-form', [MailController::class, 'sendContactForm'])->name('send.contact.form');

