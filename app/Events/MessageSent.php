<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $message;
    public $chatID;
    public $toAdmin;

    /**
     * Create a new event instance.
     */
    public function __construct($message, $chatID, $toAdmin)
    {
        $this->message = $message;
        $this->chatID = $chatID;
        $this->toAdmin = $toAdmin;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        if ($this->toAdmin) {
            return [
                new PrivateChannel('support.admin'),
            ];
        }

        return [
            new Channel("chat.{$this->chatID}"),
        ];
    }
    public function broadcastAs()
    {
        return 'MessageSent';
    }
}
