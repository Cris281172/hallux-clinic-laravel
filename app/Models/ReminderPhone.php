<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReminderPhone extends Model
{
    protected $fillable = ['phone', 'visit_id'];
}
