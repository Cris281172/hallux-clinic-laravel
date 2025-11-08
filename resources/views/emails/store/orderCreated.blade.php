<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Potwierdzenie zamówienia</title>
</head>
<body style="font-family: Arial, sans-serif; padding: 30px; background-color: #f6f6f6;">

<table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    <tr>
        <td style="background-color: #530236; padding: 20px; text-align: center;">
            <h2 style="color: #f7aacb; margin: 0;">Dziękujemy za złożenie zamówienia!</h2>
        </td>
    </tr>

    <tr>
        <td style="padding: 30px; color: #333333;">

            <p style="font-size: 16px; margin-bottom: 20px;">
                Cześć {{ $order->email }}, dziękujemy za złożenie zamówienia w naszym sklepie! 🎉
                Poniżej szczegóły Twojego zamówienia:
            </p>

            <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 15px;">
                <tr>
                    <td style="padding: 8px 0; color: #530236;"><strong>Numer zamówienia:</strong></td>
                    <td style="padding: 8px 0;">{{ $order->uuid }}</td>
                </tr>

                <tr>
                    <td style="padding: 8px 0; color: #530236;"><strong>Status:</strong></td>
                    <td style="padding: 8px 0;">{{ ucfirst($order->status) }}</td>
                </tr>

                <tr>
                    <td style="padding: 8px 0; color: #530236;"><strong>Kwota:</strong></td>
                    <td style="padding: 8px 0;">{{ number_format($order->amount, 2) }} zł</td>
                </tr>
            </table>

            @if(isset($order->items) && count($order->items))
                <h3 style="margin-top: 25px; color: #530236;">📦 Produkty</h3>
                <ul style="padding-left: 20px; font-size: 15px;">
                    @foreach($order->items as $item)
                        <li>
                            {{ $item->product->name }} — {{ $item->quantity }}× ({{ number_format($item->price, 2) }} zł)
                        </li>
                    @endforeach
                </ul>
            @endif

            <div style="text-align: center; margin-top: 35px;">
                <a href="{{ $paymentUrl }}" style="background-color: #dc0b78; color: #ffffff; padding: 14px 36px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold; font-size: 16px;">
                    Zapłać za zamówienie 💳
                </a>
            </div>

            <p style="margin-top: 25px; font-size: 14px; color: #777;">
                Jeśli masz pytania, odpowiedz na tę wiadomość lub skontaktuj się z nami poprzez formularz kontaktowy.
            </p>

        </td>
    </tr>
</table>

</body>
</html>
