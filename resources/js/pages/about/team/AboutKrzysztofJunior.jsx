import { motion } from 'motion/react';
import krzysztofPhoto from '../../../assets/images/about-us/team/krzysztof-juczynski-junior.jpg';
import SEO from '../../../components/page/SEO.jsx';
import SubpageHeader from '../../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../../components/subpage-layout-container.jsx';
import AppLayout from '../../../layouts/app-layout.jsx';
const AboutKrzysztofJunior = () => {
    const experiences = [
        {
            year: '2021',
            title: 'Frontend Developer – A.G. Development',
            description:
                'Roczna praktyka zawodowa i pierwszy komercyjny projekt związany ze sprzedażą internetową. Tworzenie komponentów, code review, praca w Agile/Scrum, poznanie wzorców projektowych i dobrych praktyk. Technologie: React, Git, Monday, GSAP, SASS.',
        },
        {
            year: '2022 (lipiec-październik)',
            title: 'Frontend Developer – BandIT House',
            description:
                'Budowa nowej aplikacji webowej do inwentaryzacji. Tworzenie aplikacji od podstaw z użyciem Next.js, współpraca w 5-osobowym zespole. Technologie: Next.js, Git, Jira, CSS.',
        },
        {
            year: '2022-2023 (grudzień-kwiecień)',
            title: 'Fullstack Developer – My Box',
            description:
                'Udział w rozwoju aplikacji webowych od strony frontendowej i backendowej. Implementacja nowych modułów, naprawa błędów, optymalizacja kodu, współpraca z zespołem projektowym. Technologie: React, Node, MongoDB, Git, Jira, Tailwind, Bootstrap.',
        },
        {
            year: '2023 (sierpień-obecnie)',
            title: 'Frontend Developer – Broadway Beauty',
            description:
                'Rozwój i utrzymanie istniejących aplikacji webowych w ramach zespołu developerskiego. Rozbudowa funkcjonalności, optymalizacja interfejsu użytkownika, ścisła współpraca z backendem. Technologie: React, Stripe, MUI, Git, Jira, AWS, Google API.',
        },
        {
            year: '2023-obecnie',
            title: 'Freelancer - Fullstack Developer',
            description:
                'Realizacja projektów dla klientów komercyjnych oraz rozwój własnych produktów. Tworzenie aplikacji webowych od podstaw, projektowanie architektury systemów, utrzymanie i rozwój istniejących aplikacji. Technologie: PHP, React, Node, MongoDB, Laravel, MySQL, Git.',
        },
    ];

    return (
        <AppLayout>
            <SEO
                title="O mnie - Krzysztof Juczyński"
                description="Krzysztof Juczyński, frontend i fullstack developer z pasją do nowoczesnych technologii webowych."
                url="/o-mnie"
            />
            <SubpageHeader
                title={'O mnie'}
                text={
                    'Dowiedz się więcej o moim doświadczeniu, kwalifikacjach i pasji do podologii. Profesjonalizm i indywidualne podejście w trosce o zdrowie Twoich stóp.'
                }
            />
            <SubpageLayoutContainer>
                <section className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                    <motion.img
                        src={krzysztofPhoto}
                        className="aspect-square w-40 rounded-lg object-cover shadow-lg sm:w-30"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                    <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-dark-plum text-4xl font-bold">Krzysztof Juczyński</h1>
                        <p className="text-dark-plum mt-3 max-w-lg">
                            Frontend & Fullstack Developer z Łodzi. Specjalizuję się w tworzeniu skalowalnych aplikacji webowych, integracjach z API
                            oraz nowoczesnych interfejsach użytkownika. Ciągle rozwijam swoje kompetencje, uczestnicząc w projektach komercyjnych i
                            open-source.
                        </p>
                    </motion.div>
                </section>

                <section className="mt-12">
                    <h2 className="text-dark-plum mb-6 text-3xl font-semibold">Moja droga zawodowa</h2>
                    <div className="flex flex-col gap-6">
                        {experiences.map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true, amount: 0.3 }}
                                className="rounded-lg bg-gray-50 p-4 shadow-sm"
                            >
                                <h3 className="text-dark-plum text-xl font-bold">
                                    {exp.year} — {exp.title}
                                </h3>
                                <p className="text-dark-plum mt-1">{exp.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="mt-12">
                    <h2 className="text-dark-plum mb-6 text-3xl font-semibold">Moje wartości</h2>
                    <ul className="text-dark-plum max-w-2xl list-inside list-disc space-y-3">
                        <li>Budowanie aplikacji webowych z naciskiem na czytelny i modularny kod.</li>
                        <li>Stosowanie nowoczesnych technologii: React, TypeScript, Node.js, Laravel.</li>
                        <li>Pasja do rozwiązywania problemów i ciągłego doskonalenia umiejętności.</li>
                    </ul>
                </section>

                <section className="mt-12">
                    <h2 className="text-dark-plum mb-6 text-3xl font-semibold">Kontakt</h2>
                    <p className="text-dark-plum max-w-lg">
                        Jeśli chcesz nawiązać współpracę lub porozmawiać o projekcie — możesz mnie znaleźć na{' '}
                        <a href="https://juczynski.work" className="text-plum underline">
                            juczynski.work
                        </a>
                        .
                    </p>
                </section>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default AboutKrzysztofJunior;
