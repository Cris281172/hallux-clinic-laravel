import { Link } from '@inertiajs/react';
import { configFAQ } from '../../config/configFAQ.js';
import HeadingHome from '../heading-home.jsx';
import Container from '../page/container.jsx';
import { FAQ } from '../page/faq.jsx';
import { Button } from '../ui/button.tsx';

const FaqSection = () => {
    return (
        <section className={'bg-gray-200'}>
            <Container className={'pt-20 pb-20'}>
                <HeadingHome
                    title={'Najczęściej zadawane pytania'}
                    text={
                        'Masz wątpliwości przed wizytą? Zebraliśmy odpowiedzi na najczęstsze pytania dotyczące zabiegów, przygotowania do terapii i pielęgnacji stóp po wizycie.'
                    }
                    titleClasName={'text-dark-plum'}
                />

                <FAQ data={configFAQ.slice(0, 4)} />
                <div className={'flex justify-center'}>
                    <Button asChild className={'mt-10'} variant={'darkPlum'} size={'lg'}>
                        <Link href={route('faq')}>Zobacz więcej</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default FaqSection;
