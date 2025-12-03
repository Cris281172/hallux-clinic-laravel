import { Link } from '@inertiajs/react';
import { BadgeInfo } from 'lucide-react';
import Container from '../page/container.jsx';
import { Badge } from '../ui/badge.tsx';
import { Button } from '../ui/button.tsx';

const ManicureSection = () => {
    return (
        <section className="bg-dark-plum py-16 text-center text-white">
            <Container>
                <Badge variant="destructive" className={'mb-5 px-3 py-1'}>
                    <BadgeInfo />
                    Nowość!
                </Badge>
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Zadbaj o swoje paznokcie – manicure w Hallux Clinic</h2>
                <p className="mx-auto mb-8 max-w-xl text-lg">
                    Oferujemy profesjonalny manicure, który nada Twoim dłoniom piękny i zadbany wygląd. Wybierz spośród klasycznego, hybrydowego lub
                    pielęgnacyjnego manicure i poczuj się wyjątkowo!
                </p>
                <Button size={'lg'}>
                    <Link href={'/'}>Zobacz ofertę gabinetu</Link>
                </Button>
            </Container>
        </section>
    );
};

export default ManicureSection;
