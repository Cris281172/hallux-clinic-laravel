<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = ['text', 'parent_id', 'post_id', 'email', 'username', 'published', 'token'];
    public function published_subcomments(){
        return $this->hasMany(Comment::class, 'parent_id', 'id')->where('published', '1');
    }
    public function subcomments(){
        return $this->hasMany(Comment::class, 'parent_id', 'id');
    }
}
