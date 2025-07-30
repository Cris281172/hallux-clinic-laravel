import { useState } from 'react';
import { default as headerBackground } from '../assets/images/header.webp';
import AppPagination from '../components/app-pagination.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const Gallery = ({ images }) => {
    const [activeImage, setActiveImage] = useState(null);
    const [active, setActive] = useState(false);
    console.log(images);
    const handleClickImage = (index) => {
        setActive(true);
        setActiveImage(index);
    };

    return (
        <AppLayout>
            <SubpageHeader title={'Galeria'} background={headerBackground} />
            <SubpageLayoutContainer>
                <div className="mb-10 columns-1 gap-5 sm:mb-20 sm:columns-2 md:columns-3">
                    {images.data.map((image, index) => (
                        <img
                            className={'mb-3 w-full break-inside-avoid'}
                            src={`${import.meta.env.VITE_R2_PUBLIC_URL}/${image.filename}`}
                            key={index}
                            onClick={() => handleClickImage(index)}
                        />
                    ))}
                </div>
                <AppPagination currentPage={images.current_page} lastPage={images.last_page} url={'/galeria'} />
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default Gallery;
