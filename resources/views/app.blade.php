<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TN6H7L26');</script>
        <meta name="author" content="Krzysztof Juczyński" />
        <meta name="keywords" content="Podologia Łódź, Gabinet Podologiczny, Monika Juczyńska" />
        <meta name="google-adsense-account" content="ca-pub-7882476332353334">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script defer src="https://www.googletagmanager.com/gtag/js?id=AW-11343238376"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11343238376');
        </script>
        <script defer src="https://www.googletagmanager.com/gtag/js?id=G-R86JKMDTXM"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R86JKMDTXM');
        </script>

        <style>
            #initial-loader {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #530236;
                z-index: 9999;
                transition: opacity 0.3s ease-in-out;
            }

            #initial-loader .spinner {
                border: 8px solid #f3f3f3;
                border-top: 8px solid #F7AACBFF;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>

        <title inertia>Gabinet Podologiczny Łódź - Profesjonalna Pielęgnacja Stóp | Hallux Clinic</title>
        <meta name="description" content="Szukasz dobrego podologa w Łodzi? Hallux Clinic oferuje kompleksową diagnostykę i leczenie chorób stóp. Wrastające paznokcie, odciski, grzybica. Umów wizytę!" />

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link rel="preload" href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" as="style" onload="this.onload=null; this.rel='stylesheet'">
        <noscript><link rel="stylesheet" href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"></noscript>

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.tsx'])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TN6H7L26" height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <div id="initial-loader">
            <div class="spinner"></div>
        </div>

        @inertia
    </body>
</html>
