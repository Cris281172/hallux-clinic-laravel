import { Link, usePage } from '@inertiajs/react';
import { Accessibility, Atom, HeartHandshake, Music, ShieldPlus, ShoppingCart, SquareParking, TicketCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import krzysztofJuczynskiJunior from '../assets/images/about-us/team/krzysztof-juczynski-junior.jpg';
import headerImagePoster from '../assets/images/hero-image-poster.webp';
import officeImage from '../assets/images/office/office.webp';
import selfPhoto from '../assets/images/self-photo.webp';
import desktopHeroVideo from '../assets/videos/desktop-hero-video.mp4';
import mobileHeroVideo from '../assets/videos/mobile-hero-video.mp4';
import AnimatedText from '../components/animation/animated-text.jsx';
import HeadingHome from '../components/heading-home.jsx';
import Map from '../components/map.jsx';
import Opinions from '../components/opinions.jsx';
import ContactSection from '../components/page/contact-section.jsx';
import Container from '../components/page/container.jsx';
import { FAQ } from '../components/page/faq.jsx';
import SEO from '../components/page/SEO.jsx';
import PricesAccordion from '../components/prices-accordion.jsx';
import TreatmentsTiles from '../components/treatments-tiles.jsx';
import { Button } from '../components/ui/button.js';
import { configFAQ } from '../config/configFAQ.js';
import { homePrices } from '../config/configPrice.js';
import AppLayout from '../layouts/app-layout.jsx';

export default function Home() {
    const { props } = usePage();
    const [videoSrc, setVideoSrc] = useState('');
    const videoRef = useRef(null);

    const team = [
        {
            name: 'Monika Juczyńska',
            role: 'Podolog',
            image: selfPhoto,
            desc: 'Dyplomowany specjalista ds. podologii. Pasjonatka zdrowia stóp, stale rozwijająca swoje umiejętności i współpracująca z cenionymi specjalistami.',
            key: 'monika-juczynska',
        },
        {
            name: 'Krzysztof Juczyński (Senior)',
            role: 'Terapeuta holistyczny i instruktor jogi',
            desc: 'Doświadczony terapeuta holistyczny i instruktor jogi, łączący podejście fizyczne, psychiczne i duchowe. Specjalizuje się w terapii naturalnej, refleksologii, bioenergoterapii oraz metodach wspierających dobrostan i równowagę.',
            key: 'krzysztof-juczynski-senior',
        },
        {
            name: 'Krzysztof Juczyński (Junior)',
            role: 'Programista',
            image: krzysztofJuczynskiJunior,
            desc: 'Odpowiedzialny za rozwój strony i systemów gabinetu.',
            key: 'krzysztof-juczynski-junior',
        },
    ];

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

    const whyUsConfig = [
        {
            title: 'Indywidualny Plan i Komfortowa Atmosfera',
            text: 'Każdy pacjent to dla nas unikalna historia. Poświęcamy czas, aby wysłuchać, dokładnie zdiagnozować problem i stworzyć spersonalizowany plan terapii w przyjaznej i bezstresowej atmosferze.',
            Icon: <HeartHandshake size={60} className={'text-electric-romance'} />,
        },
        {
            title: 'Bezpieczeństwo i Najwyższy Standard Higieny',
            text: 'Twoje zdrowie jest dla nas bezcenne. Stosujemy rygorystyczne procedury dezynfekcji, a wszystkie narzędzia sterylizujemy w autoklawie medycznym klasy B. W naszym gabinecie możesz czuć się w pełni bezpiecznie.',
            Icon: <ShieldPlus size={60} className={'text-electric-romance'} />,
        },
        {
            title: 'Nowoczesne Technologie i Terapie',
            text: 'Inwestujemy w najnowszej generacji sprzęt podologiczny i innowacyjne metody leczenia. Dzięki temu nasze zabiegi są precyzyjne, skuteczne i maksymalnie komfortowe, co znacząco skraca czas terapii.',
            Icon: <Atom size={60} className={'text-electric-romance'} />,
        },
    ];

    const benefitsConfig = [
        {
            title: 'Relaksująca atmosfera',
            Icon: <Music size={32} className={'text-electric-romance'} />,
        },
        {
            title: 'Udogodnienia',
            Icon: <Accessibility size={32} className={'text-electric-romance'} />,
        },
        {
            title: 'Łatwy dojazd i parking',
            Icon: <SquareParking size={32} className={'text-electric-romance'} />,
        },
        {
            title: 'Sprzedaż specjalistycznych produktów',
            Icon: <ShoppingCart size={32} className={'text-electric-romance'} />,
        },
        {
            title: 'Bony podarunkowe',
            Icon: <TicketCheck size={32} className={'text-electric-romance'} />,
        },
        {
            title: 'Bezpieczeństwo i higiena',
            Icon: <HeartHandshake size={32} className={'text-electric-romance'} />,
        },
        {
            title: 'Nowoczesny i ergonomiczny',
            Icon: <HeartHandshake size={32} className={'text-electric-romance'} />,
        },
    ];

    return (
        <AppLayout>
            <SEO
                title={'Gabinet Podologiczny Łódź - Profesjonalna Pielęgnacja Stóp'}
                description={
                    'Szukasz dobrego podologa w Łodzi? Hallux Clinic oferuje kompleksową diagnostykę i leczenie chorób stóp. Wrastające paznokcie, odciski, grzybica. Umów wizytę!'
                }
            />
            <section
                aria-label="Gabinet Podologiczny w Łodzi – podologia i zdrowie stóp"
                className="relative flex min-h-screen items-center justify-center overflow-hidden before:absolute before:inset-0 before:z-10 before:bg-gradient-to-t before:from-black/90 before:via-black/40 before:to-transparent before:backdrop-blur-[10px]"
            >
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
                        <Button variant={'darkPlum'} asChild={true}>
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
            <div className={'bg-gray-200 pt-20 pb-20'}>
                <Container>
                    <div className={'flex w-full flex-col items-center'}>
                        <HeadingHome
                            title={'Zabiegi podologiczne'}
                            text={
                                'Oferujemy pełen zakres profesjonalnych zabiegów podologicznych – od usuwania odcisków i modzeli, po terapię wrastających paznokci i pielęgnację skóry stóp. Każdy zabieg dobieramy indywidualnie, by przywrócić Twoim stopom zdrowie i lekkość.'
                            }
                            titleClasName={'text-dark-plum'}
                        />
                    </div>
                    <TreatmentsTiles />
                </Container>
            </div>
            <div className={'bg-gray-200 pt-20 pb-20'}>
                <Container>
                    <div className={'flex w-full flex-col items-center'}>
                        <HeadingHome
                            title={'Poznaj nasz zespół'}
                            text={
                                'Profesjonaliści w podologii, którzy łączą wiedzę, doświadczenie i pasję. Dbamy o zdrowie Twoich stóp z indywidualnym podejściem i najwyższymi standardami higieny.'
                            }
                            titleClasName={'text-dark-plum'}
                        />
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {team.map((member) => (
                            <motion.div
                                key={member.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true }}
                                className="flex flex-col items-center rounded-xl bg-white/20 p-6 text-center shadow-lg backdrop-blur-xl"
                            >
                                {member.image ? (
                                    <img src={member.image} className="mb-4 h-32 w-32 rounded-full object-cover" />
                                ) : (
                                    <div className="mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-gray-300 text-2xl">
                                        {member.name.split(' ')[0].slice(0, 1)}
                                        {member.name.split(' ')[1]?.slice(0, 1)}
                                    </div>
                                )}
                                <h3 className="text-dark-plum text-lg font-bold">{member.name}</h3>
                                <p className="text-dark-plum text-sm font-medium">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-10 text-center">
                        <Button variant={'darkPlum'} asChild>
                            <Link href={route('about-us')}>Zobacz pełny zespół</Link>
                        </Button>
                    </div>
                </Container>
            </div>
            <div className={'bg-gray-100 pt-20 pb-20'}>
                <Container>
                    <HeadingHome
                        title={'Cennik'}
                        titleClasName={'text-dark-plum'}
                        text={
                            'Transparentność i uczciwość to podstawa zaufania. Zapoznaj się z naszym aktualnym cennikiem zabiegów podologicznych – wybierz usługę dopasowaną do swoich potrzeb i zainwestuj w zdrowie swoich stóp.'
                        }
                    />
                    <PricesAccordion data={homePrices} />
                    <div className={'flex justify-center'}>
                        <Button
                            asChild
                            className={
                                "bg-neon-blossom hover:bg-dark-plum-500 transition' mt-6 h-12 w-50 rounded-full px-4 py-2 font-bold text-white"
                            }
                        >
                            <Link href={route('price-list')}>Poznaj wszystkie ceny</Link>
                        </Button>
                    </div>
                </Container>
            </div>
            <div className="bg-gray-200 pt-20 pb-20">
                <Container>
                    <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-25">
                        <div className="w-full md:w-18/32">
                            <HeadingHome
                                title="Gabinet stacjonarny"
                                titleClasName="text-dark-plum"
                                text="Nowoczesny gabinet w centrum Łodzi został zaprojektowany z myślą o Twoim komforcie. To miejsce, w którym panuje przyjazna atmosfera, a najwyższe standardy higieny i nowoczesny sprzęt gwarantują bezpieczne i skuteczne zabiegi."
                            />

                            {/* CAROUSEL */}
                            <div className="mt-10 w-full overflow-hidden">
                                <div className="carousel animate-scroll flex gap-6 py-5">
                                    {[...benefitsConfig, ...benefitsConfig].map((item, index) => (
                                        <div className="flex min-h-[9rem] w-50 flex-col items-center justify-between rounded-2xl bg-white p-6 text-center shadow-md">
                                            <div className="text-dark-plum flex h-16 items-center justify-center text-4xl">{item.Icon}</div>
                                            <h4 className="text-dark-plum mt-4 h-12 overflow-hidden text-sm font-semibold sm:text-base">
                                                {item.title}
                                            </h4>
                                            <div className="mt-2"></div> {/* opcjonalna dolna przestrzeń */}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* PRZYCISKI */}
                            <div className="mt-5 flex flex-col items-center justify-center gap-5 md:flex-row">
                                <a
                                    href="https://maps.app.goo.gl/AYsaeVkj7LU1nRSY6"
                                    className="bg-neon-blossom hover:bg-dark-plum-500 inline-flex h-12 w-50 items-center justify-center rounded-full px-6 py-2 font-bold text-white transition"
                                    target="_blank"
                                >
                                    Jak dojechać?
                                </a>
                                <a
                                    href="tel:+48459410096"
                                    className="bg-neon-blossom hover:bg-dark-plum-500 inline-flex h-12 w-50 items-center justify-center rounded-full px-6 py-2 font-bold text-white transition"
                                >
                                    Umów wizytę
                                </a>
                            </div>
                        </div>

                        {/* PRAWA KOLUMNA */}
                        <div className="flex w-full justify-center md:w-14/32">
                            <img
                                src={officeImage}
                                alt="Gabinet podologiczny"
                                className="aspect-square w-full max-w-md rounded-2xl object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                </Container>

                <style jsx>{`
                    .carousel {
                        display: flex;
                        gap: 1.5rem;
                        width: max-content;
                    }

                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-50%);
                        }
                    }

                    .animate-scroll {
                        animation: scroll 20s linear infinite;
                    }
                `}</style>
            </div>

            <div className={'bg-gray-100 pt-20 pb-20'}>
                <Container>
                    <HeadingHome
                        title={'Dlaczego my?'}
                        titleClasName={'text-dark-plum'}
                        text={
                            'W naszym gabinecie każdy pacjent jest traktowany indywidualnie. Łączymy wiedzę, doświadczenie i nowoczesne technologie, by zapewnić Ci skuteczną terapię w atmosferze zaufania, spokoju i troski o każdy szczegół.'
                        }
                    />
                    <div className={'mt-10 grid grid-cols-1 gap-5 xl:grid-cols-3'}>
                        {whyUsConfig.map((item, index) => (
                            <div key={index} className={'flex flex-col items-center rounded-2xl border-2 p-10 shadow-2xl'}>
                                {item.Icon}
                                <h4 className={'text-dark-plum mt-5 mb-2 text-center text-xl font-bold'}>{item.title}</h4>
                                <p className={'text-dark-plum text-center'}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className={'flex justify-center'}>
                        <Button
                            asChild
                            className={
                                "bg-neon-blossom hover:bg-dark-plum-500 transition' mt-6 h-12 w-50 rounded-full px-4 py-2 font-bold text-white"
                            }
                        >
                            <a href="tel:+48459410096">Skontakuj się</a>
                        </Button>
                    </div>
                </Container>
            </div>
            <div className={'bg-gray-200 pt-20'}>
                <Container>
                    <HeadingHome
                        title={'Kontakt'}
                        titleClasName={'text-dark-plum'}
                        text={
                            'Masz pytania lub chcesz umówić wizytę? Skontaktuj się z nami telefonicznie, przez formularz lub odwiedź nasz gabinet w Łodzi. Jesteśmy tu, by pomóc Ci zadbać o zdrowie Twoich stóp.'
                        }
                    />

                    <div className={'relative top-[30px] z-15 rounded-2xl border-1 border-gray-300 bg-gray-100 p-10 shadow-2xl'}>
                        <ContactSection />
                    </div>
                </Container>
                <Map />
            </div>
            <div className={'bg-gray-100 pt-20 pb-20'}>
                <Container>
                    <HeadingHome
                        title={'Opinie'}
                        text={
                            'Zaufanie naszych pacjentów to najlepsza rekomendacja. Sprawdź, co mówią osoby, które powierzyły nam swoje zdrowie i przekonaj się, że warto nam zaufać.'
                        }
                        titleClasName={'text-dark-plum'}
                    />

                    <Opinions />
                </Container>
            </div>
            <div className={'bg-gray-200'}>
                <Container className={'pt-20 pb-20'}>
                    <HeadingHome
                        title={'Najczęściej zadawane pytania'}
                        text={
                            'Masz wątpliwości przed wizytą? Zebraliśmy odpowiedzi na najczęstsze pytania dotyczące zabiegów, przygotowania do terapii i pielęgnacji stóp po wizycie.'
                        }
                        titleClasName={'text-dark-plum'}
                    />

                    <FAQ data={configFAQ.slice(0, 4)} />
                    <div className={'flex justify-center'}>
                        <Button
                            asChild
                            className={
                                "bg-neon-blossom hover:bg-dark-plum-500 transition' mt-6 h-12 w-50 rounded-full px-4 py-2 font-bold text-white"
                            }
                        >
                            <Link href={route('faq')}>Zobacz więcej</Link>
                        </Button>
                    </div>
                </Container>
            </div>
        </AppLayout>
    );
}
