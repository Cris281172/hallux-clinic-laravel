<?php

namespace App\Http\Controllers\Api\Dashboard\Store;

use App\Http\Controllers\Controller;
use App\Models\Store\Attribute;
use Illuminate\Http\Request;

class AttributeController extends Controller
{
    public function getAllAttributes(Request $request){
        $search = $request->input('search');

        $searchAttributes = Attribute::where('name', 'like', "%$search%")->orWhere('value', 'like', "%$search%")->take(10)->get();

        return response()->json(['attributes' => $searchAttributes]);
    }
}
