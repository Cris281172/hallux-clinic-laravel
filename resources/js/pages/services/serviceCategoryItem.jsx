import { Link, usePage } from '@inertiajs/react';
import favico from '../../assets/images/favicon.ico';
import SEO from '../../components/page/SEO.jsx';
import SubpageHeader from '../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../components/subpage-layout-container.jsx';
import AppLayout from '../../layouts/app-layout.jsx';

const ServiceCategoryItem = ({ serviceType, categorySlug }) => {
    const { props } = usePage();
    const filteredConfig = props.treatments[serviceType][categorySlug];
    const relativeUrl = `/uslugi/${serviceType}/${categorySlug}`;
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Strona główna', item: 'https://hallux.clinic/' },
            { '@type': 'ListItem', position: 2, name: 'Usługi', item: 'https://hallux.clinic/uslugi' },
            { '@type': 'ListItem', position: 3, name: 'Podologia', item: 'https://hallux.clinic/uslugi/podolog' },
            { '@type': 'ListItem', position: 4, name: filteredConfig.title, item: `https://hallux.clinic${relativeUrl}` },
        ],
    };
    return (
        <AppLayout>
            <SEO title={filteredConfig.head.title} description={filteredConfig.head.description} url={relativeUrl} structuredData={structuredData} />
            <SubpageHeader title={filteredConfig.title} text={filteredConfig.shortDesc} />
            <SubpageLayoutContainer>
                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                    {Object.entries(filteredConfig.services).map(([key, service]) => (
                        <div className="hover:border-neon-blossom/50 flex flex-col justify-between rounded-3xl border border-white/20 bg-pink-700/60 p-8 opacity-100 shadow-lg">
                            <div className="flex flex-col items-center text-center">
                                <img src={favico} className="w-12 opacity-90" />
                                <h3 className="mt-6 mb-3 text-2xl font-semibold tracking-wide text-white">{service.title}</h3>
                                <p className="leading-relaxed text-gray-200/90">{service.shortDesc}</p>
                            </div>

                            <Link
                                href={route('service-details', { serviceType: serviceType, categorySlug: categorySlug, itemSlug: key })}
                                className="bg-neon-blossom hover:bg-neon-blossom/80 mt-8 flex justify-center rounded-full px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.03]"
                            >
                                Zobacz więcej
                            </Link>
                        </div>
                    ))}
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default ServiceCategoryItem;
