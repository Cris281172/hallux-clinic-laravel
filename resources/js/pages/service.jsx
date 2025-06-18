import { router } from '@inertiajs/react';
import { IoFootstepsOutline } from 'react-icons/io5';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import headerBackground from '../assets/images/header.webp';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import { servicesConfig } from '../config/servicesConfig.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const Service = ({ category, service }) => {
    const images = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];

    const serviceData = servicesConfig.filter((el) => el.key === category)[0]?.services?.filter((el) => el.key === service)[0];

    if (!serviceData) {
        return router.visit('/404');
    }

    return (
        <AppLayout>
            <SubpageHeader title={serviceData.title} background={headerBackground} text={serviceData.shortDesc} />
            <SubpageLayoutContainer>
                <div className={'text-black'}>
                    <div className={'flex flex-col gap-10 lg:flex-row'}>
                        {serviceData.images.length !== 0 && (
                            <div className={'order-2 lg:order-1 xl:w-4/12'}>
                                <ImageGallery
                                    showPlayButton={false}
                                    items={serviceData.images.map((el) => ({
                                        original: el,
                                        thumbnail: el,
                                    }))}
                                    renderLeftNav={(onClick, disabled) => (
                                        <div onClick={onClick} className={'absolute top-1/2 left-4 z-20 -translate-y-1/2 cursor-pointer'}>
                                            <IoFootstepsOutline className={'text-dark-plum -rotate-90 text-4xl'} />
                                        </div>
                                    )}
                                    renderRightNav={(onClick, disabled) => (
                                        <div onClick={onClick} className={'absolute top-1/2 right-4 z-20 -translate-y-1/2 cursor-pointer'}>
                                            <IoFootstepsOutline className={'text-dark-plum rotate-90 text-4xl'} />
                                        </div>
                                    )}
                                />
                            </div>
                        )}
                        <div className={`${serviceData.images.length !== 0 ? 'xl:w-8/12' : 'w-full'} order-1 lg:order-2`}>
                            <p className={'mb-2 text-lg'}>
                                Cena usługi: <strong>{serviceData.price ? `${serviceData.price} zł` : 'Gratis'}</strong>
                            </p>
                            <div className={'service-desc'}>{serviceData.desc}</div>
                        </div>
                    </div>
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};
export default Service;
