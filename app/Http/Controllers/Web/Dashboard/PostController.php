<?php

namespace App\Http\Controllers\Web\Dashboard;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Inertia\Inertia;

class PostController extends Controller
{
    public function createPostView(){
        $type = 'create';
        return Inertia::render('dashboard/blog/posts/create', compact('type'));
    }
    public function createPost(CreatePostRequest $request){
        $file = $request->file;

        $fileName = Str::random(20) . '_' . time() . '.' . $file->getClientOriginalExtension();

        $file->storeAs('posts', $fileName, 'public');

        Post::create([
            "title" => $request->title,
            "desc" => $request->desc,
            "short_desc" => $request->short_desc,
            "slug" => $request->slug,
            "image" => $fileName
        ]);
    }
    public function getAllPosts(){
        $posts = Post::paginate(15);

        return Inertia::render('dashboard/blog/posts/getAll', compact('posts'));
    }
    public function editPostView(string $id){
        $item = Post::findOrFail($id);
        $type = $id ? 'edit' : 'create';
        return Inertia::render('dashboard/blog/posts/create', compact('item', 'type'));
    }
    public function editPost(string $id ,Request $request){
        $currentPost = Post::findOrFail($id);
        File::delete(storage_path('app/public/posts/') . $currentPost->image);

        $file = $request->file;

        $fileName = Str::random(20) . '_' . time() . '.' . $file->getClientOriginalExtension();

        $file->storeAs('posts', $fileName, 'public');

        Post::find($id)->update([
            "title" => $request->title,
            "desc" => $request->desc,
            "short_desc" => $request->short_desc,
            "slug" => $request->slug,
            "image" => $fileName
        ]);

        return redirect()->to(route('dashboard.blog.post.get.all'));
    }
    public function deletePost(string $id){
        $currentPost = Post::findOrFail($id);

        $currentPost->delete();

        File::delete(storage_path('app/public/posts/') . $currentPost->image);
    }
}
