<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\GalleryPhoto;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home(){
        return Inertia::render('home');
    }
    public function priceList(){
        return Inertia::render('priceList');
    }
    public function gallery(string $type){
        $typeConfig = [
            "wszystkie" => "all",
            "uslugi" => 'services',
            'gabinet' => 'office'
        ];
        $typeValue = $typeConfig[$type];

        if($typeValue === 'all'){
            $images = GalleryPhoto::paginate(10);
        }

        else {
            $images = GalleryPhoto::where('type', $typeConfig[$type])->paginate(10);
        }
        return Inertia::render('gallery', compact('images', 'type'));
    }
    public function contact(){
        return Inertia::render('contact');
    }
    public function serviceTypeSelector(){
        return Inertia::render('services/serviceTypeSelector');
    }
    public function serviceCategory(string $serviceType){
        return Inertia::render('services/serviceCategoryList', compact('serviceType'));
    }
    public function serviceItem(string $serviceType, string $categorySlug){
        if($serviceType === 'podolog'){
            return Inertia::render('services/serviceCategoryItem', compact('serviceType', 'categorySlug'));
        }
        else if($serviceType === 'naturopata'){
            $itemSlug = $categorySlug;
            $images = GalleryPhoto::where('service', $itemSlug)->get();
            return Inertia::render('services/serviceDetail', compact('serviceType', 'itemSlug', 'images'));
        }
    }
    public function serviceDetails(string $serviceType, string $categorySlug, string $itemSlug){
        $images = GalleryPhoto::where('service', $itemSlug)->get();
        return Inertia::render('services/serviceDetail', compact('serviceType', 'categorySlug', 'itemSlug', 'images'));
    }
    public function notFound(){
        return Inertia::render('notFound');
    }
    public function faq(){
        return Inertia::render('faq');
    }
    public function contactStatus(string $status){
        return Inertia::render('contactStatus', compact('status'));
    }
    public function storeRegulations(){
        return Inertia::render('storeRegulations');
    }
    public function officeRegulations(){
        return Inertia::render('officeRegulations');
    }
    public function websiteTerms(){
        return Inertia::render('websiteTerms');
    }
    public function privacyPolicy(){
        return Inertia::render('privacyPolicy');
    }
    public function aboutUs(){
        return Inertia::render('about/aboutUs');
    }
    public function aboutUsPerson(string $person){
        return Inertia::render('about/aboutUsPerson', compact('person'));
    }
    public function storeComingSoon(){
        return Inertia::render('storeComingSoon');
    }
}
