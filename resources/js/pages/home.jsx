import { Head, Link } from '@inertiajs/react';
import { motion } from 'motion/react';
import headerBackground from '../assets/images/header.webp';
import selfPhoto from '../assets/images/self-photo.webp';
import AnimatedText from '../components/animation/animated-text.jsx';
import HeadingHome from '../components/heading-home.jsx';
import Map from '../components/map.jsx';
import Opinions from '../components/opinions.jsx';
import ContactSection from '../components/page/contact-section.jsx';
import FAQ from '../components/page/faq.jsx';
import PricesAccordion from '../components/prices-accordion.jsx';
import TreatmentsTiles from '../components/treatments-tiles.jsx';
import { Button } from '../components/ui/button.js';
import { configFAQ } from '../config/configFAQ.js';
import { homePrices } from '../config/configPrice.js';
import AppLayout from '../layouts/app-layout.jsx';

export default function Home() {
    const statisticsConfig = [
        {
            name: 'Liczba wizyt',
        },
    ];

    return (
        <AppLayout>
            <Head title="Home">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className={`relative h-200 w-full bg-cover bg-center`} style={{ backgroundImage: `url("${headerBackground}")` }}>
                <div className={'absolute top-0 left-0 h-full w-full bg-black opacity-35'}></div>

                <div className="absolute top-1/4 left-1/2 flex -translate-x-1/2 transform flex-col items-center gap-3 text-center">
                    <AnimatedText text="Gabinet Podologiczny" as="h1" className="text-6xl font-bold text-white" />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className={'text-lg text-white'}
                    >
                        Profesjonalna opieka podologiczna w komfortowych warunkach
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className={'text-lg text-white'}
                    >
                        Zapraszamy do naszego gabinetu w Łodzi
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className={'text-lg text-white'}
                    >
                        Zadbaj o zdrowie i estetykę swoich stóp już dziś
                    </motion.p>
                    <div className="mt-2">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="bg-dark-plum hover:bg-dark-plum-500 h-12 w-50 rounded-full px-6 py-2 font-bold text-white transition"
                        >
                            Umów wizytę
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className={'bg-dark-plum pt-20 pb-20'}>
                <div className={'container mx-auto'}>
                    <div className={'flex w-full flex-col items-center'}>
                        <HeadingHome>Zabiegi podologiczne</HeadingHome>
                        <p className={'mt-2 max-w-200 text-center'}>
                            Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj
                            wizytę już dziś!
                        </p>
                    </div>
                    <TreatmentsTiles />
                </div>
            </div>
            <div className={'relative min-h-300 bg-[url(/images/test.jpeg)] bg-cover bg-fixed bg-center bg-no-repeat lg:min-h-175'}>
                <div className={'bg-dark-plum absolute top-0 left-0 h-full w-full opacity-25'}></div>
                <div className={'absolute top-1/2 w-full -translate-y-1/2'}>
                    <div className={'container mx-auto flex flex-col items-center gap-10 lg:flex-row lg:gap-25'}>
                        <div className={'w-100 lg:w-full'}>
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
                                Podologia to nie tylko moja profesja, ale przede wszystkim pasja. Dążąc do perfekcji, nieustannie rozwijam swoje
                                umiejętności, uczestnicząc w licznych szkoleniach i prestiżowych kongresach podologicznych. Jako doświadczony
                                specjalista w gabinecie podologicznym w Łodzi, moim celem jest dostarczanie usług najwyższej jakości dla każdego –
                                zarówno dorosłych, jak i dzieci. Szczególną uwagę poświęcam seniorom, którzy z różnych przyczyn, w tym chorób
                                współistniejących, nie mogą samodzielnie dotrzeć do naszego gabinetu. Ich dobrostan i komfort są dla mnie priorytetem,
                                co motywuje mnie do ciągłego poszerzania mojej wiedzy i umiejętności. Współpraca z cenionymi specjalistami z różnych
                                dziedzin medycyny pozwala mi na utrzymanie najwyższych standardów usług podologicznych, co potwierdzają liczne
                                pozytywne opinie naszych pacjentów. Gabinet podologiczny w Łodzi to miejsce, gdzie pasja łączy się z profesjonalizmem,
                                a zdrowie Twoich stóp jest naszym największym zobowiązaniem.
                            </motion.p>
                            <div className={'flex justify-center'}>
                                <button
                                    className={
                                        'bg-dark-plum hover:bg-dark-plum-500 mt-3 h-12 w-50 rounded-full px-4 py-2 font-bold text-white transition'
                                    }
                                >
                                    Zobacz więcej
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'bg-dark-plum pt-20 pb-20'}>
                <div className={'container mx-auto'}>
                    <div className={'mb-5 flex w-full flex-col items-center'}>
                        <HeadingHome>Cennik</HeadingHome>
                        <p className={'mt-2 max-w-200 text-center'}>
                            Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj
                            wizytę już dziś!
                        </p>
                    </div>
                    <PricesAccordion data={homePrices} />
                    <div className={'flex justify-center'}>
                        <button
                            className={
                                "bg-neon-blossom hover:bg-dark-plum-500 transition' mt-6 h-12 w-50 rounded-full px-4 py-2 font-bold text-white"
                            }
                        >
                            Poznaj wszystkie ceny
                        </button>
                    </div>
                </div>
            </div>
            <div className={'bg-dark-plum pt-20 pb-20'}>
                <HeadingHome>Kontakt</HeadingHome>
                <div className={'relative top-[30px] z-15 container mx-auto rounded-2xl bg-gray-200 p-10'}>
                    <ContactSection />
                </div>
                <Map />
            </div>
            <div className={'bg-dark-plum'}>
                <div className={'container mx-auto pt-20 pb-20'}>
                    <div className={'mb-5 flex w-full flex-col items-center'}>
                        <HeadingHome>Opinie</HeadingHome>
                        <p className={'mt-2 max-w-200 text-center'}>
                            Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj
                            wizytę już dziś!
                        </p>
                    </div>
                    <Opinions />
                </div>
            </div>
            <div className={'bg-dark-plum'}>
                <div className={'container mx-auto pt-20 pb-20'}>
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
                            <Link href={''}>Zobacz więcej</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
