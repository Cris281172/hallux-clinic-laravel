<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VisitNotification extends Model
{
    protected $fillable = ['visit_id', 'phone', 'status', 'msg_id', 'is_confirmed'];

    protected function casts(): array

    {

        return [

            'is_confirmed' => 'boolean',

        ];

    }
}
