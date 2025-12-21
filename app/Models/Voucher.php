<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class Voucher extends Model
{
    protected $fillable = ['full_name', 'service', 'price', 'valid_to', 'code', 'used'];

    protected static function booted()
    {
        static::creating(function ($voucher) {
            if (empty($voucher->code)) {
                $voucher->code = self::generateNumericCode(10);
            }
        });
    }


    public static function generateNumericCode(int $length = 10): string
    {
        $code = '';
        $maxAttempts = 10;

        for ($i = 0; $i < $maxAttempts; $i++) {
            $generatedCode = str_pad(mt_rand(0, pow(10, $length) - 1), $length, '0', STR_PAD_LEFT);

            if (!self::where('code', $generatedCode)->exists()) {
                $code = $generatedCode;
                break;
            }
        }

        if (empty($code)) {
            throw new \Exception("Nie udało się wygenerować unikalnego kodu vouchera po {$maxAttempts} próbach.");
        }

        return $code;
    }

}
