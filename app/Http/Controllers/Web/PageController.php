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
    public function services(){
        return Inertia::render('services');
    }
    public function serviceCategory(string $category){
        return Inertia::render('serviceCategory', compact('category'));
    }
    public function service(string $category, string $service){
        $images = GalleryPhoto::where('service', $service)->get();
        return Inertia::render('service', compact('category', 'service', 'images'));
    }
    public function notFound(){
        return Inertia::render('notFound');
    }
    public function aboutMe(){
        return Inertia::render('aboutMe');
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
    public function websiteTerms(){
        return Inertia::render('websiteTerms');
    }
}
