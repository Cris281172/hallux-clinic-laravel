import Autoplay from 'embla-carousel-autoplay';
import kingmedImage from '../../../assets/images/store/homepage/carousel/kingmed-image.webp';
import shoesImage from '../../../assets/images/store/homepage/carousel/shoes-image.jpg';
import { Carousel, CarouselContent, CarouselItem } from '../../ui/carousel.tsx';

const HeroSection = () => {
    const carouselConfig = [
        {
            title: 'Obuwie MyPAPS',
            desc: 'Odkryj najnowsze modele butów, które łączą styl i wygodę.',
            image: shoesImage,
        },
        {
            title: 'Wkładki KINGMED',
            desc: 'Odkryj najnowsze modele butów, które łączą styl i wygodę.',
            image: kingmedImage,
        },
    ];

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 5000,
                }),
            ]}
            className="w-full overflow-hidden"
        >
            <CarouselContent>
                {carouselConfig.map((item, index) => (
                    <CarouselItem key={index}>
                        <div className="relative h-screen w-full">
                            <img src={item.image} className="h-full w-full object-cover" alt={`slide-${index}`} />

                            <div className="absolute inset-0 bg-black/60" />

                            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
                                <h2 className="animate-fadeIn mb-4 text-5xl font-bold" style={{ animationDelay: '0.2s' }}>
                                    {item.title}
                                </h2>
                                <p className="animate-fadeIn mb-6 max-w-xl text-lg opacity-80" style={{ animationDelay: '0.4s' }}>
                                    {item.desc}
                                </p>
                                <button
                                    className="animate-fadeIn cursor-pointer rounded-full bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-200"
                                    style={{ animationDelay: '0.6s' }}
                                >
                                    Zobacz więcej
                                </button>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default HeroSection;
