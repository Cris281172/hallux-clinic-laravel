<?php

use App\Http\Controllers\Api\Dashboard\PatientController as PatientControllerAPI;
use App\Http\Controllers\Api\Dashboard\VisitController as VisitControllerAPI;
use App\Http\Controllers\Api\Dashboard\VisitNotificationController;
use App\Http\Controllers\Api\StatisticsController;
use App\Http\Controllers\GithubDeployController;
use App\Http\Controllers\NewsletterEmailController;
use App\Http\Controllers\Web\AuthController;
use App\Http\Controllers\Web\BlogController;
use App\Http\Controllers\Web\CommentController;
use App\Http\Controllers\Web\Dashboard\AttributeController;
use App\Http\Controllers\Web\Dashboard\DashboardController;
use App\Http\Controllers\Web\Dashboard\GalleryController;
use App\Http\Controllers\Web\Dashboard\InvoiceController;
use App\Http\Controllers\Web\Dashboard\PatientController;
use App\Http\Controllers\Web\Dashboard\PostController;
use App\Http\Controllers\Web\Dashboard\PromotionController;
use App\Http\Controllers\Web\Dashboard\RoleController;
use App\Http\Controllers\Web\Dashboard\UserManagement;
use App\Http\Controllers\Web\Dashboard\VariantController;
use App\Http\Controllers\Web\Dashboard\VisitController;
use App\Http\Controllers\Web\Dashboard\VoucherController;
use App\Http\Controllers\Web\MailController;
use App\Http\Controllers\Web\PageController;
use App\Http\Controllers\Web\Settings\PasswordController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Web\Store\StoreController;
use App\Http\Controllers\Web\Dashboard\ProductController;
use App\Http\Controllers\Web\Dashboard\CategoryController;
use App\Http\Controllers\Web\Store\ProductController as StoreProductController;
use App\Http\Controllers\Api\Store\CartController as CartControllerAPI;
use App\Http\Controllers\Web\Store\AuthController as StoreAuthController;
use App\Http\Controllers\Web\Store\GoogleAuthController as StoreGoogleAuthController;
use App\Http\Middleware\AdminAccessMiddleware;
use App\Http\Controllers\Api\Dashboard\Store\ProductController as ProductControllerAPI;
use App\Http\Controllers\Api\Dashboard\Store\AttributeController as AttributeControllerAPI;
use App\Http\Controllers\Api\Dashboard\Store\VariantController as VariantControllerAPI;
use App\Http\Controllers\Web\Store\OrderController;
use App\Http\Controllers\Web\Dashboard\UserController;
use App\Http\Controllers\Web\Dashboard\CartItemController;
use App\Http\Controllers\Api\Store\ShippingMethodController as ShippingMethodControllerAPI;
use App\Http\Controllers\Web\Store\PaymentController;
use App\Http\Controllers\Api\Dashboard\VisitStatusController as VisitStatusControllerAPI;
use App\Http\Controllers\Api\Dashboard\PatientStatusController as PatientStatusControllerAPI;
use App\Http\Controllers\PdfController;
use App\Http\Controllers\Api\Dashboard\Store\UserController as UserControllerAPI;
use App\Http\Controllers\Api\Dashboard\Store\CategoryController as CategoryControllerAPI;
use App\Http\Controllers\Api\Store\SearchController as SearchControllerAPI;
use App\Http\Middleware\StoreUnderConstruction;
use App\Http\Controllers\Web\Store\CartController;
use App\Http\Controllers\Api\Store\ChatController as ChatControllerAPI;
use App\Http\Controllers\Web\Dashboard\ChatController;

Route::post('/deploy', [GithubDeployController::class, 'deploy'])->name('github.deploy');

