import { Link } from '@inertiajs/react';
import Container from '../../page/container.jsx';
import SectionHeader from './parts/section-header.jsx';

const TipsNewsSection = () => {
    return (
        <div className="bg-gray-100 py-20">
            <Container>
                <SectionHeader
                    title={'Porady i aktualności'}
                    text={'Sprawdź nasze artykuły o zdrowiu stóp, pielęgnacji i nowościach ze świata podologii.'}
                />
                <div className="grid gap-8 md:grid-cols-3">
                    {[1, 2, 3].map((_, i) => (
                        <div key={i} className="rounded-2xl bg-white p-6 shadow transition hover:-translate-y-1">
                            <div className="mb-4 aspect-[16/9] rounded-xl bg-gray-300" />
                            <h3 className="text-dark-plum mb-2 text-xl font-semibold">Tytuł wpisu blogowego</h3>
                            <p className="text-dark-plum mb-4">Krótki opis wpisu – np. o tym, jak dobrać idealne wkładki ortopedyczne.</p>
                            <Link href="/blog" className="font-medium text-purple-700 hover:underline">
                                Czytaj więcej →
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default TipsNewsSection;
