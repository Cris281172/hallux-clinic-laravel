<?php

namespace App\Models\Store;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = ['chat_id', 'sender_id', 'message', 'from_admin'];
}
