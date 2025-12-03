import { motion } from 'motion/react';
import selfPhoto from '../../../assets/images/self-photo.webp';
import AnimatedText from '../../../components/animation/animated-text.jsx';
import SEO from '../../../components/page/SEO.jsx';
import SubpageHeader from '../../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../../components/subpage-layout-container.jsx';
import Timeline from '../../../components/timeline.jsx';
import AppLayout from '../../../layouts/app-layout.jsx';

const AboutMonika = () => {
    return (
        <AppLayout>
            <SEO
                title={'Monika Juczyńska – Dyplomowany Podolog w Łodzi | Mobilny Gabinet Podologiczny'}
                description={
                    'Poznaj Monikę Juczyńską – certyfikowanego podologa z Łodzi. Profesjonalna opieka podologiczna, mobilne wizyty domowe, najwyższe standardy sterylizacji, nowoczesne technologie i indywidualne podejście do każdego pacjenta.'
                }
                url={'/o-mnie'}
            />

            <SubpageHeader
                title={'Monika Juczyńska'}
                text={
                    'Poznaj moje doświadczenie i misję niesienia profesjonalnej opieki podologicznej. Łączę wiedzę, praktykę i nowoczesne technologie, oferując bezpieczne, higieniczne i skuteczne zabiegi zarówno w gabinecie, jak i z dojazdem do pacjenta.'
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
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default AboutMonika;
