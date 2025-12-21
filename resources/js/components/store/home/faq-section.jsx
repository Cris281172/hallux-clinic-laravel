import Container from '../../page/container.jsx';
import SectionHeader from './parts/section-header.jsx';

const FaqSection = () => {
    return (
        <div className="bg-white py-20">
            <Container>
                <SectionHeader
                    title={'Najczęściej zadawane pytania'}
                    text={'Masz pytania dotyczące produktów lub usług podologicznych? Skontaktuj się z nami — chętnie pomożemy!'}
                />

                <div className="mx-auto max-w-3xl space-y-6">
                    <details className="rounded-xl bg-gray-100 p-4">
                        <summary className="text-dark-plum cursor-pointer font-semibold">Czy mogę zamówić wkładki na wymiar?</summary>
                        <p className="text-dark-plum mt-2">Tak, wykonujemy indywidualne wkładki po konsultacji podologicznej w naszym gabinecie.</p>
                    </details>
                    <details className="rounded-xl bg-gray-100 p-4">
                        <summary className="text-dark-plum cursor-pointer font-semibold">Jak długo trwa realizacja zamówienia?</summary>
                        <p className="text-dark-plum mt-2">Zazwyczaj 1–2 dni robocze dla produktów dostępnych w magazynie.</p>
                    </details>
                    <details className="rounded-xl bg-gray-100 p-4">
                        <summary className="text-dark-plum cursor-pointer font-semibold">Czy mogę odebrać zamówienie osobiście?</summary>
                        <p className="text-dark-plum mt-2">Tak, zapraszamy do naszego gabinetu w Łodzi po wcześniejszym umówieniu terminu.</p>
                    </details>
                </div>
            </Container>
        </div>
    );
};

export default FaqSection;
