<?php

namespace App\Http\Controllers\Web\Dashboard;
use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest;
use App\Models\Post;
use App\Services\OpenAIService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function createPostView(){
        $type = 'create';
        return Inertia::render('dashboard/blog/posts/create', compact('type'));
    }
    public function createPost(CreatePostRequest $request){
        $file = $request->file;

        $filename = uniqid() . '.' . $file->getClientOriginalExtension();

        Storage::disk('r2')->put($filename, file_get_contents($file));

        Post::create([
            "title" => $request->title,
            "desc" => $request->desc,
            "short_desc" => $request->short_desc,
            "slug" => $request->slug,
            "image" => $filename
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

        Storage::disk('r2')->delete($currentPost->image);

        $file = $request->file;

        $filename = uniqid() . '.' . $file->getClientOriginalExtension();

        Storage::disk('r2')->put($filename, file_get_contents($file));

        Post::find($id)->update([
            "title" => $request->title,
            "desc" => $request->desc,
            "short_desc" => $request->short_desc,
            "slug" => $request->slug,
            "image" => $filename
        ]);

        return redirect()->to(route('dashboard.blog.post.get.all'));
    }
    public function deletePost(string $id){
        $currentPost = Post::findOrFail($id);

        $currentPost->delete();

        File::delete(storage_path('app/public/posts/') . $currentPost->image);
    }
}
