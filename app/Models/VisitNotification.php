<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VisitNotification extends Model
{
    protected $fillable = ['visit_id', 'phone', 'status'];
}
