import { motion } from 'motion/react';
import AnimatedText from '../../../components/animation/animated-text.jsx';
import SEO from '../../../components/page/SEO.jsx';
import SubpageHeader from '../../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../../components/subpage-layout-container.jsx';
import AppLayout from '../../../layouts/app-layout.jsx';
const AboutKrzysztofSenior = () => {
    return (
        <AppLayout>
            <SEO
                title={'O Mnie - Poznaj Terapeutę Holistycznego w Łodzi'}
                description={
                    'Nazywam się Krzysztof Juczyński i jestem terapeutą holistycznym. Poznaj moje doświadczenie, metody pracy oraz pasję wspierania ludzi w zdrowiu fizycznym, psychicznym i duchowym.'
                }
                url={'/o-mnie'}
            />

            <SubpageHeader
                title={'O mnie'}
                text={
                    'Dowiedz się więcej o moim doświadczeniu, podejściu holistycznym i pasji do wspierania zdrowia i harmonii w życiu innych. Profesjonalizm i indywidualne podejście do każdego człowieka.'
                }
            />

            <SubpageLayoutContainer>
                <div className={'flex flex-col items-start gap-5 sm:flex-row sm:items-center'}>
                    {/*<motion.img src={selfPhoto} className={'w-30 rounded-full sm:w-15'} />*/}
                    <AnimatedText
                        as={'h2'}
                        className={'text-dark-plum text-start text-3xl font-bold'}
                        staggerChildren={0.02}
                        spanClassName={'mr-2'}
                        text={'Krzysztof Juczyński – Terapeuta Holistyczny i Instruktor Jogi'}
                    />
                </div>

                <div className={'mt-10 flex flex-col gap-5'}>
                    <motion.p
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={'text-dark-plum w-full sm:w-3/4'}
                    >
                        Pochodzę z rodziny psychologów, co od najmłodszych lat kształtowało moją wrażliwość na kwestie emocjonalne, mentalne i
                        rozwojowe. Moja fascynacja holistycznym podejściem do człowieka sprawiła, że połączyłem zdrowie fizyczne, psychiczne i duchowe
                        w mojej pracy terapeutycznej.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={'text-dark-plum w-full sm:w-3/4'}
                    >
                        Obecnie pracuję jako terapeuta zajęciowy w Domu Pomocy Społecznej nr 5 w Łodzi, wspierając osoby przewlekle psychicznie chore.
                        W swojej pracy wykorzystuję techniki medycyny naturalnej i holistyczne podejście, aby poprawić komfort życia i samopoczucie
                        podopiecznych.
                    </motion.p>

                    <h3 className={'text-dark-plum mt-5 font-bold'}>Wykształcenie i doświadczenie</h3>
                    <ul className={'text-dark-plum list-inside list-disc'}>
                        {[
                            'Absolwent Studium Edukacji Ekologicznej i Profilaktyki Zdrowia – kierunek Naturopatia',
                            'Instruktor Jogi od 2016 roku',
                            'Ponad 30 lat praktyki jogi i pracy nad uważnością, równowagą i rozwojem osobistym',
                        ].map((el, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.1 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className={'text-dark-plum'}
                            >
                                {el}
                            </motion.li>
                        ))}
                    </ul>

                    <h3 className={'text-dark-plum mt-5 font-bold'}>Metody pracy holistycznej</h3>
                    <ul className={'text-dark-plum list-inside list-disc'}>
                        {[
                            'Dźwiękoterapia misami tybetańskimi i kamertonami czakralnymi',
                            'Bioenergoterapia',
                            'Refleksologia stóp i dłoni',
                            'Terapia bańkami ogniowymi',
                            'Konchowanie uszu',
                            'Akupresura',
                            'B.S.M. – Bioemanacyjne Sprężenie Zwrotne',
                            'Joga terapeutyczna',
                            'Terapia wyobrażeniowa (wizualizacje)',
                            'Litoterapia (kamienie naturalne)',
                            'Aromaterapia',
                        ].map((el, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.05 }}
                                viewport={{ once: true, amount: 0.3 }}
                                className={'text-dark-plum'}
                            >
                                {el}
                            </motion.li>
                        ))}
                    </ul>

                    <motion.p
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={'text-dark-plum mt-5 w-full sm:w-3/4'}
                    >
                        Moje podejście do terapii opiera się na całościowym spojrzeniu na człowieka – łączę aspekty fizyczne, psychiczne i
                        energetyczne, aby wspierać proces regeneracji, poprawę funkcjonowania i dobrostanu. Moje terapie są dostępne dla każdego, kto
                        pragnie odzyskać równowagę i spokój w życiu.
                    </motion.p>
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default AboutKrzysztofSenior;
