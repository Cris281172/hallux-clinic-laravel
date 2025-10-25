import { Link } from '@inertiajs/react';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import getR2Url from '../../../utils/getR2Url.js';
import addProductToCart from '../../../utils/store/addProductToCart.js';
import getMainProductImage from '../../../utils/store/getMainProductImage.js';
import { Button } from '../../ui/button.js';

const ProductCard = ({ product }) => {
    const addToCart = (e, id) => {
        e.preventDefault();
        e.stopPropagation();

        addProductToCart(id, 1);
        window.dispatchEvent(new Event('cartUpdated'));

        toast.success('Produkt został dodany do koszyka.');
    };

    return (
        <div className={'relative rounded-2xl bg-white'}>
            <Link href={route('store.product', { slug: product.slug })} className={'rounded-2xl bg-white'}>
                <img className={'aspect-square rounded-t-2xl object-cover'} src={getR2Url(getMainProductImage(product.images))} />
                <div className={'m-5'}>
                    <h2 className={'text-dark-plum'}>{product.name}</h2>
                    <p className={'text-dark-plum text-lg font-bold'}>{product.price} zł</p>
                    <div>
                        {product.categories.map((category, index) => (
                            <p className={'text-xs font-thin text-black'} key={index}>
                                {category.name}
                            </p>
                        ))}
                    </div>
                    <Button onClick={(e) => addToCart(e, product.id)} className={'mt-2 w-full cursor-pointer'} variant={'darkPlum'}>
                        Dodaj do koszyka
                        <ShoppingCart />
                    </Button>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;
