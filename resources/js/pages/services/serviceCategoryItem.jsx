import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import favico from '../../assets/images/favicon.ico';
import SEO from '../../components/page/SEO.jsx';
import SubpageHeader from '../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../components/subpage-layout-container.jsx';
import AppLayout from '../../layouts/app-layout.jsx';

const ServiceCategoryItem = ({ serviceType, categorySlug }) => {
    const { props } = usePage();
    const filteredConfig = props.treatments[serviceType][categorySlug];
    return (
        <AppLayout>
            <SEO title={filteredConfig.head.title} description={filteredConfig.head.description} url={`/uslugi/${props.category}`} />
            <SubpageHeader title={filteredConfig.title} text={filteredConfig.shortDesc} />
            <SubpageLayoutContainer>
                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                    {Object.entries(filteredConfig.services).map(([key, service]) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="hover:border-neon-blossom/50 flex flex-col justify-between rounded-3xl border border-white/20 bg-pink-700/60 p-8 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
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
                        </motion.div>
                    ))}
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default ServiceCategoryItem;
