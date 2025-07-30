<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\GalleryPhoto;
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

        foreach ($files as $file){
            $filename = uniqid() . '.' . $file->getClientOriginalExtension();

            Storage::disk('r2')->put($filename, file_get_contents($file));

            GalleryPhoto::create([
                "filename" => $filename,
                "type" => $request->type
            ]);
        }

        return back();
    }
    public function getAllImages(){
        $gallery = GalleryPhoto::all();
        return Inertia::render('dashboard/gallery/getAllImages', compact('gallery'));
    }
    public function deleteImage(string $id){
        $image = GalleryPhoto::findOrFail($id);

        Storage::disk('r2')->delete($image->filename);

        $image->delete();

        return back();
    }
}