Route::get('/', [PageController::class, 'home'])->name('home');
Route::get('/cennik', [PageController::class, 'priceList'])->name('price-list');
Route::get('/galeria/{type}', [PageController::class, 'gallery'])->name('gallery');
Route::get('/kontakt', [PageController::class, 'contact'])->name('contact');
Route::get('/o-nas', [PageController::class, 'aboutUs'])->name('about-us');
Route::get('/o-nas/{person}', [PageController::class, 'aboutUsPerson'])->name('about-us.person');
Route::get('/faq', [PageController::class, 'faq'])->name('faq');
Route::get('/kontakt/{status}', [PageController::class, 'contactStatus'])->name('contact-status');
Route::get('/regulamin-sklepu', [PageController::class, 'storeRegulations'])->name('store.regulations');
Route::get('/ogolne-warunki-uzytkowania-strony-internetowej', [PageController::class, 'websiteTerms'])->name('website.terms');
Route::get('/polityka-prywatnosci', [PageController::class, 'privacyPolicy'])->name('privacy.policy');
Route::get('/sklep-informacja', [PageController::class, 'storeComingSoon'])->name('store.coming.soon');
Route::group(['prefix' => 'uslugi'], function () {
    Route::get('/', [PageController::class, 'serviceTypeSelector'])->name('service-type-selector');
    Route::get('/{serviceType}', [PageController::class, 'serviceCategory'])->name('service-category');
    Route::get('/{serviceType}/{categorySlug}', [PageController::class, 'serviceItem'])->name('service-item');
    Route::get('/{serviceType}/{categorySlug}/{itemSlug}', [PageController::class, 'serviceDetails'])->name('service-details');

});
Route::get('/pdf/download/{filename}', [PdfController::class, 'download'])->name('pdf.download');
Route::post('/newsletter-add-email', [NewsletterEmailController::class, 'addNewEmail'])->name('newsletter-add-email');

Route::get('/profile', function () {
    return Inertia::render('test');
})->middleware(['auth', 'verified']);

Route::post('/auth/sign-in', [StoreAuthController::class, 'signIn'])->name('store.auth.sign-in');

Route::group(['prefix' => 'sklep', 'middleware' => [StoreUnderConstruction::class]], function () {
    Route::get('/', [StoreController::class, 'storeView'])->name('store.view');
    Route::get('/produkty', [StoreProductController::class, 'getAllProducts'])->name('store.products');
    Route::get('/produkty/{slug}', [StoreProductController::class, 'getProduct'])->name('store.product');
    Route::get('/kategoria/{slug}', [StoreProductController::class, 'getCategoryProducts'])->name('store.category.products');

    Route::group(['prefix' => 'auth'], function () {
        Route::post('/sign-up', [StoreAuthController::class, 'signUp'])->name('store.auth.sign-up');
//        Route::post('/sign-in', [StoreAuthController::class, 'signIn'])->name('store.auth.sign-in');
        Route::get('/verify-email/{id}/{hash}', [StoreAuthController::class, 'verificationEmail'])->name('verification.verify');
        Route::get('/verify-email/notice', [StoreAuthController::class, 'verifyEmailNotice'])->name('verification.notice');
        Route::get('/verify-email-resend', [StoreAuthController::class, 'verificationEmailResend'])->name('verification.resend');
        Route::get('/google/redirect', [StoreGoogleAuthController::class, 'redirect'])->name('store.auth.google.redirect');
        Route::get('/google/callback', [StoreGoogleAuthController::class, 'callback'])->name('store.auth.google.callback');
    });

    Route::get('/zamowienie', [OrderController::class, 'getOrderView'])->name('store.order.get.view');

    Route::group(['prefix' => 'order'], function () {
        Route::post('/account', [OrderController::class, 'account'])->name('store.order.account');
        Route::post('/delivery-details', [OrderController::class, 'deliveryDetails'])->name('store.order.delivery.details');
        Route::post('/shipping-method', [OrderController::class, 'shippingMethod'])->name('store.order.shipping.method');
        Route::post('/create-order', [OrderController::class, 'createOrder'])->name('store.order.create');
    });

    Route::post('/send-code', [CartControllerAPI::class, 'applyPromotionCode'])->name('store.order.send.code');

    Route::group(['prefix' => 'search'], function () {

        Route::get('/suggestions', [SearchControllerAPI::class, 'suggestions'])->name('store.search.suggestions');

    });

    Route::get('/platnosc/{uuid}', [PaymentController::class, 'getPaymentView'])->name('store.payment.get.view');
});


