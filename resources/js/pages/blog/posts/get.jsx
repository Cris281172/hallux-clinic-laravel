import { Link } from '@inertiajs/react';
import headerBackground from '../../../assets/images/header.webp';
import PostItem from '../../../components/blog/PostItem.jsx';
import EditorRenderer from '../../../components/editor-renderer.jsx';
import ContactSection from '../../../components/page/contact-section.jsx';
import SEO from '../../../components/page/SEO.jsx';
import SubpageHeader from '../../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../../components/subpage-layout-container.jsx';
import AppLayout from '../../../layouts/app-layout.jsx';
import getR2Url from '../../../utils/getR2Url.js';

const GetPost = ({ post, similar }) => {
    const postUrl = `https://hallux.clinic/${post.slug}`;
    const imageUrl = getR2Url(post.image);
    const structuredData = [
        {
            '@type': 'Article',
            headline: post.title,
            description: post.short_desc,
            image: imageUrl,
            datePublished: post.created_at,
            dateModified: post.updated_at,
            mainEntityOfPage: postUrl,
            author: { '@type': 'Organization', name: 'Hallux Clinic', url: 'https://hallux.clinic/' },
            publisher: {
                '@type': 'Organization',
                name: 'Hallux Clinic',
                url: 'https://hallux.clinic/',
                logo: { '@type': 'ImageObject', url: 'https://hallux.clinic/images/logo.webp' },
            },
        },
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://hallux.clinic/' },
                { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://hallux.clinic/blog' },
                { '@type': 'ListItem', position: 3, name: post.title, item: postUrl },
            ],
        },
    ];
    const relatedServices = {
        'onycholiza-czyli-odklejajacy-sie-paznokiec-co-to-oznacza-i-jak-reagowac': {
            title: 'Potrzebujesz pomocy przy onycholizie?',
            text: 'Sprawdź, jak wygląda profesjonalna terapia odklejającego się paznokcia w Hallux Clinic w Łodzi.',
            url: '/uslugi/podolog/terapie-problemow-aparatu-paznokciowego/onycholiza',
        },
    };
    const relatedService = relatedServices[post.slug];

    return (
        <AppLayout>
            <SEO
                title={post.title}
                description={post.short_desc}
                url={`/${post.slug}`}
                image={imageUrl}
                structuredData={structuredData}
                preloadImage
            />
            <SubpageHeader title={post.title} background={headerBackground} />
            <SubpageLayoutContainer>
                <img
                    src={imageUrl}
                    alt={post.title}
                    width="1200"
                    height="675"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="mb-8 aspect-video max-h-[400px] w-full rounded-2xl object-cover"
                />
                <EditorRenderer blocks={JSON.parse(post.desc)} />
                {relatedService && (
                    <aside className="bg-dark-plum my-10 rounded-2xl p-6 text-white">
                        <h2 className="text-2xl font-bold">{relatedService.title}</h2>
                        <p className="mt-2">{relatedService.text}</p>
                        <Link className="mt-4 inline-block font-bold underline" href={relatedService.url}>
                            Zobacz terapię onycholizy
                        </Link>
                    </aside>
                )}
                <div className={'mt-10'}>
                    <h3 className={'text-dark-plum mb-3 text-xl font-bold'}>Zobacz więcej</h3>
                    <div>
                        {similar.map((item, index) => (
                            <PostItem item={item} index={index} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className={'text-dark-plum mb-3 text-xl font-bold'}>Umów wizyte już teraz</h3>
                    <ContactSection />
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default GetPost;
