<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Comment;
use App\Notifications\NewCommentNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class CommentController extends Controller
{
    public function addComment(Request $request){

        $comment = Comment::create([
           "text" => $request->text,
            "post_id" => $request->post_id,
            "email" => $request->email,
            "username" => $request->username,
            "parent_id" => $request->parent_id,
            "token" => $this->createRandomToken(),
            "published" => false
        ]);

        auth()->user()->notify(new NewCommentNotification($comment));
        return back();
    }

    private function createRandomToken(){
        $randomToken = Str::random(30);

        if(Comment::where('token', $randomToken)->first()){
            return $this->createRandomToken();
        }
        return $randomToken;
    }
    public function getAllComments(Request $request){
        $comments = Comment::query();
        if($request->published !== null){
            $comments = $comments->where('published', $request->published);
        }

        $comments = $comments->where('parent_id', null)->with('subcomments')->paginate(20);

        return Inertia::render('dashboard/blog/comments/getAllComments', compact('comments'));
    }
    public function deleteComment(string $id){
        Comment::where('id', $id)->delete();
        return back();
    }

    public function changePublished(string $id,string $value){
        Comment::where('id', $id)->update([
            "published" => $value
        ]);
        return back();
    }
    public function changePublishedByEmail(string $token, string $value){
        Comment::where('token', $token)->update([
            "published" => $value
        ]);
        return Inertia::render('dashboard/blog/comments/commentChangePublished');
    }
    public function deleteCommentByEmail(string $token){
        Comment::where('token', $token)->delete();
        return Inertia::render('dashboard/blog/comments/commentChangePublished');
    }
}
