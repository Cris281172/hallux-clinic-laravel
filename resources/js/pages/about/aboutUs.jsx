import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import krzysztofJuczynskiSenior from '../../assets/images/about-us/team/krzysztof-juczynski-senior.webp';
import annaImage from '../../assets/images/cooperation/anna.jpg';
import jakubImage from '../../assets/images/cooperation/jakub.jpg';
import katarzynaImage from '../../assets/images/cooperation/katarzyna.webp';
import krzysztofJuczynskiJunior from '../../assets/images/cooperation/krzysztof-juczynski-junior.jpg';
import selfPhoto from '../../assets/images/self-photo.webp';
import AnimatedText from '../../components/animation/animated-text.jsx';
import SEO from '../../components/page/SEO.jsx';
import SubpageHeader from '../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../components/subpage-layout-container.jsx';
import { Button } from '../../components/ui/button.tsx';
import AppLayout from '../../layouts/app-layout.jsx';

const AboutUs = () => {
    const cooperationConfig = [
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
        {
            title: 'Dr. n.med. Katarzyna Juczyńska',
            subtitle: 'Dermatolog, Wenerolog',
            desc: 'Dr Katarzyna Juczyńska jest wykwalifikowaną dermatolog i wenerolog. Ukończyła studia medyczne na Wydziale Lekarskim Akademii Medycznej we Wrocławiu. W 2018 roku obroniła swoją pracę doktorską z wyróżnieniem, uzyskując tytuł doktora nauk medycznych. Od 2012 roku jest związana z Kliniką Dermatologii i Wenerologii Uniwersytetu Medycznego w Łodzi, gdzie obecnie pełni funkcję adiunkta',
            image: katarzynaImage,
            link: 'https://salvemedica.pl/lekarze/katarzyna-juczynska',
        },
        {
            title: 'Krzysztof Juczyński (Junior)',
            subtitle: 'Programista FullStack',
            image: krzysztofJuczynskiJunior,
            desc: 'Specjalizuje się w tworzeniu nowoczesnych aplikacji internetowych oraz usprawnianiu procesów cyfrowych. Odpowiedzialny za rozwój strony internetowej, systemów rejestracji oraz narzędzi wspierających funkcjonowanie gabinetu. Łączy wiedzę techniczną z praktycznym podejściem, dbając o niezawodność i wygodę użytkowników.',
            link: 'https://juczynski.work/',
        },
    ];

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
            role: 'Naturopata',
            image: krzysztofJuczynskiSenior,
            desc: 'Doświadczony naturopata i instruktor jogi, łączący podejście fizyczne, psychiczne i duchowe. Specjalizuje się w terapii naturalnej, refleksologii, bioenergoterapii oraz metodach wspierających dobrostan i równowagę.',
            key: 'krzysztof-juczynski-senior',
        },
    ];

    return (
        <AppLayout>
            <SEO
                title={'O Nas - Zespół Podologiczny w Łodzi'}
                description={
                    'Poznaj nasz zespół specjalistów podologii: Monikę Juczyńską, doświadczonych terapeutów i współpracujących ekspertów. Łączymy pasję, wiedzę i indywidualne podejście, aby zadbać o zdrowie Twoich stóp.'
                }
                url={'/o-nas'}
            />

            <SubpageHeader
                title={'O nas'}
                text={
                    'Nasz zespół podologiczny w Łodzi łączy doświadczenie, pasję i nowoczesne podejście do zdrowia stóp. Stawiamy na profesjonalizm, indywidualne podejście oraz najwyższe standardy usług.'
                }
            />
            <SubpageLayoutContainer>
                <p className="text-dark-plum mb-10 text-lg">
                    Nasz zespół łączy pasję, doświadczenie i nowoczesne podejście do podologii oraz zdrowia pacjentów. Stawiamy na profesjonalizm,
                    indywidualne podejście i troskę o każdy detal, aby zapewnić najwyższy standard usług.
                </p>
                <div>
                    <div className={'flex flex-col items-start gap-5 sm:flex-row sm:items-center'}>
                        <AnimatedText
                            as={'h2'}
                            className={'text-dark-plum text-start text-3xl font-bold'}
                            staggerChildren={0.02}
                            spanClassName={'mr-2'}
                            text={'Poznaj nasz zespół:'}
                        />
                    </div>
                    <div className="mt-5 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {team.map((member) => (
                            <div
                                key={member.name}
                                className="flex flex-col justify-between rounded-xl bg-white/20 p-6 text-center shadow-lg backdrop-blur-xl"
                            >
                                <div>
                                    {member.image ? (
                                        <img src={member.image} className="mx-auto mb-4 h-40 w-40 rounded-full object-cover" />
                                    ) : (
                                        <div className="mx-auto mb-4 flex h-40 w-40 items-center justify-center rounded-full bg-gray-300 object-cover text-4xl">
                                            {member.name.split(' ')[0].slice(0, 1)} {member.name.split(' ')[1].slice(0, 1)}
                                        </div>
                                    )}
                                    <h3 className="text-dark-plum text-xl font-bold">{member.name}</h3>
                                    <p className="text-dark-plum font-semibold">{member.role}</p>
                                    <p className="text-dark-plum mt-2 text-sm">{member.desc}</p>
                                </div>
                                <Button className={'mt-3'} variant={'darkPlum'} asChild>
                                    <Link href={route('about-us.person', { person: member.key })}>Zobacz więcej</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={'mt-20'}>
                    <div className={'flex flex-col items-start gap-5 sm:flex-row sm:items-center'}>
                        <AnimatedText
                            as={'h2'}
                            className={'text-dark-plum text-start text-3xl font-bold'}
                            staggerChildren={0.02}
                            spanClassName={'mr-2'}
                            text={'Współpracuje z:'}
                        />
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {cooperationConfig.map((item) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true, amount: 0.3 }}
                                className={'mt-5 border-1 lg:p-6'}
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
                                    className={'bg-neon-blossom hover:bg-dark-plum-500 mt-3 rounded-full px-4 py-2 font-bold text-white transition'}
                                >
                                    <a href={item.link} target={'_blank'} rel="noreferrer">
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

export default AboutUs;
