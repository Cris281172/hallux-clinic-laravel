import { motion } from 'motion/react';
import magdaPhoto from '../../../assets/images/magda-photo.webp';
import AnimatedText from '../../../components/animation/animated-text.jsx';
import SEO from '../../../components/page/SEO.jsx';
import SubpageHeader from '../../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../../components/subpage-layout-container.jsx';
import AppLayout from '../../../layouts/app-layout.jsx';
import { useIsMobile } from '../../../hooks/use-mobile.ts';

const AboutMagdalena = () => {
    const isMobile = useIsMobile();

    if (isMobile === null) {
        return null;
    }

    const animationProps =
        isMobile === false
            ? {
                initial: { opacity: 0, x: -25 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8, ease: 'easeOut' },
                viewport: { once: true, amount: 0.3 },
            }
            : {};

    return (
        <AppLayout>
            <SEO
                title={'Magdalena Dziewanowska – Dyplomowana Podolog w Łodzi | Mobilny Gabinet Podologiczny'}
                description={
                    'Poznaj Magdalenę Dziewanowską – certyfikowaną podologa z Łodzi. Profesjonalna opieka podologiczna, mobilne wizyty domowe, najwyższe standardy sterylizacji, nowoczesne technologie i indywidualne podejście do każdego pacjenta.'
                }
                url={'/o-mnie'}
            />

            <SubpageHeader
                title={'Magdalena Dziewanowska'}
                text={
                    'Poznaj moje doświadczenie i misję niesienia profesjonalnej opieki podologicznej. Łączę wiedzę, praktykę i nowoczesne technologie, oferując bezpieczne, higieniczne i skuteczne zabiegi zarówno w gabinecie, jak i z dojazdem do pacjenta.'
                }
            />
            <SubpageLayoutContainer>
                <div className={'flex flex-col items-start gap-5 sm:flex-row sm:items-center'}>
                    <motion.img src={magdaPhoto} className={'w-30 h-30 sm:h-15 object-cover sm:w-15 rounded-full'} />
                    <AnimatedText
                        as={'h2'}
                        className={'text-dark-plum text-start text-3xl font-bold'}
                        staggerChildren={0.02}
                        spanClassName={'mr-2'}
                        text={'Magdalena Dziewanowska Dyplomowany kosmetolog-podolog'}
                    />
                </div>
                <div className={'mt-10 flex flex-col gap-5'}>

                    <motion.p
                        {...animationProps}
                        className={'text-dark-plum w-full sm:w-3/4'}
                    >
                        Ukończyłam studia wyższe na kierunku kosmetologia ze specjalizacją podologia w Wyższej Szkole Biznesu i Nauk o Zdrowiu w Łodzi. Od maja 2026 roku mam przyjemność współtworzyć zespół Hallux Clinic.
                    </motion.p>

                    <motion.p
                        {...animationProps}
                        className={'text-dark-plum w-full sm:w-3/4'}
                    >
                        Szczególnie interesują mnie terapie paznokci zmienionych chorobowo, paznokci wrastających i wkręcających się oraz terapia problematycznej skóry pięt. Stale poszerzam swoją wiedzę i umiejętności, uczestnicząc w specjalistycznych szkoleniach.
                    </motion.p>

                    <motion.p
                        {...animationProps}
                        className={'text-dark-plum w-full sm:w-3/4'}
                    >
                        W pracy łączę dokładność, empatię i holistyczne spojrzenie na potrzeby pacjenta. Każdą terapię dobieram indywidualnie, dbając o bezpieczeństwo, komfort i najlepsze możliwe efekty. Istotne jest dla mnie to, aby podczas każdej wizyty pacjent czuł się wysłuchany i zaopiekowany oraz miał pewność, że jego problem został potraktowany z należytą uwagą.
                    </motion.p>

                    <motion.p
                        {...animationProps}
                        className={'text-dark-plum w-full sm:w-3/4'}
                    >
                        Wspólnie poszukamy najlepszego rozwiązania, które pozwoli odzyskać zdrowie, komfort i swobodę każdego Twojego kroku.
                    </motion.p>
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default AboutMagdalena;
