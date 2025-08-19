<?php

use App\Http\Controllers\Web\AuthController;
use App\Http\Controllers\Web\BlogController;
use App\Http\Controllers\Web\CommentController;
use App\Http\Controllers\Web\Dashboard\DashboardController;
use App\Http\Controllers\Web\Dashboard\GalleryController;
use App\Http\Controllers\Web\Dashboard\PatientController;
use App\Http\Controllers\Api\Dashboard\PatientController as PatientControllerAPI;
use App\Http\Controllers\Web\Dashboard\PostController;
use App\Http\Controllers\Web\Dashboard\RoleController;
use App\Http\Controllers\Web\Dashboard\UserManagement;
use App\Http\Controllers\Web\Dashboard\VisitController;
use App\Http\Controllers\Api\Dashboard\VisitController as VisitControllerAPI;
use App\Http\Controllers\Web\MailController;
use App\Http\Controllers\Web\PageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Web\Settings\PasswordController;
use App\Http\Controllers\GithubDeployController;
use App\Http\Controllers\Api\StatisticsController;
use App\Http\Controllers\Web\Dashboard\InvoiceController;
use App\Http\Controllers\Web\Dashboard\VoucherController;

Route::post('/deploy', [GithubDeployController::class, 'deploy'])->name('github.deploy');

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/cennik', [PageController::class, 'priceList'])->name('price-list');
Route::get('/galeria/{type}', [PageController::class, 'gallery'])->name('gallery');
Route::get('/kontakt', [PageController::class, 'contact'])->name('contact');
Route::get('/o-mnie', [PageController::class, 'aboutMe'])->name('about-me');
Route::get('/faq', [PageController::class, 'faq'])->name('faq');
Route::get('/kontakt/{status}', [PageController::class, 'contactStatus'])->name('contact-status');
Route::group(['prefix' => 'uslugi'], function () {
    Route::get('/', [PageController::class, 'services'])->name('services');
    Route::get('/{category}', [PageController::class, 'serviceCategory'])->name('serviceCategory');
    Route::get('/{category}/{service}', [PageController::class, 'service'])->name('service');
});


Route::get('/404', [PageController::class, 'notFound'])->name('notFound');


Route::group(['prefix' => 'auth'], function (){

   Route::get('login', [AuthController::class, 'create'])->name('login');

   Route::post('login', [AuthController::class, 'store']);

});

Route::prefix('api')->name('api.')->group(function (){

    Route::prefix('statistics')->name('statistics.')->group(function () {

        Route::get('/get', [StatisticsController::class, 'getStatistics'])->name('get');

    });

});

