import { motion } from 'framer-motion';
import annaImage from '../assets/images/cooperation/anna.jpg';
import jakubImage from '../assets/images/cooperation/jakub.jpg';
import katarzynaImage from '../assets/images/cooperation/katarzyna.webp';
import selfPhoto from '../assets/images/self-photo.webp';
import subpageHeader5 from '../assets/images/subpage-header/subpage-header-5.jpg';
import AnimatedText from '../components/animation/animated-text.jsx';
import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import Timeline from '../components/timeline.jsx';
import { Button } from '../components/ui/button.js';
import AppLayout from '../layouts/app-layout.jsx';

const AboutMe = () => {
    const cooperationConfig = [
        {
            title: 'Dr. n.med. Katarzyna Juczyńska',
            subtitle: 'Dermatolog, Wenerolog',
            desc: 'Dr Katarzyna Juczyńska jest wykwalifikowaną dermatolog i wenerolog. Ukończyła studia medyczne na Wydziale Lekarskim Akademii Medycznej we Wrocławiu. W 2018 roku obroniła swoją pracę doktorską z wyróżnieniem, uzyskując tytuł doktora nauk medycznych. Od 2012 roku jest związana z Kliniką Dermatologii i Wenerologii Uniwersytetu Medycznego w Łodzi, gdzie obecnie pełni funkcję adiunkta',
            image: katarzynaImage,
            link: 'https://salvemedica.pl/lekarze/katarzyna-juczynska',
        },
        {
            title: 'Dr n. med. Anna Kaczorowska',
            subtitle: 'Specjalista dermatolog, wenerolog, lekarz medycyny estetycznej',
            desc: 'Ukończyła Akademię Medyczną w Łodzi, uzyskując tytuł doktora nauk medycznych w 2009 roku. Specjalizację z dermatologii i wenerologii zdobyła w Klinice Dermatologii, Dermatologii Dziecięcej i Onkologicznej w Łodzi, pracując pod kierownictwem prof. dr hab. n. med. Andrzeja Kaszuby. Jest aktywną członkinią Polskiego Towarzystwa Dermatologicznego oraz Stowarzyszenia Lekarzy Dermatologów Estetycznych.',
            image: annaImage,
            link: 'https://salve.pl/wizyty-lekarskie/anna-kaczorowska,150',
        },
        {
            title: 'Mgr Jakub Ujejski',
            subtitle: 'Fizjoterapeuta',
            desc: 'Ukończył Uniwersytet Medyczny w Łodzi, uzyskując tytuł magistra fizjoterapii. Regularnie uczestniczy w szkoleniach dotyczących masażu i nowoczesnych technik terapii manualnej. W swojej praktyce stosuje różnorodne metody, takie jak masaż głęboki, kinesiotaping, masaż mięśniowo-powięziowy oraz terapię manualną. Zabiegi przeprowadza zarówno w gabinecie, jak i z dojazdem do pacjenta.',
            image: jakubImage,
            link: 'https://www.facebook.com/profile.php?id=100009207424067',
        },
    ];

    return (
        <AppLayout>
            <SEO
                title={'O Mnie - Poznaj Specjalistę Podologa w Łodzi'}
                description={
                    'Nazywam się Monika Juczyńska i jestem certyfikowanym podologiem. Poznaj moje doświadczenie, kwalifikacje i misję dbania o zdrowie Twoich stóp w Łodzi.'
                }
                url={'/o-mnie'}
            />

            <SubpageHeader
                title={'O mnie'}
                background={subpageHeader5}
                text={
                    'Dowiedz się więcej o moim doświadczeniu, kwalifikacjach i pasji do podologii. Profesjonalizm i indywidualne podejście w trosce o zdrowie Twoich stóp.'
                }
            />
            <SubpageLayoutContainer>
                <div className={'flex flex-col items-start gap-5 sm:flex-row sm:items-center'}>
                    <motion.img src={selfPhoto} className={'w-30 sm:w-15'} />
                    <AnimatedText
                        as={'h2'}
                        className={'text-dark-plum text-start text-3xl font-bold'}
                        staggerChildren={0.02}
                        spanClassName={'mr-2'}
                        text={'mgr Monika Juczyńska Dyplomowany Specjalista ds. Podologii'}
                    />
                </div>
                <div className={'mt-10 flex flex-col gap-5'}>
                    <ul>
                        {[
                            'Absolwentka Wyższej Szkoły Kosmetyki i Nauk o Zdrowiu w Łodzi',
                            'Absolwentka Wyższej Szkoły Edukacji Zdrowotnej i Nauk Społecznych w Łodzi',
                            'Absolwentka Wyższej Szkoły Teologiczno-Humanistycznej w Łodzi',
                            'Absolwentka Prywatnej Policealnej Szkoły Kosmetycznej w Łodzi',
                        ].map((el, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true, amount: 0.3 }}
                                className={'text-dark-plum'}
                            >
                                🎓 {el}
                            </motion.li>
                        ))}
                    </ul>
                    <div>
                        <motion.p
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.3 }}
                            className={'text-dark-plum mt-3 w-full sm:w-1/2'}
                        >
                            Podologia to moja pasja. Stale poszerzam swoją wiedzę uczestnicząc w licznych szkoleniach i kongresach podologicznych.
                            Pracuję z dorosłymi jak i z dziećmi. Dla uzyskania najwyższych standardów usług współpracuję z cenionymi specjalistami. W
                            moim Gabinecie Podologicznym stosuje nowoczesne technologie i procedury aby zapewnić Ci bezpieczną i skuteczną usługę.
                        </motion.p>
                    </div>
                    <div className={'flex w-full justify-end'}>
                        <motion.p
                            initial={{ opacity: 0, x: 25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.3 }}
                            className={'text-dark-plum mt-3 w-full sm:w-1/2'}
                        >
                            Zawsze jestem gotowa Tobie pomóc. Mogę również przyjechać niezależnie od położenia Twojego miejsca zamieszkania na terenie
                            Łodzi, zapewniając najlepszą opiekę dla Twoich stóp. Podzielam słuszność stwierdzenia , że zdrowe stopy są kluczem do
                            pełni życia. Chore stopy przeszkadzają jak wiesz w realizacji codziennych obowiązków i negatywnie wpływają na Twoje ogólne
                            samopoczucie. W moim Gabinecie Podologicznym stosuje nowoczesne technologie i procedury aby zapewnić Ci bezpieczną i
                            skuteczną usługę..
                        </motion.p>
                    </div>
                    <div>
                        <motion.p
                            initial={{ opacity: 0, x: -25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.3 }}
                            className={'text-dark-plum mt-3 w-full sm:w-1/2'}
                        >
                            Współpracuję również z Centrum Medycznym SALVE, gdzie w każdy wtorek pozostaję do Waszej dyspozycji.
                        </motion.p>
                    </div>
                    <h3 className={'text-dark-plum font-bold'}>Zobowiązana do Najwyższych Standardów Higieny i Sterylizacji!!!</h3>
                    <p className={'text-dark-plum'}>
                        Pełna Sterylność Narzędzi i Frezów: Każde narzędzie i frez używany podczas moich zabiegów przechodzi przez rygorystyczny
                        proces sterylizacji , zapewniając pełną dezynfekcję i bezpieczeństwo dla każdego klienta.
                    </p>
                    <p className={'text-dark-plum'}>
                        Sterylny Pakiet Medyczny dla Każdego Klienta: Dla Twojego bezpieczeństwa, każdy zabieg wykonuje przy użyciu nowego, sterylnego
                        pakietu medycznego, gwarantującego najwyższe standardy higieniczne.
                    </p>
                    <p className={'text-dark-plum'}>
                        Autoklaw – Złoty Standard Sterylizacji: Mój mobilny gabinet wykorzystuje autoklaw, urządzenie do sterylizacji, które
                        zabezpiecza przed bakteriami, wirusami i innymi mikroorganizmami, zapewniając, że wszystkie nasze narzędzia są sterylne i
                        bezpieczne w użyciu.
                    </p>
                </div>
                <Timeline />
                <div>
                    <h5 className={'text-dark-plum mb-5 font-bold'}>Z kim współpracuje:</h5>
                    <div className={'grid gap-12 lg:grid-cols-2'}>
                        {cooperationConfig.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true, amount: 0.3 }}
                                className={'border-1 lg:p-12'}
                            >
                                <div className={'mb-3 flex flex-col items-start gap-4 sm:flex-row sm:items-center'}>
                                    <img src={item.image} className={'h-25 w-25 rounded-full object-cover'} />
                                    <div>
                                        <h5 className={'text-dark-plum text-2xl font-bold'}>{item.title}</h5>
                                        <p className={'text-dark-plum'}>{item.subtitle}</p>
                                    </div>
                                </div>
                                <p className={'text-dark-plum'}>{item.desc}</p>
                                <Button
                                    asChild
                                    className={"bg-neon-blossom hover:bg-dark-plum-500 transition' mt-3 rounded-full px-4 py-2 font-bold text-white"}
                                >
                                    <a href={item.link} target={'_blank'}>
                                        Zobacz więcej
                                    </a>
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default AboutMe;
