<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Store\CreateVariantRequest;
use App\Http\Requests\Dashboard\Store\EditVariantRequest;
use App\Models\Store\Variant;
use Inertia\Inertia;

class VariantController extends Controller
{
    public function createVariantView(){
        return Inertia::render('dashboard/store/variants/createVariant');
    }
    public function createVariant(CreateVariantRequest $request){
        Variant::create([
            "name" => $request->name,
            "value" => $request->value
        ]);
        return back();
    }
    public function getAllVariants(){
        $variants = Variant::paginate(50);
        return Inertia::render('dashboard/store/variants/getAllVariants', compact('variants'));
    }
    public function deleteVariant(string $id){
        $variant = Variant::find($id);

        $variant->delete();
        return back();
    }
    public function editVariantView(string $id){
        $variant = Variant::find($id);

        return Inertia::render('dashboard/store/variants/editVariant', compact('variant'));
    }
    public function editVariant(string $id, EditVariantRequest $request){
        $variant = Variant::find($id);
        $variant->update([
            'name' => $request->name,
            "value" => $request->value
        ]);
        return back();
    }
}