Route::group(['middleware' => 'auth'], function (){


    Route::prefix('api')->name('api.dashboard.')->group(function () {

        Route::prefix('patients')->name('patients.')->group(function () {

            Route::prefix('statistics')->name('statistics.')->group(function () {

                Route::get('/age', [PatientControllerAPI::class, 'getAgeStatistics'])->name('age');

                Route::get('/gender', [PatientControllerAPI::class, 'getGenderStatistics'])->name('gender');

            });

            Route::get('/get/all', [PatientControllerAPI::class, 'getAllPatients'])->name('get.all');

        });

        Route::prefix('visits')->name('visits.')->group(function () {

            Route::get('/get/all/{patientID}/patient', [VisitControllerAPI::class, 'getPatientVisits'])->name('get.all.patient.visits');

        });

    });

    Route::prefix('auth')->group(function () {

        Route::get('logout', [AuthController::class, 'destroy'])->name('logout');

    });

    Route::group(['prefix' => 'dashboard'], function (){

        Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

        Route::group(['prefix' => 'password'], function (){

            Route::post('/update', [PasswordController::class, 'update'])->name('password.update');

        });

        Route::group(['prefix' => 'gallery'], function (){

            Route::group(['middleware' => ['can:dodawanie zdjęc do galerii']], function (){

                Route::get('/upload', [GalleryController::class, 'uploadImageView'])->name('dashboard.gallery.upload.view');

                Route::post('/upload', [GalleryController::class, 'uploadImage'])->name('dashboard.gallery.upload');

            });

            Route::group(['middleware' => ['can:wyświetlanie wszystkich zdjęć w galerii']], function (){

                Route::get('get/all', [GalleryController::class, 'getAllImages'])->name('dashboard.gallery.get.all');

            });

            //TODO: delete permission

            Route::delete('delete/{id}', [GalleryController::class, 'deleteImage'])->name('dashboard.gallery.delete.image');

        });

        Route::group(['prefix' => 'blog'], function (){

            Route::group(['prefix' => 'post'], function (){

                Route::group(['middleware' =>  ['can:dodawanie wpisów na bloga']], function (){

                    Route::get('create', [PostController::class, 'createPostView'])->name('dashboard.blog.post.create.view');

                    Route::post('create', [PostController::class, 'createPost'])->name('dashboard.blog.post.create');

                });

                Route::group(['middleware' => ['can:wyświetlanie wszystkich wpisów na blogu']], function (){

                    Route::get('get/all', [PostController::class, 'getAllPosts'])->name('dashboard.blog.post.get.all');

                });

                Route::group(['middleware' => ['can:usuwanie wpisów na blogu']], function (){

                    Route::delete('delete/{id}', [PostController::class, 'deletePost'])->name('dashboard.blog.post.delete');

                });


                Route::group(['middleware' => ['can:edytowanie wpisów na blogu']], function (){

                    Route::get('edit/{id}', [PostController::class, 'editPostView'])->name('dashboard.blog.post.edit.view');

                    Route::post('edit/{id}', [PostController::class, 'editPost'])->name('dashboard.blog.post.edit');

                });

            });

            Route::group(['prefix', 'comment'], function (){

                Route::group(['middleware' => ['can:wyświetlanie wszystkich komentarzy']], function (){

                    Route::get('get/all', [CommentController::class, 'getAllComments'])->name('dashboard.blog.comment.get.all');

                });

                //TODO: edit/change-published permission

                Route::get('delete/{id}', [CommentController::class, 'deleteComment'])->name('dashboard.blog.comment.delete');

                Route::get('change-published/{id}/{published}', [CommentController::class, 'changePublished'])->name('dashboard.blog.comment.change.published');

            });

        });

        Route::group(['prefix' => 'patients'], function (){

            Route::get('/', [PatientController::class, 'index'])->name('dashboard.patient');

            Route::group(['middleware' => ['can:dodawanie pacjentów'] ], function (){

                Route::get('/create', [PatientController::class, 'createPatientView'])->name('dashboard.patient.create.view');

                Route::post('/create', [PatientController::class, 'createPatient'])->name('dashboard.patient.create');

            });

            Route::group(['middleware' => ['can:wyświetlanie wszystkich pacjentów']], function (){

                Route::get('/get/all', [PatientController::class, 'getAllPatients'])->name('dashboard.patient.get.all');

            });

            //TODO: edit permission and move /get/all/json to api.php file

            Route::get('/delete/{id}',  [PatientController::class, 'deletePatient'])->name('dashboard.patient.delete');

            Route::get('/edit/{id}', [PatientController::class, 'editPatientView'])->name('dashboard.patient.edit.view');

            Route::post('/edit/{id}', [PatientController::class, 'editPatient'])->name('dashboard.patient.edit');

            Route::get('/get/all/json', [PatientController::class, 'getAllPatientsJson'])->name('dashboard.patient.get.all.json');

        });

        Route::group(['prefix' => 'visits'], function (){

            Route::group(['middleware' => ['can:dodawanie wizyt']], function (){

                Route::get('/create', [VisitController::class, 'createVisitView'])->name('dashboard.visit.create.view');

                Route::post('/create', [VisitController::class, 'createVisit'])->name('dashboard.visit.create');

            });

            Route::group(['middleware' => ['can:wyświetlanie wszystkich wizyt']], function (){

                Route::get('/get/all/{date}/{user_id?}', [VisitController::class, 'getAllVisits'])->name('dashboard.visit.get.all');

            });

            //TODO: delete/edit/available-hours permission and move /get/all/{id}/patient to api.php file

            Route::group(['middleware' => ['can:usuwanie wizyt']], function () {

                Route::get('/delete/{id}', [VisitController::class, 'deleteVisit'])->name('dashboard.visit.delete');

            });

            Route::get('/', [VisitController::class, 'index'])->name('dashboard.visit');


            Route::get('/edit/{id}', [VisitController::class, 'editVisitView'])->name('dashboard.visit.edit.view');

            Route::post('/edit/{id}', [VisitController::class, 'editVisit'])->name('dashboard.visit.edit');

            Route::get('/available-hours/{date}/{user_id}', [VisitController::class, 'getAvailableHours'])->name('dashboard.visit.get.available.hours');

        });

        Route::group(['prefix' => 'users'], function (){

            Route::group(['middleware' => ['can:dodawnie użytkowników']], function (){

                Route::get('/create', [UserManagement::class, 'createUserView'])->name('dashboard.user.create.view');

                Route::post('/create', [UserManagement::class, 'createUser'])->name('dashboard.user.create');

            });

            Route::group(['middleware' => ['can:wyświetlanie wszystkich użytkowników']], function (){

                Route::get('/get/all', [UserManagement::class, 'getAllUsers'])->name('dashboard.user.get.all');

            });

            Route::group(['middleware' => ['can:edytowanie użytkowników']], function (){

                Route::get('/edit/{id}', [UserManagement::class, 'editUserView'])->name('dashboard.user.edit.view');

                Route::post('/edit/{id}', [UserManagement::class, 'editUser'])->name('dashboard.user.edit');

            });

            Route::group(['middleware' => ['can:usuwanie użytkowników']], function (){

                Route::delete('/delete/{id}', [UserManagement::class, 'deleteUser'])->name('dashboard.user.delete');

            });

        });

        Route::group(['prefix' => 'role'], function (){

            Route::group(['middleware' => ['can:dodawanie ról']], function (){

                Route::get('/create', [RoleController::class, 'createRoleView'])->name('dashboard.role.create.view');

                Route::post('/create', [RoleController::class, 'createRole'])->name('dashboard.role.create');

            });

            Route::group(['middleware' => ['can:wyświetlanie wszystkich ról']], function (){

                Route::get('/get/all', [RoleController::class, 'getAllRoles'])->name('dashboard.role.get.all');

            });

            Route::group(['middleware' => ['can:edytowanie ról']], function (){

                Route::get('/edit/{id}', [RoleController::class, 'editRoleView'])->name('dashboard.role.edit.view');

                Route::post('/edit/{id}', [RoleController::class, 'editRole'])->name('dashboard.role.edit');

            });

            Route::group(['middleware' => ['can:usuwanie ról']], function (){

                Route::get('/delete/{id}', [RoleController::class, 'deleteRole'])->name('dashboard.role.delete');

            });


        });

        Route::group(['prefix' => 'invoices'], function (){

            Route::get('/create', [InvoiceController::class, 'createInvoiceView'])->name('dashboard.invoice.create.view');

            Route::post('/create', [InvoiceController::class, 'createInvoice'])->name('dashboard.invoice.create');

            Route::get('/download/{id}', [InvoiceController::class, 'downloadInvoice'])->name('dashboard.invoice.download');

        });

        Route::group(['prefix' => 'vouchers'], function (){

            Route::group(['middleware' => ['can:dodawanie voucherów']], function (){

                Route::get('/create', [VoucherController::class, 'createVoucherView'])->name('dashboard.voucher.create.view');

                Route::post('/create', [VoucherController::class, 'createVoucher'])->name('dashboard.voucher.create');

            });

            Route::group(['middleware' => ['can:wyświetlanie wszystkich voucherów']], function (){

                Route::get('/get/all', [VoucherController::class, 'getAllVouchers'])->name('dashboard.voucher.get.all');

            });


            Route::group(['middleware' => 'can:edytowanie voucherów'], function (){

                Route::get('/edit/{id}', [VoucherController::class, 'editVoucherView'])->name('dashboard.voucher.edit.view');

                Route::post('/edit/{id}', [VoucherController::class, 'editVoucher'])->name('dashboard.voucher.edit');

            });

            Route::group(['middleware' => 'can:aktualizowanie statusu vouchera'], function (){

                Route::post('/used/update/{id}', [VoucherController::class, 'updateUsedStatus'])->name('dashboard.voucher.used.update');

            });

            Route::group(['middleware' => ['can:generowanie pdf vouchera']], function (){

                Route::get('/generate/{id}', [VoucherController::class, 'generateVoucher'])->name('dashboard.voucher.generate');

            });

            Route::group(['middleware' => ['can:usuwanie voucherów']], function (){

                Route::delete('/delete/{id}', [VoucherController::class, 'deleteVoucher'])->name('dashboard.voucher.delete');

            });

        });

    });

});

Route::group(['prefix' => 'blog'], function (){

    Route::get('/', [BlogController::class, 'getAllPosts'])->name('blog.post.get.all');

    Route::post('/add-comment', [CommentController::class, 'addComment'])->name('blog.post.add.comment');

});

Route::post('/contact-form', [MailController::class, 'sendContactForm'])->name('send.contact.form');

Route::get('change-published/{token}/{published}', [CommentController::class, 'changePublishedByEmail'])->name('dashboard.blog.comment.change.published.by.email');

Route::get('delete/{token}', [CommentController::class, 'deleteCommentByEmail'])->name('dashboard.blog.comment.delete.by.email');


Route::post('/keep-alive', function () {
    return response()->json(['refreshed' => true, 'sessionExpiresAt' => now()->addMinutes(config('session.lifetime'))->toIso8601String()]);
})->name('keep-alive');

Route::get('/{slug}', [BlogController::class, 'getPost'])->name('blog.post.get');

Route::fallback(function () {
    return Inertia::render('notFound');
});
