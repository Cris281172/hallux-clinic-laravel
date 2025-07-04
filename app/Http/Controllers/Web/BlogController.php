<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Models\Post;
use Inertia\Inertia;

class BlogController extends Controller
{
    public function getAllPosts(){
        $posts = Post::select(['image', 'title', 'short_desc', 'slug', 'created_at'])->paginate(25);
        return Inertia::render('blog/posts/getAll', compact('posts'));
    }
    public function getPost(string $slug){
        $post = Post::where('slug', $slug)->firstOrFail();
        $comments = Comment::where('post_id', $post->id)->where('published', '1')->where('parent_id', null)->with('published_subcomments')->paginate(20);
        return Inertia::render('blog/posts/get', compact('post', 'comments'));
    }
}
