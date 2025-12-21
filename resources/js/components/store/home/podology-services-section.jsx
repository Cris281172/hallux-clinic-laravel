import { Link } from '@inertiajs/react';
import Container from '../../page/container.jsx';

const PodologyServicesSection = () => {
    return (
        <div className="bg-dark-plum py-16 text-center text-white">
            <Container>
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Potrzebujesz usług podologa?</h2>
                <p className="mx-auto mb-8 max-w-xl text-lg">
                    Umów wizytę w naszym gabinecie podologicznym w Łodzi i skorzystaj z profesjonalnej diagnozy oraz indywidualnego doboru wkładek.
                </p>
                <Link href="/" className="text-dark-plum rounded-xl bg-white px-8 py-4 font-medium transition hover:bg-gray-100">
                    Zobacz ofertę gabinetu
                </Link>
            </Container>
        </div>
    );
};

export default PodologyServicesSection;
