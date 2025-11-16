import { Link, usePage } from '@inertiajs/react';
import Cookies from 'js-cookie';
import { Minus, Plus, ShoppingCart, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { callToApi } from '../../../utils/api/callToApi.js';
import getR2Url from '../../../utils/getR2Url.js';
import getMainProductImage from '../../../utils/store/getMainProductImage.js';
import { Badge } from '../../ui/badge.js';
import { Button } from '../../ui/button.js';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet.js';
import ProductPrice from '../product/product-price.jsx';

const CartSheet = () => {
    const { props } = usePage();
    const [open, setOpen] = useState(false);

    let storageCart = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [];

    const [cartProducts, setCartProducts] = useState([]);

    const fetchCartProducts = async () => {
        const dataToSend = props.auth.user ? {} : storageCart;
        const response = await callToApi({
            url: route('api.store.cart.get.products'),
            method: 'post',
            data: dataToSend,
        });
        setCartProducts(response.products);
    };

    useEffect(() => {
        if (open) {
            fetchCartProducts();
        }
    }, [open]);

    const changeQuantityValue = async (id, type, variant) => {
        if (props.auth.user) {
            const response = await callToApi({
                url: route('api.store.cart.update'),
                method: 'post',
                data: { id, type, variant_id: variant },
            });

            if (response.success) {
                setCartProducts(response.products);
            }
        } else {
            let updatedCart = cartProducts.map((el) => {
                if (el.id === id && el.variant_value?.id === variant) {
                    if (type === 'add') return { ...el, quantity: el.quantity + 1 };
                    if (type === 'remove') return { ...el, quantity: el.quantity - 1 };
                }
                return el;
            });

            updatedCart = updatedCart.filter((el) => el.quantity > 0);

            setCartProducts(updatedCart);
            Cookies.set('cart', JSON.stringify(updatedCart.map((item) => ({ id: item.id, quantity: item.quantity, variant: item.variant }))));
        }
    };

    return (
        <Sheet open={open} onOpenChange={(value) => setOpen(value)}>
            <SheetTrigger asChild>
                <Button variant={'ghost'} className={'relative'}>
                    <ShoppingCart />
                    <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full px-1">{storageCart?.length}</Badge>
                </Button>
            </SheetTrigger>
            <SheetContent style={{ maxWidth: '500px' }} className={'bg-gray-100'}>
                <SheetHeader>
                    <SheetTitle className={'text-dark-plum'}>Koszyk</SheetTitle>
                </SheetHeader>
                <div className="ml-5 flex flex-col overflow-y-scroll pr-5">
                    {cartProducts.map((product, index) => (
                        <div className={'relative mb-5 rounded-2xl border-2 border-pink-200 p-4'}>
                            <div key={index} className={'flex gap-3'}>
                                <Link href={route('store.product', { slug: product.item.slug })} className={'aspect-square w-1/4'}>
                                    <img className={'h-full object-fill'} src={getR2Url(getMainProductImage(product.item.images))} />
                                </Link>
                                <div className={'flex flex-col items-start'}>
                                    <Link href={route('store.product', { slug: product.item.slug })}>
                                        <h4 className={'text-dark-plum text-lg font-bold'}>{product.item.name}</h4>
                                    </Link>
                                    <p className={'text-md text-black'}>{product.item.price * product.quantity} zł</p>
                                    {product.quantity > 1 && (
                                        <div className={'flex items-center text-black'}>
                                            <span>za sztukę</span>
                                            <ProductPrice
                                                finalPriceClassName={'ml-1 !font-light text-md'}
                                                price={product.item.price}
                                                promotions={product.item.promotions_active}
                                                showPrevPrice={false}
                                            />
                                        </div>
                                    )}

                                    {product.variant_value && <p className={'text-sm text-black'}>Rozmiar: {product.variant_value.value}</p>}
                                </div>
                            </div>
                            <div className={'mt-3 flex'}>
                                <div className={'bg-dark-plum flex rounded-full p-0.5'}>
                                    <Button
                                        className={'rounded-2xl'}
                                        variant={'ghost'}
                                        size={'sm'}
                                        onClick={() => changeQuantityValue(product.item.id, 'remove', product.variant_value?.id)}
                                    >
                                        {product.quantity > 1 ? <Minus /> : <Trash size={5} />}
                                    </Button>
                                    <div className={'flex w-7 items-center justify-center'}>{product.quantity}</div>
                                    <Button
                                        className={'rounded-2xl'}
                                        variant={'ghost'}
                                        size={'sm'}
                                        onClick={() => changeQuantityValue(product.item.id, 'add', product.variant_value?.id)}
                                    >
                                        <Plus />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <SheetFooter>
                    {/*<Button type="submit">Save changes</Button>*/}
                    <SheetClose asChild>
                        <Button variant="outline" asChild>
                            <Link href={route('store.order.get.view')}>Złóż zamówienie</Link>
                        </Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default CartSheet;
