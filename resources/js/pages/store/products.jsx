import { usePage } from '@inertiajs/react';
import React from 'react';
import subpageHeader4 from '../../assets/images/subpage-header/subpage-header-4.jpg';
import AppPagination from '../../components/app-pagination.jsx';
import ProductFilters from '../../components/store/filters/product-filters.jsx';
import ProductCard from '../../components/store/product/product-card.jsx';
import SubpageHeader from '../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../components/subpage-layout-container.jsx';
import StoreLayout from '../../layouts/store-layout.jsx';

const Products = ({ products, categories, parentCategory }) => {
    const { props } = usePage();

    const currentCategory = props.ziggy.location.slice(props.ziggy.location.lastIndexOf('/') + 1);

    return (
        <StoreLayout>
            <SubpageHeader
                title={currentCategory ? currentCategory : 'Sklep internetowy'}
                background={subpageHeader4}
                text={'Praktyczne porady, nowinki i ekspercka wiedza ze świata podologii. Sprawdź nasze artykuły o zdrowiu stóp!'}
            />
            <SubpageLayoutContainer>
                <div className={'flex gap-10'}>
                    <ProductFilters categories={categories} parentCategory={parentCategory} />
                    <div className={'grid w-3/4 grid-cols-3 gap-10'}>
                        {products.data.map((product, index) => (
                            <React.Fragment key={index}>
                                <ProductCard product={product} />
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                <AppPagination
                    currentPage={products.current_page}
                    lastPage={products.last_page}
                    url={props.ziggy.location.split(props.ziggy.url)[1]}
                />
            </SubpageLayoutContainer>
        </StoreLayout>
    );
};

export default Products;
