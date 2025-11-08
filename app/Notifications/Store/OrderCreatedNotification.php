<?php

namespace App\Notifications\Store;

use App\Models\Store\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class OrderCreatedNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(public Order $order) {}
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
        $paymentUrl = route('store.payment.get.view', $this->order->uuid);

        return (new \Illuminate\Notifications\Messages\MailMessage)
            ->view('emails.store.orderCreated', [
                'order' => $this->order,
                'paymentUrl' => $paymentUrl,
            ])
            ->subject("Potwierdzenie zamówienia #{$this->order->id}");
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
