import { usePage } from '@inertiajs/react';
import CategoryFilter from './parts/category-filter.jsx';
import PriceFilter from './parts/price-filter.jsx';

const ProductFilters = ({ categories, parentCategory }) => {
    const { props } = usePage();
    const currentCategory = props.ziggy.location.slice(props.ziggy.location.lastIndexOf('/') + 1);

    const filtersConfig = [
        {
            title: currentCategory !== 'produkty' ? 'Podkategorie' : 'Kategorie',
            component: <CategoryFilter categories={categories} parentCategory={parentCategory} />,
        },
        {
            title: 'Cena',
            component: <PriceFilter />,
        },
    ];
    return (
        <div className={'flex w-1/4 flex-col gap-5'}>
            {filtersConfig.map((item, index) => (
                <div className={'bg-dark-plum rounded-2xl p-5'} key={index}>
                    <h3 className={'mb-2 text-xl font-bold underline'}>{item.title}</h3>
                    {item.component}
                </div>
            ))}
        </div>
    );
};

export default ProductFilters;
