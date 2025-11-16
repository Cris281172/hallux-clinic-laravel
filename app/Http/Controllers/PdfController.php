<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PdfController extends Controller
{
    public function view($filename)
    {
        $filePath = storage_path('app/public/pdfs/' . $filename);

        if (!file_exists($filePath)) {
            abort(404, 'Plik nie istnieje.');
        }

        return response()->file($filePath, [
            'Content-Type' => 'application/pdf'
        ]);
    }
}
