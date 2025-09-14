import { Link } from '@inertiajs/react';
import 'inner-image-zoom/lib/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import subpageHeader3 from '../assets/images/subpage-header/subpage-header-3.jpg';
import AppPagination from '../components/app-pagination.jsx';
import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import { Button } from '../components/ui/button.js';
import AppLayout from '../layouts/app-layout.jsx';

const Gallery = ({ images, type }) => {
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
                background={subpageHeader3}
                text={
                    'Zobacz zdjęcia mojego nowoczesnego gabinetu podologicznego oraz efekty przed i po przeprowadzonych zabiegach. Przekonaj się o jakości moich usług.'
                }
            />
            <SubpageLayoutContainer>
                <div className={'mb-10 flex w-full gap-4 md:gap-10'}>
                    <Button
                        asChild
                        className={`${type !== 'gabinet' ? 'text-dark-plum border-dark-plum border-1 bg-transparent' : 'bg-dark-plum text-white'} hover:bg-dark-plum mt-3 h-12 flex-1 cursor-pointer rounded-full px-4 py-2 font-bold transition`}
                    >
                        <Link href={route('gallery', { type: 'gabinet' })}>Zdjęcia gabinetu</Link>
                    </Button>
                    <Button
                        asChild
                        className={`${type !== 'uslugi' ? 'text-dark-plum border-dark-plum border-1 bg-transparent' : 'bg-dark-plum text-white'} hover:bg-dark mt-3 h-12 flex-1 cursor-pointer rounded-full px-4 py-2 font-bold transition`}
                    >
                        <Link href={route('gallery', { type: 'uslugi' })}>Zdjęcia usług</Link>
                    </Button>
                </div>
                <div className="mb-10 columns-1 gap-5 sm:mb-20 sm:columns-2 md:columns-3">
                    {images.data.map((image, index) => (
                        <InnerImageZoom
                            className={'mb-3 w-full break-inside-avoid'}
                            src={`${import.meta.env.VITE_R2_PUBLIC_URL}/${image.filename}`}
                            key={index}
                            fullscreenOnMobile={true}
                            onClick={(e) => e.stopPropagation()}
                        />
                    ))}
                </div>
                <AppPagination currentPage={images.current_page} lastPage={images.last_page} url={`/galeria/${type}`} />
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default Gallery;
