import { useState } from 'react';
import { default as headerBackground } from '../assets/images/header.webp';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const Gallery = ({ gallery }) => {
    const [activeImage, setActiveImage] = useState(null);
    const [active, setActive] = useState(false);

    const handleClickImage = (index) => {
        setActive(true);
        setActiveImage(index);
    };

    return (
        <AppLayout>
            <SubpageHeader title={'Galeria'} background={headerBackground} />
            <SubpageLayoutContainer>
                <div className="columns-1 gap-5 sm:columns-2 md:columns-3">
                    {gallery.map((image, index) => (
                        <img
                            className={'mb-3 w-full break-inside-avoid'}
                            src={`${import.meta.env.VITE_APP_URL}/storage/${image}`}
                            key={index}
                            onClick={() => handleClickImage(index)}
                        />
                    ))}
                </div>
            </SubpageLayoutContainer>
            {/*{active && (*/}
            {/*    */}
            {/*)}*/}
        </AppLayout>
    );
};

export default Gallery;
