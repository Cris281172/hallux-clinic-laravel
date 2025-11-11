<?php

namespace App\Models\Store;

use App\Observers\VariantObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;

#[ObservedBy(VariantObserver::class)]
class Variant extends Model
{
    protected $fillable = ['value', 'name'];
}
