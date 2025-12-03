import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import headerImagePoster from '../../assets/images/hero-image-poster.webp';
import desktopHeroVideo from '../../assets/videos/desktop-hero-video.mp4';
import mobileHeroVideo from '../../assets/videos/mobile-hero-video.mp4';
import AnimatedText from '../animation/animated-text.jsx';
import { Button } from '../ui/button.tsx';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState('');
    const videoRef = useRef(null);

    useEffect(() => {
        const updateVideoSrc = () => {
            if (window.innerWidth < 768) {
                setVideoSrc(mobileHeroVideo);
            } else {
                setVideoSrc(desktopHeroVideo);
            }
        };

        updateVideoSrc();
        window.addEventListener('resize', updateVideoSrc);

        return () => {
            window.removeEventListener('resize', updateVideoSrc);
        };
    }, [desktopHeroVideo, mobileHeroVideo]);

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden before:absolute before:inset-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:via-black/40 before:to-transparent before:backdrop-blur-[10px]">
            <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                poster={headerImagePoster}
                aria-label="Gabinet podologiczny - tło wideo"
                fetchpriority="high"
                className="animate-fadeVideo absolute inset-0 z-0 h-full w-full object-cover object-[var(--mobile-position)] opacity-0 md:object-center"
            />

            <div className="relative z-20 container mx-auto px-6 pt-40 text-center lg:px-8">
                <AnimatedText
                    text="Gabinet Podologiczny"
                    as="h1"
                    className="font-heading mb-4 text-4xl font-bold text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] sm:text-5xl"
                    spanClassName="mr-0 sm:mr-5"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-md mx-auto mb-10 max-w-xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] sm:text-lg"
                >
                    Zadbaj o zdrowie i estetykę swoich stóp. Zapraszamy do naszego profesjonalnego gabinetu w Łodzi, gdzie zapewniamy opiekę w
                    komfortowych warunkach.
                </motion.p>

                <div className="mt-2">
                    <Button variant={'darkPlum'} asChild size={'lg'}>
                        <motion.a
                            aria-label="Zadzwoń i umów wizytę podologiczną"
                            href="tel:+48459410096"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Umów wizytę
                        </motion.a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
