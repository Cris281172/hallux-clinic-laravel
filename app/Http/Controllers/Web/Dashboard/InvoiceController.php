<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Invoice;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class InvoiceController extends Controller
{
    public function createInvoiceView(){
        return Inertia::render('dashboard/invoices/createInvoice');
    }
    public function createInvoice(Request $request){
        $invoice = Invoice::create([
            'title' => $request->title,
            'number' => random_int(100000, 999999),
        ]);

        foreach ($request->items as $item) {
            $invoice->items()->create([
                'name' => $item['name'],
                'quantity' => $item['quantity'],
                'price' => $item['price'],
            ]);
        }

        return redirect()->route('dashboard.invoice.download', $invoice->id);
    }
    public function downloadInvoice(string $id)
    {
        $invoice = Invoice::with('items')->findOrFail($id);

        $pdf = Pdf::loadView('pdf.invoice', [
            'invoice' => $invoice,
        ]);

        return $pdf->download('faktura_' . $invoice->id . '.pdf');
    }
}
