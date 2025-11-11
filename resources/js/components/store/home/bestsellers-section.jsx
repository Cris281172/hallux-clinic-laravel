import React from 'react';
import Container from '../../page/container.jsx';
import ProductCard from '../product/product-card.jsx';

const BestsellersSection = ({ products }) => {
    return (
        <div className={'bg-gray-100 py-20'}>
            <Container>
                <div className={'mb-10 flex w-full flex-col items-center'}>
                    <div className={'flex justify-center'}>
                        <h2 className={'text-dark-plum border-b-4 border-[#F7AACBFF] pb-2 text-center text-4xl font-medium sm:text-5xl'}>
                            Bestsellery
                        </h2>
                    </div>
                    <p className={'text-dark-plum mt-2 max-w-200 text-center'}>Wybierz kategorię produktów dopasowanych do Twoich potrzeb</p>
                </div>
                <div className={'grid grid-cols-3 gap-10'}>
                    {products.map((product, index) => (
                        <React.Fragment key={index}>
                            <ProductCard product={product} />
                        </React.Fragment>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default BestsellersSection;
