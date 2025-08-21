import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import favico from '../assets/images/favicon.ico';
import headerBackground from '../assets/images/header.webp';
import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';
const ServiceCategory = ({ category }) => {
    const { props } = usePage();
    const filteredConfig = props.treatments[category];
    return (
        <AppLayout>
            <SEO title={filteredConfig.head.title} description={filteredConfig.head.description} url={`/uslugi/${props.category}`} />
            <SubpageHeader title={filteredConfig.title} background={headerBackground} text={filteredConfig.shortDesc} />
            <SubpageLayoutContainer>
                <div className={'grid gap-4 lg:grid-cols-2 xl:grid-cols-3'}>
                    {Object.entries(filteredConfig.services).map(([key, service]) => (
                        <motion.div
                            key={key} // teraz React ma stabilny identyfikator
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.3 }}
                            className={
                                'bg-dark-plum flex flex-col items-center justify-between rounded-2xl border-2 border-solid border-gray-50 pt-10 pr-5 pb-10 pl-5 shadow-md'
                            }
                        >
                            <div className={'flex flex-col items-center'}>
                                <img src={favico} className={'w-12'} />
                                <h3 className={'mt-5 mb-2 text-center text-2xl'}>{service.title}</h3>
                                <p>{service.shortDesc}</p>
                            </div>
                            <Link
                                href={route(`service`, { category: category, service: key })}
                                className={
                                    'bg-neon-blossom hover:bg-dark-plum-500 mt-3 mt-5 flex w-50 justify-center rounded-full px-4 py-2 font-bold text-white transition'
                                }
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

export default ServiceCategory;
