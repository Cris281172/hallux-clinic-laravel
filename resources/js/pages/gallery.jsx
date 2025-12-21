import { Link } from '@inertiajs/react';
import 'inner-image-zoom/lib/styles.min.css';
import { useState } from 'react';
import InnerImageZoom from 'react-inner-image-zoom';
import AppPagination from '../components/app-pagination.jsx';
import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import { Button } from '../components/ui/button.js';
import AppLayout from '../layouts/app-layout.jsx';

const Gallery = ({ images, type }) => {
    const accepted = localStorage.getItem('galleryWarningAccepted');
    const [showGallery, setShowGallery] = useState(accepted ? accepted : false);

    const handleAccept = () => {
        localStorage.setItem('galleryWarningAccepted', 'true');
        setShowGallery(true);
    };

    return (
        <AppLayout>
            <SEO
                title={'Galeria Zdjęć Gabinetu i Zabiegów'}
                description={
                    'Zobacz zdjęcia mojego nowoczesnego gabinetu podologicznego oraz efekty przed i po przeprowadzonych zabiegach. Przekonaj się o jakości moich usług.'
                }
                url={'/galeria/wszystkie'}
            />
            <SubpageHeader
                title={'Galeria'}
                text={
                    'Zobacz zdjęcia mojego nowoczesnego gabinetu podologicznego oraz efekty przed i po przeprowadzonych zabiegach. Przekonaj się o jakości moich usług.'
                }
            />
            <SubpageLayoutContainer>
                <div className={'mb-10 flex w-full flex-col gap-4 md:flex-row md:gap-10'}>
                    <Button
                        asChild
                        className={`${type !== 'wszystkie' ? 'text-dark-plum border-dark-plum border-1 bg-transparent' : 'bg-dark-plum text-white'} hover:bg-dark-plum h-12 flex-1 cursor-pointer rounded-full px-4 py-2 font-bold transition`}
                    >
                        <Link href={route('gallery', { type: 'wszystkie' })}>Wszystkie</Link>
                    </Button>
                    <Button
                        asChild
                        className={`${type !== 'gabinet' ? 'text-dark-plum border-dark-plum border-1 bg-transparent' : 'bg-dark-plum text-white'} hover:bg-dark-plum h-12 flex-1 cursor-pointer rounded-full px-4 py-2 font-bold transition`}
                    >
                        <Link href={route('gallery', { type: 'gabinet' })}>Zdjęcia gabinetu</Link>
                    </Button>
                    <Button
                        asChild
                        className={`${type !== 'uslugi' ? 'text-dark-plum border-dark-plum border-1 bg-transparent' : 'bg-dark-plum text-white'} hover:bg-dark h-12 flex-1 cursor-pointer rounded-full px-4 py-2 font-bold transition`}
                    >
                        <Link href={route('gallery', { type: 'uslugi' })}>Zdjęcia usług</Link>
                    </Button>
                </div>
                {!showGallery ? (
                    <div className="relative rounded-2xl border border-gray-200 bg-gray-50 p-6 text-center">
                        <h3 className="text-dark-plum mb-4 text-lg font-semibold">Ostrzeżenie o treści wrażliwej</h3>
                        <p className="mb-4 text-sm text-gray-700">
                            Galeria zawiera zdjęcia rzeczywistych przypadków podologicznych, które mogą być nieprzyjemne dla osób wrażliwych.
                        </p>
                        <button onClick={handleAccept} className="bg-dark-plum hover:bg-plum rounded-lg px-4 py-2 text-white transition">
                            Pokaż zdjęcia
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-10 columns-1 gap-5 sm:mb-20 sm:columns-2 md:columns-3">
                            {images.data.map((image, index) => (
                                <InnerImageZoom
                                    className={'mb-3 w-full break-inside-avoid'}
                                    src={`${import.meta.env.VITE_R2_PUBLIC_URL}/${image.filename}`}
                                    key={index}
                                    onClick={(e) => e.stopPropagation()}
                                />
                            ))}
                        </div>
                        <AppPagination currentPage={images.current_page} lastPage={images.last_page} url={`/galeria/${type}`} />
                    </>
                )}
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default Gallery;
