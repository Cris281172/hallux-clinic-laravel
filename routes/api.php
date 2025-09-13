<?php

use App\Http\Controllers\Api\Dashboard\PatientController;
use App\Http\Controllers\Api\Dashboard\SmsController;
use App\Http\Controllers\Api\Dashboard\VisitNotificationController;
use App\Http\Controllers\Api\MailController;
use Illuminate\Support\Facades\Route;

Route::prefix('dashboard')->name('api.dashboard.')->middleware('auth')->group(function () {

    Route::group(['prefix' => 'patients'], function () {

        Route::get('/get/all', [PatientController::class, 'getAllPatients'])->name('patient.get.all');

    });

});


Route::post('/contact-form', [MailController::class, 'sendContactForm'])->name('send.contact.form');

Route::group(['prefix' => 'sms'], function () {

    Route::post('/qMHa97QuT0H5ZvdJ8DQu7NbR8t5VRK', [VisitNotificationController::class, 'inbound'])->name('inbound');

    Route::get('/puupcyv4gmhkryjnbmmigqym9wgi9p', [VisitNotificationController::class, 'updateNotificationStatus'])->name('update-notification-status');

});

