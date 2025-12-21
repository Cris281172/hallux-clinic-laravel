import { Link } from '@inertiajs/react';
import insolesOurProductImage from '../../../assets/images/store/homepage/our-products/insoles.png';
import shoesOurProductImage from '../../../assets/images/store/homepage/our-products/shoes.webp';
import Container from '../../page/container.jsx';
import { Button } from '../../ui/button.tsx';
import SectionHeader from './parts/section-header.jsx';

const OurProductsSection = () => {
    return (
        <div className="bg-white py-20">
            <Container>
                <SectionHeader
                    title={'Poznaj nasze produkty'}
                    text={
                        'Współpracujemy z renomowanymi producentami wkładek ortopedycznych i obuwia medycznego. Nasze produkty są dokładnie testowane i dopasowywane do indywidualnych potrzeb klientów.'
                    }
                />
                <div className="mb-20 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                    <img src={insolesOurProductImage} alt="Wkładki ortopedyczne" className="rounded-2xl object-cover shadow-lg" />
                    <div>
                        <h2 className="text-dark-plum mb-4 text-3xl font-semibold">Wkładki ortopedyczne Kingmed</h2>
                        <p className="text-dark-plum mb-6">
                            Indywidualnie dopasowane wkładki od firmy MyPaps zapewniają odpowiednie podparcie łuku stopy, amortyzację i komfort
                            codziennego użytkowania. Idealne dla osób aktywnych oraz z problemami ortopedycznymi.
                        </p>
                        <Button variant={'darkPlum'} size={'lg'} asChild={true}>
                            <Link href="/kategoria/wkladki">Zobacz produkty</Link>
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:flex-row-reverse">
                    <div className="order-2 md:order-1">
                        <h3 className="text-dark-plum mb-4 text-3xl font-semibold">Obuwie medyczne MyPaps</h3>
                        <p className="text-dark-plum mb-6">
                            Wysokiej jakości obuwie medyczne stworzone z myślą o komforcie i bezpieczeństwie pracy. Idealne dla personelu medycznego i
                            osób spędzających długie godziny na nogach.
                        </p>
                        <Button variant={'darkPlum'} size={'lg'} asChild={true}>
                            <Link href="/kategoria/wkladki">Zobacz produkty</Link>
                        </Button>
                    </div>
                    <img src={shoesOurProductImage} alt="Obuwie medyczne" className="order-1 rounded-2xl object-cover shadow-lg md:order-2" />
                </div>
            </Container>
        </div>
    );
};

export default OurProductsSection;
