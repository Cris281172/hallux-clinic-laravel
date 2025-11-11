<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <title>Potwierdź swój adres e-mail</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f8fa;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #4f46e5;
            color: #ffffff;
            text-align: center;
            padding: 20px;
        }
        .content {
            padding: 30px;
            color: #333333;
            line-height: 1.6;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            margin: 20px 0;
            color: #ffffff;
            background-color: #4f46e5;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
        }
        .footer {
            background-color: #f2f2f2;
            text-align: center;
            font-size: 12px;
            color: #666666;
            padding: 15px;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="header">
        <h2>Witamy w naszej aplikacji!</h2>
    </div>
    <div class="content">
        <p>Cześć {{ $user->name ?? 'Użytkowniku' }},</p>
        <p>Dziękujemy za założenie konta. Aby zakończyć proces rejestracji, kliknij przycisk poniżej i potwierdź swój adres e-mail.</p>

        <p style="text-align: center;">
            <a href="{{ $url }}" class="button">Potwierdź adres e-mail</a>
        </p>

        <p>Jeśli nie zakładałeś konta, po prostu zignoruj tę wiadomość.</p>
    </div>
    <div class="footer">
        <p>© {{ date('Y') }} TwojaFirma. Wszelkie prawa zastrzeżone.</p>
    </div>
</div>
</body>
</html>
```
