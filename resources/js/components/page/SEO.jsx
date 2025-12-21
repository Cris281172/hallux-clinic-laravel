import { Head } from '@inertiajs/react';

const SEO = ({
    title = 'Tworzenie Stron Internetowych',
    description = 'Domyślny opis aplikacji',
    image = '/default-og.png',
    url = '/',
    robots = 'index, follow',
}) => {
    const titleValue = `${title}`;
    const pageURL = 'https://hallux.clinic';

    return (
        <Head>
            <title>{titleValue}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`${pageURL}${url}`} />
            <meta property="og:title" content={titleValue} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={`${pageURL}${url}`} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={titleValue} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <meta name="robots" content={robots} />
            <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
        </Head>
    );
};

export default SEO;
