<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = ['title', 'number'];

    public function items(){
        return $this->hasMany(InvoiceItem::class, 'invoice_id', 'id');
    }
}
