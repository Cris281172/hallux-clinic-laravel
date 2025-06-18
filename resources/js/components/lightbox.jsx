import { useState } from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Lightbox = () => {
    const [touchStart, setTouchStart] = useState(null);
    const changeImage = (e, direct) => {
        e.stopPropagation();
        if (direct === 'right') {
            if (activeImage === gallery.length - 1) {
                setActiveImage(0);
            } else {
                setActiveImage(activeImage + 1);
            }
        } else if (direct === 'left') {
            if (activeImage === 0) {
                setActiveImage(gallery.length - 1);
            } else {
                setActiveImage(activeImage - 1);
            }
        }
    };

    const handleTouchEnd = (e) => {
        const touchEnd = e.changedTouches[0].clientX;
        if (touchStart - touchEnd < 0) {
            changeImage(e, 'left');
        } else if (touchStart - touchEnd > 0) {
            changeImage(e, 'right');
        }
    };

    return (
        <div
            className={'fixed top-0 left-0 z-10 h-full w-full'}
            onTouchStart={(e) => setTouchStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleTouchEnd(e)}
            onClick={() => setActive(false)}
        >
            <div className={'h-full w-full bg-black opacity-80'}></div>
            <button
                className={'absolute top-1/2 left-0 ml-4 hidden -translate-y-1/2 transform cursor-pointer md:block'}
                onClick={(e) => changeImage(e, 'left')}
            >
                <FaArrowAltCircleLeft className={'text-6xl'} />
            </button>
            <div className={'absolute top-1/2 left-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 transform md:w-auto'}>
                <img src={`${import.meta.env.VITE_APP_URL}/storage/${gallery[activeImage]}`} className={'w-full'} />
            </div>
            <button
                className={'absolute top-1/2 right-0 mr-4 hidden -translate-y-1/2 transform cursor-pointer md:block'}
                onClick={(e) => changeImage(e, 'right')}
            >
                <FaArrowAltCircleRight className={'text-6xl'} />
            </button>
        </div>
    );
};

export default Lightbox;