Route::get('/404', [PageController::class, 'notFound'])->name('notFound');


Route::group(['prefix' => 'auth'], function (){

   Route::get('login', [AuthController::class, 'create'])->name('login');

});

Route::prefix('api')->name('api.')->group(function (){

    Route::prefix('statistics')->name('statistics.')->group(function () {

        Route::get('/get', [StatisticsController::class, 'getStatistics'])->name('get');

    });

    Route::prefix('store')->name('store.')->group(function () {

        Route::prefix('chat')->name('chat.')->group(function () {

            Route::get('/init', [ChatControllerAPI::class, 'chatInit'])->name('init');

            Route::post('/send-to-admin', [ChatControllerAPI::class, 'sendMessageToAdmin'])->name('send.message.to.admin');

        });

        Route::prefix('categories')->name('categories.')->group(function () {

        });

        Route::prefix('cart')->name('cart.')->group(function () {

           Route::post('get-products', [CartControllerAPI::class, 'getCartProducts'])->name('get.products');

           Route::post('update', [CartControllerAPI::class, 'cartUpdate'])->name('update');

           Route::post('add-products', [CartControllerAPI::class, 'addToCart'])->name('add.products');

        });

        Route::prefix('shipping-methods')->name('shipping-methods.')->group(function () {

            Route::get('get/{id}', [ShippingMethodControllerAPI::class, 'getShippingMethods'])->name('get');

        });

    });

});

