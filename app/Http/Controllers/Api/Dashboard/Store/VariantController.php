<?php

namespace App\Http\Controllers\Api\Dashboard\Store;

use App\Http\Controllers\Controller;
use App\Models\Store\Variant;
use Illuminate\Http\Request;

class VariantController extends Controller
{
    public function getAllVariants(Request $request){
        $search = $request->input('search');

        $searchVariants = Variant::where('name', 'like', "%$search%")->orWhere('value', 'like', "%$search%")->take(10)->get();

        return response()->json(['variants' => $searchVariants]);
    }
}
