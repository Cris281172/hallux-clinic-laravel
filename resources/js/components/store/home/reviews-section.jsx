import Container from '../../page/container.jsx';
import SectionHeader from './parts/section-header.jsx';

const ReviewsSection = () => {
    return (
        <div className="bg-gray-100 py-20">
            <Container>
                <SectionHeader
                    title={'Opinie naszych klientów'}
                    text={'Opinie naszych klientów są dla nas najlepszym potwierdzeniem jakości produktów i usług, które oferujemy.'}
                />
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-dark-plum mb-4 italic">
                            „Świetne wkładki! Komfort nie do porównania z tym, co miałam wcześniej. Obsługa bardzo profesjonalna i pomocna.”
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-gray-300" />
                            <div>
                                <p className="text-dark-plum font-semibold">Anna K.</p>
                                <p className="text-sm text-gray-500">Pacjentka z Łodzi</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-dark-plum mb-4 italic">
                            „Buty KingMed to najlepszy wybór do pracy w klinice – lekkie, wygodne, a do tego eleganckie. Polecam każdemu medykowi.”
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-gray-300" />
                            <div>
                                <p className="text-dark-plum font-semibold">Marek P.</p>
                                <p className="text-sm text-gray-500">Fizjoterapeuta</p>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                        <p className="text-dark-plum mb-4 italic">
                            „Profesjonalne podejście i świetna jakość. Po wizycie u podologa zamówiłam swoje pierwsze indywidualne wkładki i jestem
                            zachwycona.”
                        </p>
                        <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-gray-300" />
                            <div>
                                <p className="text-dark-plum font-semibold">Katarzyna L.</p>
                                <p className="text-sm text-gray-500">Pacjentka</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ReviewsSection;
