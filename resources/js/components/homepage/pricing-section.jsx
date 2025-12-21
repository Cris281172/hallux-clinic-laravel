import { Link } from '@inertiajs/react';
import { homePrices } from '../../config/configPrice.js';
import HeadingHome from '../heading-home.jsx';
import Container from '../page/container.jsx';
import PricesAccordion from '../prices-accordion.jsx';
import { Button } from '../ui/button.tsx';

const PricingSection = () => {
    return (
        <section className={'bg-gray-100 pt-20 pb-20'}>
            <Container>
                <HeadingHome
                    title={'Cennik'}
                    titleClasName={'text-dark-plum'}
                    text={
                        'Transparentność i uczciwość to podstawa zaufania. Zapoznaj się z naszym aktualnym cennikiem zabiegów podologicznych – wybierz usługę dopasowaną do swoich potrzeb i zainwestuj w zdrowie swoich stóp.'
                    }
                />
                <PricesAccordion data={homePrices} />
                <div className={'flex justify-center'}>
                    <Button size={'lg'} asChild variant={'darkPlum'} className={'mt-10'}>
                        <Link href={route('price-list')}>Poznaj wszystkie ceny</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default PricingSection;
