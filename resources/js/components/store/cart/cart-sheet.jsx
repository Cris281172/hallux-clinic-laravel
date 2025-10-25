import Cookies from 'js-cookie';
import { Minus, Plus, ShoppingCart, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { callToApi } from '../../../utils/api/callToApi.js';
import getR2Url from '../../../utils/getR2Url.js';
import getMainProductImage from '../../../utils/store/getMainProductImage.js';
import { Badge } from '../../ui/badge.js';
import { Button } from '../../ui/button.js';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../../ui/sheet.js';

const CartSheet = () => {
    const [open, setOpen] = useState(false);

    let storageCart = Cookies.get('cart') ? JSON.parse(Cookies.get('cart')) : [];

    const [cartProducts, setCartProducts] = useState([]);

    const fetchCartProducts = async () => {
        const response = await callToApi({ url: route('api.store.cart.get.products'), method: 'post', data: storageCart });
        setCartProducts(response.products);
    };

    useEffect(() => {
        if (open) {
            fetchCartProducts();
        }
    }, [open]);

    const changeQuantityValue = (id, type) => {
        let updatedCart = cartProducts.map((el) => {
            if (el.id === id) {
                if (type === 'add') return { ...el, quantity: el.quantity + 1 };
                if (type === 'remove') return { ...el, quantity: el.quantity - 1 };
            }
            return el;
        });

        if (type === 'delete') {
            updatedCart = updatedCart.filter((el) => el.id !== id);
        } else {
            updatedCart = updatedCart.filter((el) => el.quantity > 0);
        }

        setCartProducts(updatedCart);

        Cookies.set('cart', JSON.stringify(updatedCart.map(({ id, quantity }) => ({ id, quantity }))));
    };

    return (
        <Sheet open={open} onOpenChange={(value) => setOpen(value)}>
            <SheetTrigger asChild>
                <Button variant={'ghost'} className={'relative'}>
                    <ShoppingCart />
                    <Badge className="absolute -top-1 -right-1 h-4 w-4 rounded-full px-1">{storageCart?.length}</Badge>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Koszyk</SheetTitle>
                </SheetHeader>
                <div className="ml-5 flex flex-col gap-5 overflow-y-scroll pr-5">
                    {cartProducts.map((product, index) => (
                        <div>
                            <div key={index} className={'flex gap-2'}>
                                <img className={'aspect-square w-1/4 object-cover'} src={getR2Url(getMainProductImage(product.images))} />
                                <div className={'flex flex-col items-start'}>
                                    <h4>{product.name}</h4>
                                    <div className={'mt-2 flex'}>
                                        <div className={'flex border-1'}>
                                            <Button variant={'ghost'} size={'sm'} onClick={() => changeQuantityValue(product.id, 'remove')}>
                                                <Minus />
                                            </Button>
                                            <div className={'bg-dark-plum flex aspect-square h-full items-center justify-center'}>
                                                {product.quantity}
                                            </div>
                                            <Button variant={'ghost'} size={'sm'} onClick={() => changeQuantityValue(product.id, 'add')}>
                                                <Plus />
                                            </Button>
                                            <Button
                                                className={'bg-dark-plum-secondary'}
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => changeQuantityValue(product.id, 'delete')}
                                            >
                                                <Trash size={5} />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'flex flex-col items-end'}>
                                <p>{product.price * product.quantity} zł</p>
                                <p>{product.price} zł za sztukę</p>
                            </div>
                        </div>
                    ))}
                </div>
                <SheetFooter>
                    <Button type="submit">Save changes</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default CartSheet;
