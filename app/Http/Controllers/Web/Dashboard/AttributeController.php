<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\Dashboard\Store\CreateAttributeRequest;
use App\Http\Requests\Dashboard\Store\EditAttributeRequest;
use Inertia\Inertia;
use App\Models\Store\Attribute;

class AttributeController extends Controller
{
    public function createAttributeView(){
        return Inertia::render('dashboard/store/attributes/createAttribute');
    }
    public function createAttribute(CreateAttributeRequest $request){
        Attribute::create([
            "name" => $request->name,
            "value" => $request->value
        ]);
        return back();
    }
    public function getAllAttributes(){
        $attributes = Attribute::paginate(50);
        return Inertia::render('dashboard/store/attributes/getAllAttributes', compact('attributes'));
    }
    public function deleteAttribute(string $id){
        $attribute = Attribute::find($id);

        $attribute->delete();

        return back();
    }
    public function editAttributeView(string $id){
        $attribute = Attribute::find($id);
        return Inertia::render('dashboard/store/attributes/editAttribute', compact('attribute'));
    }

    public function editAttribute(string $id, EditAttributeRequest $request){
        $attribute = Attribute::find($id);

        $attribute->update([
            "name" => $request->name,
            "value" => $request->value
        ]);

        return back();
    }
}
