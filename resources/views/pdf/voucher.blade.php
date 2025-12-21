<!DOCTYPE html>
<html lang="pl">
<head>
    <style>
        /* --- Old Standard TT (jeśli nadal jej używasz) --- */
        @font-face {
            font-family: 'Old Standard TT';
            src: url('{{ public_path("fonts/old-standard-tt/OldStandard-Regular.ttf") }}') format('truetype');
            font-weight: normal; /* 400 */
            font-style: normal;
            font-display: swap;
        }

        @font-face {
            font-family: 'Old Standard TT';
            src: url('{{ public_path("fonts/old-standard-tt/OldStandard-Bold.ttf") }}') format('truetype');
            font-weight: bold; /* 700 */
            font-style: normal;
            font-display: swap;
        }

        @font-face {
            font-family: 'Old Standard TT';
            src: url('{{ public_path("fonts/old-standard-tt/OldStandard-Italic.ttf") }}') format('truetype');
            font-weight: normal; /* 400 */
            font-style: italic;
            font-display: swap;
        }

        /* --- Open Sans --- */
        /* Open Sans Light (waga 300) */
        @font-face {
            font-family: 'Open Sans';
            src: url('{{ public_path("fonts/open-sans/OpenSans-Light.ttf") }}') format('truetype');
            font-weight: 300; /* Definicja wagi 'light' */
            font-style: normal;
            font-display: swap;
        }

        /* Open Sans Light Italic (waga 300) - jeśli potrzebujesz */
        @font-face {
            font-family: 'Open Sans';
            src: url('{{ public_path("fonts/open-sans/OpenSans-LightItalic.ttf") }}') format('truetype');
            font-weight: 300;
            font-style: italic;
            font-display: swap;
        }

        /* Open Sans Regular (waga 400) - bardzo zalecane, jeśli chcesz używać 'normal' lub nie podawać wagi */
        @font-face {
            font-family: 'Open Sans';
            src: url('{{ public_path("fonts/open-sans/OpenSans-Regular.ttf") }}') format('truetype');
            font-weight: normal; /* 400 */
            font-style: normal;
            font-display: swap;
        }

        /* Open Sans Bold (waga 700) - jeśli używasz, np. dla {{ $voucher->full_name }} */
        @font-face {
            font-family: 'Open Sans';
            src: url('{{ public_path("fonts/open-sans/OpenSans-Bold.ttf") }}') format('truetype');
            font-weight: bold; /* 700 */
            font-style: normal;
            font-display: swap;
        }


        /* --- Globalne style --- */
        /* Ustaw Old Standard TT jako domyślną czcionkę dla całego dokumentu */
        body {
            font-family: "Old Standard TT", serif;
            color: #f1f1d9;
            text-align: center;
            text-transform: uppercase;
        }

        /* Twoje style dla konkretnych elementów (lepsze niż style inline) */
        .hallux-clinic-header {
            font-size: 18px;
            font-style: italic;
        }
        .voucher-service {
            font-size: 16px;
            margin-bottom: 10px;
            font-family: "Open Sans", sans-serif !important;
            font-weight: 300 !important;
        }
        .voucher-title {
            font-size: 32px;
            line-height: 28px;
            font-style: italic;
            margin-bottom: 6px;
        }
        .voucher-full-name {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 20px;
            font-family: "Open Sans", sans-serif !important;
        }
        .contact-info {
            font-size: 14px;
            font-family: 'Open Sans', sans-serif !important;
            font-weight: 300 !important;
        }

        .price {
            margin-bottom: 50px;
            line-height: 50px;
            text-transform: lowercase;
            font-weight: 200;
            font-size: 30px;
            font-style: italic;
        }

    </style>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>Nr {{ $voucher->code }}</title>

</head>
<body>

<div style="background-image: url('https://hallux-clinic.pl/images/voucher-background.png'); background-position: center; background-size: cover; padding: 20px">
    <div style="border: 2px solid #f1f1d9; padding: 50px">
        <div class="hallux-clinic-header">
            Hallux clinic
        </div>
        <div class="voucher-service">
            @if(isset($voucher->service))
                {{ $voucher->service }}
            @else
                Dowolna usługa
            @endif
        </div>
        <div class="voucher-title">
            Voucher <br /> podarunkowy
        </div>
        <div class="voucher-full-name">
            {{ $voucher->full_name }}
        </div>
        <div class="contact-info">
            ul. Armii krajowej 44 <br />
            Hallux Clinic <br />
            +48 459 410 096
        </div>
    </div>
</div>

<div style="background-image: url('https://hallux-clinic.pl/images/voucher-background.png'); background-position: center; background-size: cover; padding: 20px; margin-top: 20px">
    <div style="border: 2px solid #f1f1d9; padding: 50px">
        <div class="hallux-clinic-header">
            Hallux clinic
        </div>
        <div class="voucher-service">
            @if(isset($voucher->service))
                {{ $voucher->service }}
            @else
                Dowolna usługa
            @endif
        </div>
        <div class="price">
            {{ $voucher->price }} zł
        </div>

        <div class="contact-info">
            Ważny do {{$voucher->valid_to_formatted}}<br />
            Nr: {{ $voucher->code }} <br />
            www.hallux.clinic
        </div>
    </div>
</div>




</body>
</html>
