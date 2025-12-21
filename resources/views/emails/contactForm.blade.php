<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Wiadomość z formularza kontaktowego</title>
</head>
<body style="font-family: Arial, sans-serif; padding: 30px;">

<table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
    <tr>
        <td style="background-color: #530236; padding: 20px; text-align: center;">
            <h2 style="color: #f7aacb; margin: 0;">Formularz kontaktowy</h2>
        </td>
    </tr>
    <tr>
        <td style="padding: 30px; color: #333333;">
            <p style="font-size: 16px; margin-bottom: 20px;">Poniżej znajdują się szczegóły przesłanej wiadomości:</p>

            <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 15px;">
                <tr>
                    <td style="padding: 8px 0; color: #530236;"><strong>Imię:</strong></td>
                    <td style="padding: 8px 0;">{{ $data->name }}</td>
                </tr>

                @if (!empty($data->surname))
                    <tr>
                        <td style="padding: 8px 0; color: #530236;"><strong>Nazwisko:</strong></td>
                        <td style="padding: 8px 0;">{{ $data->surname }}</td>
                    </tr>
                @endif

                <tr>
                    <td style="padding: 8px 0; color: #530236;"><strong>Email:</strong></td>
                    <td style="padding: 8px 0;">{{ $data->email }}</td>
                </tr>

                <tr>
                    <td style="padding: 8px 0; color: #530236;"><strong>Nr telefonu:</strong></td>
                    <td style="padding: 8px 0;">{{ $data->phone }}</td>
                </tr>

                <tr>
                    <td style="padding: 8px 0; color: #530236; vertical-align: top;"><strong>Treść wiadomości:</strong></td>
                    <td style="padding: 8px 0;">
                        <p style="margin-top: 5px; white-space: pre-line; color: #333;">{{ $data->message }}</p>
                    </td>
                </tr>
            </table>

            <div style="text-align: center; margin-top: 30px;">
                <a href="{{ url('/') }}" style="background-color: #dc0b78; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">Powrót na stronę</a>
            </div>
        </td>
    </tr>
</table>

</body>
</html>
