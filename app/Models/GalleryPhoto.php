<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GalleryPhoto extends Model
{
    protected $fillable = ['filename', 'type', 'service'];
}
