<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="utf-8">
    <title>Faktura {{ $invoice->number }}</title>
    <style>
        body {
            font-family: DejaVu Sans, sans-serif;
            font-size: 12px;
            color: #111;
        }
        .header, .footer {
            width: 100%;
            text-align: center;
            margin-bottom: 20px;
        }
        .info {
            margin-bottom: 30px;
        }
        .info div {
            margin: 4px 0;
        }
        .section {
            width: 48%;
            display: inline-block;
            vertical-align: top;
        }
        .right {
            float: right;
        }
        h1 {
            text-align: center;
            font-size: 20px;
            margin-bottom: 10px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        td, th {
            border: 1px solid #999;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        .total {
            text-align: right;
            padding: 10px;
            font-weight: bold;
        }
    </style>
</head>
<body>

<table style="width: 100%; margin-bottom: 20px;">
    <tr>
        <td style="width: 40%; border: unset">
            <img src="http://localhost:8080/images/logo.webp" width="100%" />
        </td>
        <td style="text-align: right; vertical-align: middle; font-size: 12px; border: unset">
            <div>Data wystawienia: 2025-07-26</div>
            <div>Data sprzedaży: 2025-07-25</div>
        </td>
    </tr>
</table>


<div class="info">
    <div class="section">
        <strong>Wystawca:</strong><br>
        Twoja Firma Sp. z o.o.<br>
        ul. Przykładowa 1<br>
        00-000 Miasto<br>
        NIP: 123-456-78-90
    </div>
    <div class="section right">
        <strong>Odbiorca:</strong><br>
        Klient Testowy<br>
        ul. Klienta 123<br>
        00-111 Miasto<br>
        NIP: 987-654-32-10
    </div>
</div>

<table>
    <thead>
    <tr>
        <th>Lp</th>
        <th>Usługa / Produkt</th>
        <th>Ilość</th>
        <th>Cena netto</th>
        <th>Wartość netto</th>
        <th>VAT</th>
        <th>Brutto</th>
    </tr>
    </thead>
    <tbody>
    @php $total = 0; $vatRate = 0.23; @endphp
    @foreach ($invoice->items as $index => $item)
        @php
            $net = $item->price * $item->quantity;
            $vat = $net * $vatRate;
            $gross = $net + $vat;
            $total += $gross;
        @endphp
        <tr>
            <td>{{ $index + 1 }}</td>
            <td>{{ $item->name }}</td>
            <td>{{ $item->quantity }}</td>
            <td>{{ number_format($item->price, 2) }} zł</td>
            <td>{{ number_format($net, 2) }} zł</td>
            <td>{{ number_format($vat, 2) }} zł</td>
            <td>{{ number_format($gross, 2) }} zł</td>
        </tr>
    @endforeach
    </tbody>
</table>

<div class="total">
    Łącznie do zapłaty: {{ number_format($total, 2) }} zł
</div>

<div class="footer">
    <p>Faktura wygenerowana automatycznie. Nie wymaga podpisu.</p>
</div>

</body>
</html>
