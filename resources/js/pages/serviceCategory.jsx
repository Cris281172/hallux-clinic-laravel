import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import favico from '../assets/images/favicon.ico';
import headerBackground from '../assets/images/header.webp';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import { servicesConfig } from '../config/servicesConfig.jsx';
import AppLayout from '../layouts/app-layout.jsx';
const ServiceCategory = ({ category }) => {
    const filteredConfig = servicesConfig.find((el) => el.key === category);

    return (
        <AppLayout>
            <SubpageHeader title={filteredConfig.title} background={headerBackground} text={filteredConfig.shortDesc} />
            <SubpageLayoutContainer>
                <div className={'grid gap-4 lg:grid-cols-2 xl:grid-cols-3'}>
                    {filteredConfig.services.map((service, index) => (
                        <motion.div
                            key={index}
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
                                href={route(`service`, { category: filteredConfig.key, service: service.key })}
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
