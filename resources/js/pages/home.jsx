import { Link, usePage } from '@inertiajs/react';
import { Accessibility, Atom, HeartHandshake, Music, ShieldPlus, ShoppingCart, SquareParking, TicketCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import headerImagePoster from '../assets/images/hero-image-poster.webp';
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
            Icon: <Music size={40} className={'text-electric-romance'} />,
        },
        {
            title: 'Dostęp dla osób z niepełnosprawnościami',
            Icon: <Accessibility size={40} className={'text-electric-romance'} />,
        },
        {
            title: 'Łatwy dojazd i parking',
            Icon: <SquareParking size={40} className={'text-electric-romance'} />,
        },
        {
            title: 'Sprzedaż specjalistycznych produktów',
            Icon: <ShoppingCart size={40} className={'text-electric-romance'} />,
        },
        {
            title: 'Bony podarunkowe',
            Icon: <TicketCheck size={40} className={'text-electric-romance'} />,
        },
        {
            title: 'Bezpieczeństwo i higiena',
            Icon: <HeartHandshake size={40} className={'text-electric-romance'} />,
        },
        {
            title: 'Nowoczesny i ergonomiczny',
            Icon: <HeartHandshake size={40} className={'text-electric-romance'} />,
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
            <div className={`relative flex min-h-screen items-center justify-center overflow-hidden`}>
                <video
                    ref={videoRef}
                    src={videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={headerImagePoster}
                    fetchpriority="high"
                    className="absolute h-full w-full object-cover object-[var(--mobile-position)] md:object-center"
                />

                <div className={'absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black/80 to-black/40'}></div>

                <div className="relative z-10 container mx-auto px-4 text-center">
                    <AnimatedText
                        text="Gabinet Podologiczny"
                        as="h1"
                        className="mb-6 text-5xl font-bold text-white sm:text-7xl"
                        spanClassName={'mr-0 md:mr-5'}
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className="mx-auto mb-10 max-w-xl text-base text-white sm:text-lg"
                    >
                        Zadbaj o zdrowie i estetykę swoich stóp. Zapraszamy do naszego profesjonalnego gabinetu w Łodzi, gdzie zapewniamy opiekę w
                        komfortowych warunkach.
                    </motion.p>
                    <div className="mt-2">
                        <motion.a
                            href="tel:+48459410096"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-dark-plum hover:bg-dark-plum-500 inline-flex h-12 w-50 items-center justify-center rounded-full px-6 py-2 font-bold text-white transition"
                        >
                            Umów wizytę
                        </motion.a>
                    </div>
                </div>
            </div>
            <div className={'bg-dark-plum pt-20 pb-20'}>
                <Container>
                    <div className={'flex w-full flex-col items-center'}>
                        <HeadingHome>Zabiegi podologiczne</HeadingHome>
                        <p className={'mt-2 max-w-200 text-center'}>
                            Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj
                            wizytę już dziś!
                        </p>
                    </div>
                    <TreatmentsTiles />
                </Container>
            </div>
            <div className={'relative min-h-350 md:min-h-300 lg:min-h-175'}>
                <div className={'fixed top-0 left-0 -z-10 h-full w-full bg-[url(/images/test.jpeg)] bg-cover bg-center bg-no-repeat'}></div>
                <div className={'bg-dark-plum absolute top-0 left-0 h-full w-full opacity-25'}></div>
                <div className={'absolute top-1/2 w-full -translate-y-1/2'}>
                    <div className={'container mx-auto flex flex-col items-center gap-10 lg:flex-row lg:gap-25'}>
                        <div className={'w-3/4 sm:w-1/2 lg:w-full'}>
                            <motion.img
                                initial={{ opacity: 0, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true, amount: 0.5 }}
                                src={selfPhoto}
                            />
                        </div>
                        <div className={'w-full rounded-md bg-[rgba(83,2,54,0.5)] p-7 shadow-2xl'}>
                            <HeadingHome>O mnie</HeadingHome>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true, amount: 0.2 }}
                                className="text-md mt-3 text-center tracking-wider"
                            >
                                Podologia to dla mnie nie tylko zawód, lecz przede wszystkim prawdziwa pasja. Dążąc do perfekcji, nieustannie rozwijam
                                swoje umiejętności, uczestnicząc w licznych szkoleniach oraz prestiżowych kongresach podologicznych. Jako doświadczony
                                specjalista prowadzący gabinet podologiczny w Łodzi, stawiam sobie za cel świadczenie usług na najwyższym poziomie –
                                zarówno dla dorosłych, jak i dzieci. Szczególną troską otaczam seniorów, którzy z powodu chorób współistniejących lub
                                ograniczeń zdrowotnych nie zawsze mogą dotrzeć do naszego gabinetu. Dla nich mam mobilną wersję gabinetu. Bliska
                                współpraca z cenionymi specjalistami z różnych dziedzin medycyny pozwalają mi utrzymywać najwyższe standardy usług
                                podologicznych, co potwierdzają liczne pozytywne opinie pacjentów. Gabinet podologiczny w Łodzi to miejsce, w którym
                                pasja łączy się z profesjonalizmem, a troska o zdrowie Twoich stóp jest naszym najważniejszym zobowiązaniem.
                            </motion.p>
                            <div className={'flex justify-center'}>
                                <Button
                                    asChild
                                    className={
                                        'bg-dark-plum hover:bg-dark-plum-500 mt-3 h-12 w-50 rounded-full px-4 py-2 font-bold text-white transition'
                                    }
                                >
                                    <Link href={route('about-me')}>Zobacz więcej</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'bg-dark-plum pt-20 pb-20'}>
                <Container>
                    <div className={'mb-5 flex w-full flex-col items-center'}>
                        <HeadingHome>Cennik</HeadingHome>
                        <p className={'mt-2 max-w-200 text-center'}>
                            Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj
                            wizytę już dziś!
                        </p>
                    </div>
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
            <div className={'bg-dark-plum-secondary pt-20 pb-20'}>
                <Container>
                    <div className={'flex flex-col items-center gap-10 lg:flex-row lg:gap-25'}>
                        <div className={'mb-5 flex w-full flex-col items-center'}>
                            <HeadingHome>Gabinet stacjonarny</HeadingHome>
                            <p className={'mt-2 max-w-200 text-center'}>
                                Mój gabinet w sercu Łodzi to przestrzeń stworzona z myślą o Twoim komforcie i bezpieczeństwie. Połączyłam nowoczesny
                                design z najwyższymi standardami higieny, aby każda wizyta przebiegała w atmosferze relaksu i pełnego zaufania. Dbamy
                                o każdy detal – od wygodnego fotela podologicznego, po zaawansowany sprzęt diagnostyczny i terapeutyczny.
                            </p>
                            <div
                                className={'mt-10 grid w-3/4 grid-cols-1 gap-5 sm:w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'}
                            >
                                {benefitsConfig.map((item, index) => (
                                    <div
                                        className={
                                            'flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl border-2 px-2 shadow-2xl'
                                        }
                                    >
                                        {item.Icon}
                                        <h4 className={'text-center text-xl font-bold'}>{item.title}</h4>
                                    </div>
                                ))}
                            </div>
                            <div className={'mt-5 flex flex-col items-center justify-center gap-5 md:flex-row'}>
                                <a
                                    href={'https://maps.app.goo.gl/AYsaeVkj7LU1nRSY6'}
                                    className={
                                        'bg-neon-blossom hover:bg-dark-plum-500 inline-flex h-12 w-50 items-center justify-center rounded-full px-6 py-2 font-bold text-white transition'
                                    }
                                    target={'_blank'}
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
                    </div>
                </Container>
            </div>

            {/*<div*/}
            {/*    className={'relative min-h-200 bg-cover bg-fixed bg-center bg-no-repeat lg:min-h-175 lg:bg-[50%_-900px]'}*/}
            {/*    style={{ backgroundImage: `url("${officeBackground}")` }}*/}
            {/*>*/}
            {/*    <div className={'absolute top-1/2 w-full -translate-y-1/2'}>*/}
            {/*        <div className={'container mx-auto flex flex-col items-center gap-10 lg:flex-row lg:gap-25'}>*/}
            {/*            <div className={'w-full rounded-md bg-[rgba(83,2,54,0.7)] p-7 shadow-2xl'}>*/}
            {/*                <HeadingHome>Gabinet stacjonarny</HeadingHome>*/}
            {/*                <p className={'mt-5'}>*/}
            {/*                    Mój gabinet w sercu Łodzi to przestrzeń stworzona z myślą o Twoim komforcie i bezpieczeństwie. Połączyłam nowoczesny*/}
            {/*                    design z najwyższymi standardami higieny, aby każda wizyta przebiegała w atmosferze relaksu i pełnego zaufania. Dbamy*/}
            {/*                    o każdy detal – od wygodnego fotela podologicznego, po zaawansowany sprzęt diagnostyczny i terapeutyczny.*/}
            {/*                </p>*/}
            {/*                <ul>*/}
            {/*                    <li></li>*/}
            {/*                </ul>*/}
            {/*                <div className={'mt-5 flex items-center justify-center gap-5'}>*/}
            {/*                    <a*/}
            {/*                        href={'https://maps.app.goo.gl/AYsaeVkj7LU1nRSY6'}*/}
            {/*                        className={*/}
            {/*                            'bg-neon-blossom hover:bg-dark-plum-500 inline-flex h-12 w-50 items-center justify-center rounded-full px-6 py-2 font-bold text-white transition'*/}
            {/*                        }*/}
            {/*                        target={'_blank'}*/}
            {/*                    >*/}
            {/*                        Jak dojechać?*/}
            {/*                    </a>*/}
            {/*                    <a*/}
            {/*                        href="tel:+48459410096"*/}
            {/*                        className="bg-neon-blossom hover:bg-dark-plum-500 inline-flex h-12 w-50 items-center justify-center rounded-full px-6 py-2 font-bold text-white transition"*/}
            {/*                    >*/}
            {/*                        Umów wizytę*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className={'bg-dark-plum-secondary pt-20 pb-20'}>*/}
            {/*    <Container>*/}
            {/*        <div className={'mb-5 flex w-full flex-col items-center'}>*/}
            {/*            <HeadingHome>Gabinet mobilny</HeadingHome>*/}
            {/*            <p className={'mt-2 max-w-200 text-center'}>*/}
            {/*                Nasz gabinet w Łodzi to więcej niż tylko miejsce pracy – to przestrzeń, w której z troską i zaangażowaniem podchodzimy do*/}
            {/*                zdrowia Twoich stóp. Rozumiemy, jak ważny jest komfort codziennego poruszania się, dlatego do każdego problemu podchodzimy*/}
            {/*                z pełną empatią i skupieniem. U nas nie jesteś kolejnym pacjentem, ale gościem, któremu poświęcamy czas i uwagę. Pozwól*/}
            {/*                nam zadbać o Twoje stopy, by każdy Twój krok był lekki i bezbolesny.*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*        <div className={'mt-10 grid grid-cols-1 gap-5 xl:grid-cols-3'}>*/}
            {/*            {whyUsConfig.map((item, index) => (*/}
            {/*                <div key={index} className={'flex flex-col items-center rounded-2xl border-2 p-10 shadow-2xl'}>*/}
            {/*                    {item.Icon}*/}
            {/*                    <h4 className={'mt-5 mb-2 text-center text-xl font-bold'}>{item.title}</h4>*/}
            {/*                    <p className={'text-center'}>{item.text}</p>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}
            {/*        <div className={'flex justify-center'}>*/}
            {/*            <Button*/}
            {/*                asChild*/}
            {/*                className={*/}
            {/*                    "bg-neon-blossom hover:bg-dark-plum-500 transition' mt-6 h-12 w-50 rounded-full px-4 py-2 font-bold text-white"*/}
            {/*                }*/}
            {/*            >*/}
            {/*                <a href="tel:+48459410096">Skontakuj się</a>*/}
            {/*            </Button>*/}
            {/*        </div>*/}
            {/*    </Container>*/}
            {/*</div>*/}
            <div className={'bg-dark-plum pt-20 pb-20'}>
                <Container>
                    <div className={'mb-5 flex w-full flex-col items-center'}>
                        <HeadingHome>Dlaczego my?</HeadingHome>
                        <p className={'mt-2 max-w-200 text-center'}>
                            Nasz gabinet w Łodzi to więcej niż tylko miejsce pracy – to przestrzeń, w której z troską i zaangażowaniem podchodzimy do
                            zdrowia Twoich stóp. Rozumiemy, jak ważny jest komfort codziennego poruszania się, dlatego do każdego problemu podchodzimy
                            z pełną empatią i skupieniem. U nas nie jesteś kolejnym pacjentem, ale gościem, któremu poświęcamy czas i uwagę. Pozwól
                            nam zadbać o Twoje stopy, by każdy Twój krok był lekki i bezbolesny.
                        </p>
                    </div>
                    <div className={'mt-10 grid grid-cols-1 gap-5 xl:grid-cols-3'}>
                        {whyUsConfig.map((item, index) => (
                            <div key={index} className={'flex flex-col items-center rounded-2xl border-2 p-10 shadow-2xl'}>
                                {item.Icon}
                                <h4 className={'mt-5 mb-2 text-center text-xl font-bold'}>{item.title}</h4>
                                <p className={'text-center'}>{item.text}</p>
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
            <div className={'bg-dark-plum-secondary pt-20'}>
                <Container>
                    <HeadingHome>Kontakt</HeadingHome>
                    <div className={'relative top-[30px] z-15 rounded-2xl bg-gray-200 p-10'}>
                        <ContactSection />
                    </div>
                </Container>
                <Map />
            </div>
            <div className={'bg-dark-plum pt-40 pb-20'}>
                <Container>
                    <div className={'mb-5 flex w-full flex-col items-center'}>
                        <HeadingHome>Opinie</HeadingHome>
                        <p className={'mt-2 max-w-200 text-center'}>
                            Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj
                            wizytę już dziś!
                        </p>
                    </div>
                    <Opinions />
                </Container>
            </div>
            <div className={'bg-dark-plum-secondary'}>
                <Container className={'pt-20 pb-20'}>
                    <div className={'mb-5 flex w-full flex-col items-center'}>
                        <HeadingHome>Najczęściej zadawane pytania</HeadingHome>
                        <p className={'mt-2 max-w-200 text-center'}>
                            Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj
                            wizytę już dziś!
                        </p>
                    </div>
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
