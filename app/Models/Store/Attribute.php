<?php

namespace App\Models\Store;

use App\Observers\AttributeObserver;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Model;
#[ObservedBy(AttributeObserver::class)]
class Attribute extends Model
{
    protected $fillable = ['name', 'value'];
}
