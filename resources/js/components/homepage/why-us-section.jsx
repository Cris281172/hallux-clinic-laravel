import { Atom, HeartHandshake, ShieldPlus } from 'lucide-react';
import HeadingHome from '../heading-home.jsx';
import Container from '../page/container.jsx';

const WhyUsSection = () => {
    const whyUsConfig = [
        {
            title: 'Indywidualny Plan i Komfortowa Atmosfera',
            text: 'Każdy pacjent to dla nas unikalna historia. Poświęcamy czas, aby wysłuchać, dokładnie zdiagnozować problem i stworzyć spersonalizowany plan terapii w przyjaznej i bezstresowej atmosferze.',
            Icon: <HeartHandshake size={60} className={'text-electric-romance'} />,
        },
        {
            title: 'Bezpieczeństwo i Najwyższy Standard Higieny',
            text: 'Twoje zdrowie jest dla nas bezcenne. Stosujemy rygorystyczne procedury dezynfekcji, a wszystkie narzędzia sterylizujemy w autoklawie medycznym klasy B. W naszym gabinecie możesz czuć się w pełni bezpiecznie.',
            Icon: <ShieldPlus size={60} className={'text-electric-romance'} />,
        },
        {
            title: 'Nowoczesne Technologie i Terapie',
            text: 'Inwestujemy w najnowszej generacji sprzęt podologiczny i innowacyjne metody leczenia. Dzięki temu nasze zabiegi są precyzyjne, skuteczne i maksymalnie komfortowe, co znacząco skraca czas terapii.',
            Icon: <Atom size={60} className={'text-electric-romance'} />,
        },
    ];
    return (
        <section className={'bg-gray-100 pt-20 pb-20'}>
            <Container>
                <HeadingHome
                    title={'Dlaczego my?'}
                    titleClasName={'text-dark-plum'}
                    text={
                        'W naszym gabinecie każdy pacjent jest traktowany indywidualnie. Łączymy wiedzę, doświadczenie i nowoczesne technologie, by zapewnić Ci skuteczną terapię w atmosferze zaufania, spokoju i troski o każdy szczegół.'
                    }
                />
                <div className={'mt-10 grid grid-cols-1 gap-12 xl:grid-cols-3'}>
                    {whyUsConfig.map((item, index) => (
                        <div key={index} className={'flex flex-col items-center rounded-2xl border-2 p-6 shadow-md md:p-10'}>
                            {item.Icon}
                            <h4 className={'text-dark-plum mt-5 mb-2 text-center text-xl font-bold'}>{item.title}</h4>
                            <p className={'text-dark-plum text-center'}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default WhyUsSection;
