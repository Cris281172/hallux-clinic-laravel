<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use ImageOptimizer;
use Inertia\Inertia;
use Intervention\Image\ImageManager;

class GalleryController extends Controller
{
    public function uploadImageView(){
        return Inertia::render('dashboard/gallery/uploadImage');
    }
    public function uploadImage(Request $request){
        $files = $request->images;

        $type = $request->type;

        foreach ($files as $file){
            $fileName = Str::random(20) . '_' . time() . '.jpg';

            $path = storage_path('app/public/gallery/' . $type . '/' . $fileName);

            ImageManager::imagick()->read($file)->toJpeg()->save($path);

            ImageOptimizer::optimize($path);

        }

        return back();
    }
    public function getAllImages(){
        $gallery = Storage::disk('public')->files('gallery');
        return Inertia::render('dashboard/gallery/getAllImages', compact('gallery'));
    }
    public function deleteImage(string $image){
        Storage::disk('public')->delete('gallery/' . $image);
        return back();
    }
}
