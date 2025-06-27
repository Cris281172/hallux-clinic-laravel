<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
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
    public function gallery(){
        $gallery = Storage::disk('public')->files('gallery');
        return Inertia::render('gallery', compact('gallery'));
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
        return Inertia::render('service', compact('category', 'service'));
    }
    public function notFound(){
        return Inertia::render('notFound');
    }
    public function aboutMe(){
        return Inertia::render('aboutMe');
    }
}
