<?php

namespace App\Models\Store;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Promotion extends Model
{
    protected $fillable = ['name', 'type', 'discount_value', 'discount_type', 'start_date', 'end_date', 'active', 'min_order_value', 'only_once_per_user', 'visibility'];
    public function users()
    {
        return $this->belongsToMany(User::class, 'promotion_users', 'promotion_id', 'user_id');
    }
}
