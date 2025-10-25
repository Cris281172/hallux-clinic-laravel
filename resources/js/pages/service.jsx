import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { IoFootstepsOutline } from 'react-icons/io5';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import headerBackground from '../assets/images/header.webp';
import ContactSection from '../components/page/contact-section.jsx';
import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';
import getR2Url from '../utils/getR2Url.js';

const Service = ({ category, service, images }) => {
    const accepted = localStorage.getItem('galleryWarningAccepted');
    const { props } = usePage();
    const [showGallery, setShowGallery] = useState(accepted ? accepted : false);
    const serviceData = props.treatments[category].services[service];

    if (!serviceData) {
        return router.visit('/404');
    }

    const handleAccept = () => {
        localStorage.setItem('galleryWarningAccepted', 'true');
        setShowGallery(true);
    };

    return (
        <AppLayout>
            <SEO title={serviceData.head.title} description={serviceData.head.description} url={`/uslugi/${props.category}/${props.service}`} />

            <SubpageHeader title={serviceData.title} background={headerBackground} text={serviceData.shortDesc} />
            <SubpageLayoutContainer>
                <div className="text-black">
                    <div className="flex flex-col gap-10 lg:flex-row">
                        {images.length !== 0 && (
                            <div className="order-2 lg:order-1 xl:w-4/12">
                                {!showGallery ? (
                                    <div className="relative aspect-square rounded-2xl border border-gray-200 bg-gray-50 text-center">
                                        <div className={'absolute top-1/2 left-0 mx-5 -translate-y-1/2'}>
                                            <h3 className="text-dark-plum mb-4 text-lg font-semibold">Ostrzeżenie o treści wrażliwej</h3>
                                            <p className="mb-4 text-sm text-gray-700">
                                                Galeria zawiera zdjęcia rzeczywistych przypadków podologicznych, które mogą być nieprzyjemne dla osób
                                                wrażliwych.
                                            </p>
                                            <button
                                                onClick={handleAccept}
                                                className="bg-dark-plum hover:bg-plum rounded-lg px-4 py-2 text-white transition"
                                            >
                                                Pokaż zdjęcia
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <ImageGallery
                                        showPlayButton={false}
                                        items={images.map((el) => ({
                                            original: getR2Url(el.filename),
                                            thumbnail: getR2Url(el.filename),
                                        }))}
                                        renderLeftNav={(onClick) => (
                                            <div onClick={onClick} className="absolute top-1/2 left-4 z-20 -translate-y-1/2 cursor-pointer">
                                                <IoFootstepsOutline className="text-dark-plum -rotate-90 text-4xl" />
                                            </div>
                                        )}
                                        renderRightNav={(onClick) => (
                                            <div onClick={onClick} className="absolute top-1/2 right-4 z-20 -translate-y-1/2 cursor-pointer">
                                                <IoFootstepsOutline className="text-dark-plum rotate-90 text-4xl" />
                                            </div>
                                        )}
                                        additionalClass="fixed-gallery"
                                    />
                                )}
                            </div>
                        )}

                        <div className={`${serviceData.images.length !== 0 ? 'xl:w-8/12' : 'w-full'} order-1 lg:order-2`}>
                            <Link href={route('price-list')} className="text-md mb-2 block font-bold underline">
                                Zobacz cennik
                            </Link>
                            <div className="service-desc" dangerouslySetInnerHTML={{ __html: serviceData.desc }} />
                        </div>
                    </div>
                </div>

                <div className="mt-6 border-t-2 border-gray-50 pt-6">
                    <h3 className="text-dark-plum mb-3 text-xl font-bold">Umów wizytę już teraz</h3>
                    <ContactSection />
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default Service;
