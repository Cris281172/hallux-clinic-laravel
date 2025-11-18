import { Link } from '@inertiajs/react';
import getR2Url from '../../../utils/getR2Url.js';
import getMainProductImage from '../../../utils/store/getMainProductImage.js';
import ProductPrice from './product-price.jsx';

const ProductCard = ({ product }) => {
    return (
        <div className={'relative rounded-2xl bg-white'}>
            <Link href={route('store.product', { slug: product.slug })} className={'rounded-2xl bg-white'}>
                <img className={'aspect-square rounded-t-2xl object-fill'} src={getR2Url(getMainProductImage(product.images))} />
                <div className={'m-5'}>
                    <h2 className={'text-dark-plum'}>{product.name}</h2>
                    <ProductPrice price={product.price} promotion={product.promotion_active} />
                    <div>
                        {product.categories.map((category, index) => (
                            <p className={'text-xs font-thin text-black'} key={index}>
                                {category.name}
                            </p>
                        ))}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
