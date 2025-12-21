import Container from '../../page/container.jsx';
import SectionHeader from './parts/section-header.jsx';

const WhyUsSection = () => {
    return (
        <div className="bg-white py-20">
            <Container>
                <SectionHeader title={'Dlaczego warto wybrać nas?'} />

                <div className="text-dark-plum grid grid-cols-1 gap-8 text-center md:grid-cols-4">
                    <div>
                        <div className="mb-3 text-5xl">👣</div>
                        <h3 className="mb-2 text-xl font-semibold">Indywidualne dopasowanie</h3>
                        <p>Każdy produkt dopasowujemy do potrzeb Twoich stóp.</p>
                    </div>
                    <div>
                        <div className="mb-3 text-5xl">⚕️</div>
                        <h3 className="mb-2 text-xl font-semibold">Wiedza podologiczna</h3>
                        <p>Współpracujemy z doświadczonymi podologami i fizjoterapeutami.</p>
                    </div>
                    <div>
                        <div className="mb-3 text-5xl">💬</div>
                        <h3 className="mb-2 text-xl font-semibold">Doradztwo i wsparcie</h3>
                        <p>Pomożemy Ci dobrać wkładki, obuwie i akcesoria.</p>
                    </div>
                    <div>
                        <div className="mb-3 text-5xl">🚚</div>
                        <h3 className="mb-2 text-xl font-semibold">Szybka wysyłka</h3>
                        <p>Większość zamówień realizujemy w 24–48 godzin.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default WhyUsSection;
