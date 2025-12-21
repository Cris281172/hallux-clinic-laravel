<?php

namespace App\Http\Controllers\Api\Store;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Models\Store\Chat;
use App\Models\Store\Message;
use App\Notifications\Store\NewChatMessageNotification;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;

class ChatController extends Controller
{
    private function getOrCreateChat(){
        if(auth()->check()){
            return Chat::firstOrCreate([
               'user_id' => auth()->id(),
            ]);
        }

        return Chat::firstOrCreate([
            "guest_token" => session()->getId(),
        ]);
    }
    public function chatInit(){
        $chat = $this->getOrCreateChat();

        return response()->json([
            "success" => true,
            "data" => [
                'chatID' => $chat->id,
                'messages' => $chat->messages()->orderBy('id', 'desc')->paginate(10),
            ],
        ]);
    }
    public function sendMessageToAdmin(Request $request){
        $chat = $this->getOrCreateChat();
        $latestMessage = Message::where('chat_id', $chat->id)->orderBy('created_at', 'desc')->first();
        if($latestMessage && $latestMessage->created_at->gt(Carbon::now()->subSeconds(5))) {
            return response()->json(['success' => false, 'message' => 'Poczekaj chwilę przed wysłaniem kolejnej wiadomości']);
        }
        $message = $chat->messages()->create([
            "sender_id" => auth()->check() ? auth()->id() : null,
            "message" => $request->message,
            "from_admin" => false,
        ]);
        broadcast(new MessageSent($message->message, $chat->id, true))->toOthers();

//        Notification::route('mail', 'hallux.clinic@gmail.com')->notify(new NewChatMessageNotification($message['message'], $chat->id));


        return response()->json(['success' => true, 'message' => $message]);
    }
    public function sendMessageToUser(Request $request){
        $chat = Chat::where('id', $request->chatID)->first();
        $message = $chat->messages()->create([
            'sender_id' => null,
            'message'   => $request->message,
            'from_admin'=> true,
        ]);

        broadcast(new MessageSent($message->message, $chat->id, false))->toOthers();

        return response()->json(['success' => true, 'message' => $message]);
    }
}
