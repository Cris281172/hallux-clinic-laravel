import { Head } from '@inertiajs/react';

const SEO = ({
    title = 'Tworzenie Stron Internetowych',
    description = 'Domyślny opis aplikacji',
    image = '/images/logo.webp',
    url = '/',
    robots = 'index, follow',
    structuredData = null,
    preloadImage = false,
}) => {
    const titleValue = `${title}`;
    const pageURL = 'https://hallux.clinic';
    const absoluteImage = image.startsWith('http') ? image : `${pageURL}${image}`;
    const imageOrigin = absoluteImage.startsWith('http') ? new URL(absoluteImage).origin : null;
    const jsonLd = Array.isArray(structuredData) ? { '@context': 'https://schema.org', '@graph': structuredData } : structuredData;

    return (
        <Head>
            <title>{titleValue}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={`${pageURL}${url}`} />
            <meta property="og:title" content={titleValue} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={absoluteImage} />
            <meta property="og:url" content={`${pageURL}${url}`} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={titleValue} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={absoluteImage} />
            {preloadImage && imageOrigin && <link rel="preconnect" href={imageOrigin} crossOrigin="anonymous" />}
            {preloadImage && <link rel="preload" as="image" href={absoluteImage} fetchPriority="high" />}
            <link rel="preconnect" href="https://fonts.bunny.net" />
            <meta name="robots" content={robots} />
            <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
        </Head>
    );
};

export default SEO;
