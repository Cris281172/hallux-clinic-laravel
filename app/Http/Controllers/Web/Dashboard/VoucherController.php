<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Voucher;
use Carbon\Carbon;
use Google\Service\AdMob\Date;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Http\Requests\Dashboard\Voucher\VoucherCreateRequest;
use App\Http\Requests\Dashboard\Voucher\VoucherEditRequest;

class VoucherController extends Controller
{
    public function convertDate($date)
    {
        $expiryDateString = $date;

        $carbonDate = Carbon::parse($expiryDateString);

        Carbon::setLocale('pl');

        $formattedDate = $carbonDate->isoFormat('D MMMM YYYY') . 'r';

        return $formattedDate;
    }
    public function createVoucherView(){
        return Inertia::render('dashboard/vouchers/editorVoucher');
    }
    public function createVoucher(VoucherCreateRequest $request){
        Voucher::create([
           "full_name" => $request->fullName,
           "service" => $request->service,
           "valid_to" => $request->validTo,
           "price" => $request->price,
        ]);

        return back();
    }
    public function getAllVouchers(Request $request){
        $sort = $request->query('sort', 'newest');
        $search = $request->query('search');

        $query = Voucher::query();

        if ($search = trim($search)) {
            $query->where(function ($q) use ($search) {
                $q->where('full_name', 'like', '%' . $search . '%')->orWhere('code', 'like', '%' . $search . '%');
            });
        }

        switch ($sort) {
            case 'oldest':
                $query->orderBy('created_at', 'asc');
                break;
            case 'newest':
            default:
                $query->orderBy('created_at', 'desc');
                break;
        }

        $vouchers = $query->paginate(1);
        return Inertia::render('dashboard/vouchers/getVouchers', [
            'vouchers' => $vouchers,
            'filters' => [
                'sort' => $sort,
                'search' => $search,
            ],
        ]);
    }
    public function generateVoucher(string $id){
        $voucher = Voucher::findOrFail($id);

        $voucher->valid_to_formatted = $this->convertDate($voucher->valid_to);

        $pdf = PDF::setOption(['isRemoteEnabled' => true])->loadView('pdf/voucher', compact('voucher'));


        return $pdf->stream('voucher.pdf');
    }
    public function updateUsedStatus(string $id, Request $request){
        Voucher::where('id', $id)->update([
            "used" => $request->used
        ]);
    }

    public function editVoucherView($id){
        $voucher = Voucher::findOrFail($id);

        return Inertia::render('dashboard/vouchers/editorVoucher', compact('voucher'));
    }

    public function editVoucher(string $id, VoucherEditRequest $request){
        Voucher::where('id', $id)->update([
            "full_name" => $request->fullName,
            "service" => $request->service,
            "valid_to" => $request->validTo,
            "price" => $request->price,
        ]);
        return back();
    }
    public function deleteVoucher(string $id){
        Voucher::where('id', $id)->delete();
        return back();
    }
}
