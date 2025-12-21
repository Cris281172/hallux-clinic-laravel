<?php

namespace App\Http\Controllers\Web\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Store\Chat;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function getChat(string $id){
        $chat = Chat::with('user', 'messages')->where('id', $id)->first();
        return Inertia::render('dashboard/store/chat/getChat', compact('chat'));
    }
    public function getAllChats(){
        $chats = Chat::with('user')->paginate(10);
        return Inertia::render('dashboard/store/chat/getAllChats', compact('chats'));
    }
}
