<?php

namespace App\Notifications\Store;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class NewChatMessageNotification extends Notification
{
    use Queueable;

    private $message;
    private $chatID;
    /**
     * Create a new notification instance.
     */
    public function __construct(string $message, string $chatID)
    {
        $this->message = $message;
        $this->chatID = $chatID;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(object $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(object $notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('Nowa wiadomość')
            ->greeting('')
            ->line("Masz nową wiadomość o treści: " . $this->message)
            ->action('Odpowiedź na wiadomość', url(route('dashboard.chat.get', $this->chatID)))
            ->salutation('');
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            //
        ];
    }
}
