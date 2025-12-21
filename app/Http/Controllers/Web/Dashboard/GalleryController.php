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
        $config = config('treatments');
        $services = [];

        foreach ($config as $categoryKey => $category) {
            foreach ($category['services'] as $serviceKey => $service) {
                $services[] = [
                    'key' => $serviceKey,
                    'title' => $service['title'],
                    'category' => $category['title'],
                ];
            }
        }
        return Inertia::render('dashboard/gallery/uploadImage', compact('services'));
    }
    public function uploadImage(Request $request){
        $files = $request->images;
        foreach ($files as $file){
            $filename = uniqid() . '.' . $file->getClientOriginalExtension();

            if($request->type === 'office'){
                $path = $request->type . '/' . $filename;
            }

            else if($request->type === 'services'){
                $path = $request->service ? $request->type . '/' . $request->service . '/' . $filename : $request->type . '/' . $filename;

            }

            Storage::disk('r2')->put($path, file_get_contents($file));
            GalleryPhoto::create([
                "filename" => $path,
                "type" => $request->type,
                'service' => $request->service
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
