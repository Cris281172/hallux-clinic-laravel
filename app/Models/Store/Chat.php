<?php

namespace App\Models\Store;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    protected $fillable = ['user_id', 'guest_token'];

    public function messages(){
        return $this->hasMany(Message::class);
    }
    public function user(){
        return $this->hasOne(User::class, 'id', 'user_id');
    }
}
