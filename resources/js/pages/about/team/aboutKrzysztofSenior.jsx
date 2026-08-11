import { motion } from 'motion/react';
import krzysztofJuczynskiSenior from '../../../assets/images/about-us/team/krzysztof-juczynski-senior.webp';
import AnimatedText from '../../../components/animation/animated-text.jsx';
import SEO from '../../../components/page/SEO.jsx';
import SubpageHeader from '../../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../../components/subpage-layout-container.jsx';
import { Button } from '../../../components/ui/button.tsx';
import AppLayout from '../../../layouts/app-layout.jsx';
const AboutKrzysztofSenior = () => {
    return (
        <AppLayout>
            <SEO
                title={'Krzysztof Juczyński Senior – Naturopata i Instruktor Jogi w Łodzi'}
                description={
                    'Poznaj Krzysztofa Juczyńskiego – doświadczonego naturopatę, instruktora jogi i terapeutę zajęciowego. Holistyczne podejście, bioenergoterapia, refleksologia, akupresura, terapia naturalna oraz wsparcie emocjonalno-duchowe w Łodzi.'
                }
                url={'/o-nas/krzysztof-juczynski-senior'}
            />

            <SubpageHeader
                title={'Krzysztof Juczyński Senior'}
                text={
                    'Poznaj moje podejście do naturopatii, w której łączę pracę z ciałem, umysłem i energią. Od ponad 30 lat zgłębiam duchowość, naturopatię oraz jogę, wspierając innych w dążeniu do równowagi i lepszego samopoczucia.'
                }
            />

            <SubpageLayoutContainer>
                <div className={'flex flex-col items-start gap-5 sm:flex-row sm:items-center'}>
                    <motion.img src={krzysztofJuczynskiSenior} className={'w-30 rounded-full sm:w-15'} />
                    <AnimatedText
                        as={'h2'}
                        className={'text-dark-plum text-start text-3xl font-bold'}
                        staggerChildren={0.02}
                        spanClassName={'mr-2'}
                        text={'Krzysztof Juczyński – Naturopata, Instruktor Jogi'}
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
                        Pochodzę z rodziny psychologów, co od najmłodszych lat kształtowało moją wrażliwość na kwestie emocjonalne i mentalne. Moja
                        mama, tata oraz brat zawodowo zgłębiają tajniki ludzkiej psychiki. Ja jednak postanowiłem podążać nieco inną ścieżką. Od dawna
                        fascynuje mnie to, co wciąż pozostaje nieodkryte przez naukę, dlatego zacząłem zgłębianie tajemnic duchowości. Zrozumiałem, że
                        ciało, umysł, emocje i duchowość są integralnymi częściami tego samego systemu. Wierzę, iż poprzez takie podejście można
                        osiągnąć równowagę i prawdziwe spełnienie, zarówno dla siebie, jak i dla innych. To zrozumienie skierowało mnie na
                        poszukiwanie alternatywnych metod uzdrawiania, które nie tylko mają na celu poprawę zdrowia jednostki, ale również przynoszą
                        wiele różnych korzyści. Moje zainteresowania oraz dążenie do pomocy innym opierają się na altruistycznej chęci wspierania w
                        ich dążeniu do harmonii i zdrowia.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={'text-dark-plum w-full sm:w-3/4'}
                    >
                        Jestem absolwentem Studium Edukacji Ekologicznej i Profilaktyki Zdrowia na kierunku Naturopata, gdzie swoją wiedzę
                        potwierdziłem zdając państwowy egzamin czeladniczy w tym zawodzie. Prowadzę działalność w zakresie medycyny tradycyjnej,
                        uzupełniającej i alternatywnej o kodzie PKD 86.96.Z co umożliwia mi jeszcze większe połączenie aspektów fizycznych, mentalnych
                        i duchowych podczas terapii.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={'text-dark-plum w-full sm:w-3/4'}
                    >
                        Jestem od 2016 roku czynnym instruktorem, dzieląc się swoją wiedzą i doświadczeniem. Stale biorę udział w licznych warsztatach
                        i poszerzam moje zrozumienie. Moja przygoda z jogą rozpoczęła się ponad 30 lat temu i od tego czasu stała się ona głęboką
                        pasją i stylem życia. Joga to dla mnie nie tylko zestawy ćwiczeń fizycznych, ale przede wszystkim droga do samopoznania i
                        wewnętrznego spokoju, integrująca ciało, umysł i ducha.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={'text-dark-plum w-full sm:w-3/4'}
                    >
                        Aktualnie pracuję w 5 DPS-ie w Łodzi przeznaczonym dla osób przewlekle psychicznie chorych jako terapeuta zajęciowy, gdzie
                        regularnie stosuję techniki medycyny naturalnej celem polepszenia komfortu życia i samopoczucia podopiecznych.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={'text-dark-plum w-full sm:w-3/4'}
                    >
                        Prowadzę też kanał na You Tube na którym odkrywam tajemnice i sekrety rozwoju duchowego pomocne na drodze do wewnętrznej
                        transformacji.
                    </motion.p>
                    <div>
                        <a href={'https://www.youtube.com/@Cris-YouTube'} target={'_blank'} className={'text-dark-plum underline'}>
                            Link do kanału
                        </a>
                    </div>
                    <h3 className={'text-dark-plum mt-5 font-bold'}>Podczas Zabiegów Używam Terapii Holistycznych:</h3>
                    <ul className={'text-dark-plum list-inside list-disc'}>
                        {[
                            'Dźwiękoterapię misami tybetańskimi i kamertonami czakralnymi - wibracja i delikatna stymulacja dźwiękiem wspierające głęboki relaks, redukcję napięcia oraz harmonizację energii i wewnętrznego dobrostanu',
                            'Bioenergoterapia - technika przywracania równowagi energetycznej organizmu',
                            'Refleksologia - holistyczna terapia stóp i dłoni',
                            'Terapia bańkami ogniowymi – tradycyjna metoda wspierania odporności i regeneracji',
                            'Konchowanie uszu – oczyszczanie, relaks, harmonia',
                            'Akupresura – łagodzenie bólu i napięć przez odpowiedni ucisk punktów na ciele',
                            'Fizjoterapeutyczna Joga - uzdrawiające jogiczne pozycje i medytacje',
                            'Terapia Wyobrażeniami - Wizualizacje Medyczne',
                            'Litoterapia - lecznicza moc kamieni naturalnych',
                            'Aromaterapia - terapia zapachem',
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
                        Skupiam się na całościowym podejściu do zdrowia, łącząc aspekty fizyczne, psychiczne oraz energetyczne. Wszystkie zabiegi mają
                        na celu poprawę dobrostanu człowieka z równoczesnym przyśpieszeniem procesu przywracania sprawności. Dzięki połączeniu tych
                        metod, możesz doświadczyć wielu korzyści, zarówno na poziomie fizycznym, jak i psychicznym. Moje zabiegi są dostępne dla
                        wszystkich potrzebujących. Stanowią one przestrzeń do odkrywania wewnętrznej równowagi i spokoju, oraz są drogą ku
                        wyzdrowieniu i lepszemu samopoczuciu.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={'text-dark-plum mt-5 w-full sm:w-3/4'}
                    >
                        Zapraszam na indywidualną terapię, gdzie wspólnie odkryjemy Twoje potencjały. Moje podejście - jest holistyczne i
                        spersonalizowane, a każde spotkanie to wyjątkowa podróż w głąb Ciebie wraz z możliwością zrozumienia własnych potrzeb i
                        odnalezienia wewnętrznej równowagi. Wspólnie możemy stworzyć przestrzeń, w której Twoje ciało wraz z Twoim umysłem i duchem
                        będą pracowały w harmonii i doprowadzą Cię do zdrowia i wewnętrznego spokoju.
                    </motion.p>
                </div>
                <Button className={'mt-5'} variant={'darkPlum'} asChild>
                    <a href="tel:+48459410096">Skontaktuj się</a>
                </Button>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default AboutKrzysztofSenior;
