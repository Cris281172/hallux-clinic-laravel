import { Link } from '@inertiajs/react';
import insolesCategoryImage from '../../../assets/images/store/homepage/insoles-category.webp';
import shoesCategoryImage from '../../../assets/images/store/homepage/shoes-category.jpg';
import Container from '../../page/container.jsx';
import SectionHeader from './parts/section-header.jsx';

const CategoriesSection = () => {
    return (
        <div className={'bg-gray-200 pt-20 pb-20'}>
            <Container>
                <SectionHeader title={'Nasze kategorie'} text={'Wybierz kategorię produktów dopasowanych do Twoich potrzeb'} />

                <div className={'mt-10 grid grid-cols-3 gap-10'}>
                    <Link
                        href={'/'}
                        className="bg-dark-plum group relative bottom-0 overflow-hidden rounded-2xl border-1 transition-all hover:bottom-3 hover:shadow-2xl"
                    >
                        <div className="aspect-[12/9] overflow-hidden">
                            <img className="h-full object-cover transition-transform duration-300 group-hover:scale-105" src={insolesCategoryImage} />
                        </div>
                        <div className="p-5">
                            <h3 className="text-2xl">Wkładki</h3>
                            <p>Indywidualne wkładki ortopedyczne dopasowane do Twoich potrzeb</p>
                        </div>
                    </Link>
                    <Link
                        href={'/'}
                        className="bg-dark-plum group relative bottom-0 overflow-hidden rounded-2xl border-1 transition-all hover:bottom-3 hover:shadow-2xl"
                    >
                        <div className="aspect-[12/9] overflow-hidden">
                            <img className="h-full object-cover transition-transform duration-300 group-hover:scale-105" src={shoesCategoryImage} />
                        </div>
                        <div className="p-5">
                            <h3 className="text-2xl">Wkładki</h3>
                            <p>Indywidualne wkładki ortopedyczne dopasowane do Twoich potrzeb</p>
                        </div>
                    </Link>
                </div>
            </Container>
        </div>
    );
};

export default CategoriesSection;