Route::group(['middleware' => ['auth', AdminAccessMiddleware::class]], function (){

    Route::prefix('api')->name('api.dashboard.')->group(function () {

        Route::prefix('patients')->name('patients.')->group(function () {

            Route::prefix('statistics')->name('statistics.')->group(function () {

                Route::get('/age', [PatientControllerAPI::class, 'getAgeStatistics'])->name('age');

                Route::get('/gender', [PatientControllerAPI::class, 'getGenderStatistics'])->name('gender');

            });

            Route::get('/get/search', [PatientControllerAPI::class, 'searchPatients'])->name('get.search');

            Route::get('/get/all', [PatientControllerAPI::class, 'getAllPatients'])->name('get.all');

            Route::get('/get/{id}', [PatientControllerAPI::class, 'getPatient'])->name('get');

        });

        Route::prefix('visits')->name('visits.')->group(function () {

            Route::get('/get/all/{patientID}/patient', [VisitControllerAPI::class, 'getPatientVisits'])->name('get.all.patient.visits');

        });

        Route::prefix('store')->name('store.')->group(function () {

            Route::prefix('products')->name('products.')->group(function () {

                Route::get('/get/all', [ProductControllerAPI::class, 'getAllProducts'])->name('get.all');

            });

            Route::prefix('categories')->name('categories.')->group(function () {

                Route::get('/get/all', [CategoryControllerAPI::class, 'getAllCategories'])->name('get.all');

            });

            Route::prefix('attributes')->name('attributes.')->group(function () {

                Route::get('/get/all', [AttributeControllerAPI::class, 'getAllAttributes'])->name('get.all');

            });

            Route::prefix('variants')->name('variants.')->group(function () {

                Route::get('/get/all', [VariantControllerAPI::class, 'getAllVariants'])->name('get.all');

            });

            Route::prefix('users')->name('users.')->group(function () {

                Route::get('/get/search', [UserControllerAPI::class, 'searchUsers'])->name('get.search');

            });

            Route::prefix('chat')->name('chat.')->group(function () {

                Route::post('/send-to-user', [ChatControllerAPI::class, 'sendMessageToUser'])->name('send.to.user');

            });

        });

        Route::prefix('visit-status')->name('visit.status.')->group(function () {

            Route::get('/get/all', [VisitStatusControllerAPI::class, 'getVisitStatuses'])->name('get.all');

        });

        Route::prefix('patient-status')->name('patient.status.')->group(function () {

            Route::get('/get/all', [PatientStatusControllerAPI::class, 'getPatientStatuses'])->name('get.all');

        });
    });

    Route::prefix('auth')->group(function () {

        Route::get('logout', [AuthController::class, 'logout'])->name('logout');

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

            Route::group(['prefix' => 'comment'], function (){

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

        Route::group(['prefix' => 'store'], function (){

            Route::group(['prefix' => 'products'], function (){

                Route::get('create', [ProductController::class, 'createProductView'])->name('dashboard.product.create.view');

                Route::post('create', [ProductController::class, 'createProduct'])->name('dashboard.product.create');

                Route::get('get/all', [ProductController::class, 'getAllProducts'])->name('dashboard.product.get.all');

                Route::get('delete/{id}', [ProductController::class, 'deleteProduct'])->name('dashboard.product.delete');

                Route::get('active/{id}/{status}', [ProductController::class, 'activeToggle'])->name('dashboard.product.active.toggle');

                Route::get('edit/{id}', [ProductController::class, 'editProductView'])->name('dashboard.product.edit.view');

                Route::post('edit/{id}', [ProductController::class, 'editProduct'])->name('dashboard.product.edit');

                Route::get('clone/{id}', [ProductController::class, 'cloneProductView'])->name('dashboard.product.clone.view');

            });

            Route::group(['prefix' => 'categories'], function (){

                Route::get('/create', [CategoryController::class, 'createCategoryView'])->name('dashboard.category.create.view');

                Route::post('/create', [CategoryController::class, 'createCategory'])->name('dashboard.category.create');

                Route::get('/get/all', [CategoryController::class, 'getAllCategories'])->name('dashboard.category.get.all');

            });

            Route::group(['prefix' => 'variants'], function (){

                Route::get('create', [VariantController::class, 'createVariantView'])->name('dashboard.variant.create.view');

                Route::post('create', [VariantController::class, 'createVariant'])->name('dashboard.variant.create');

                Route::get('get/all', [VariantController::class, 'getAllVariants'])->name('dashboard.variant.get.all');

                Route::get('delete/{id}', [VariantController::class, 'deleteVariant'])->name('dashboard.variant.delete');

                Route::get('edit/{id}', [VariantController::class, 'editVariantView'])->name('dashboard.variant.edit.view');

                Route::post('edit/{id}', [VariantController::class, 'editVariant'])->name('dashboard.variant.edit');

            });

            Route::group(['prefix' => 'attributes'], function (){

                Route::get('create', [AttributeController::class, 'createAttributeView'])->name('dashboard.attribute.create.view');

                Route::post('create', [AttributeController::class, 'createAttribute'])->name('dashboard.attribute.create');

                Route::get('get/all', [AttributeController::class, 'getAllAttributes'])->name('dashboard.attribute.get.all');

                Route::get('delete/{id}', [AttributeController::class, 'deleteAttribute'])->name('dashboard.attribute.delete');

                Route::get('edit/{id}', [AttributeController::class, 'editAttributeView'])->name('dashboard.attribute.edit.view');

                Route::post('edit/{id}', [AttributeController::class, 'editAttribute'])->name('dashboard.attribute.edit');

            });

            Route::group(['prefix' => 'users'], function (){

               Route::get('get/all', [UserController::class, 'getUsers'])->name('dashboard.user.get.all');

               Route::get('delete/{id}', [UserController::class, 'deleteUser'])->name('dashboard.user.delete');

               Route::get('details/{id}', [UserController::class, 'getUserDetails'])->name('dashboard.user.details');

            });

            Route::group(['prefix' => "promotions"], function (){

                Route::get('create', [PromotionController::class, 'createPromotionView'])->name('dashboard.promotion.create.view');

                Route::post('create', [PromotionController::class, 'createPromotion'])->name('dashboard.promotion.create');

            });

            Route::group(['prefix' => 'cart-items'], function (){

                Route::get('delete-item/{id}', [CartItemController::class, 'deleteCartItem'])->name('dashboard.cart-item.delete');

            });

            Route::group(['prefix' => "chat"], function (){

                Route::get('get/all', [ChatController::class, 'getAllChats'])->name('dashboard.chat.get.all');

                Route::get('/get/{id}', [ChatController::class, 'getChat'])->name('dashboard.chat.get');

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

