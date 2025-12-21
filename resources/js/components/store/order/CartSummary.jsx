import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { callToApi } from '../../../utils/api/callToApi.js';
import getR2Url from '../../../utils/getR2Url.js';
import getMainProductImage from '../../../utils/store/getMainProductImage.js';
import { Button } from '../../ui/button.tsx';
import ProductPrice from '../product/product-price.jsx';
import PromotionCode from './PromotionCode.jsx';

const FREE_SHIPPING_THRESHOLD = 1000;

const CartSummary = ({ cart, currentShippingMethodID, setCodePromotionID }) => {
    const [codePromotionPrice, setCodePromotionPrice] = useState(null);
    const [selectedShippingMethod, setSelectedShippingMethod] = useState(null);

    const fetchSelectedShippingMethod = async () => {
        const response = await callToApi({
            url: route('api.store.shipping-methods.get', currentShippingMethodID),
            method: 'get',
        });
        if (response.success) setSelectedShippingMethod(response.data);
    };

    useEffect(() => {
        fetchSelectedShippingMethod();
    }, [currentShippingMethodID]);

    const subTotal = Number(cart?.grandTotal || 0);
    const shippingCost = cart?.freeShippingApplied ? 0 : Number(selectedShippingMethod?.price || 0);
    const missingToFree = Math.max(0, FREE_SHIPPING_THRESHOLD - subTotal);

    return (
        <div className="sticky top-[104px] w-3/10 self-start">
            <h4 className="text-dark-plum mb-4 text-xl font-bold">Podsumowanie koszyka</h4>

            <div className="mb-6 rounded-lg bg-gray-100 p-4 shadow-sm">
                <div className={'mb-2'}>
                    {codePromotionPrice ? (
                        <div className={'flex w-full justify-end'}>
                            <Button onClick={() => setCodePromotionPrice(null)}>Usuń kod rabatowy</Button>
                        </div>
                    ) : (
                        <PromotionCode setCodePromotionPrice={setCodePromotionPrice} setCodePromotionID={setCodePromotionID} />
                    )}
                </div>

                <div className="text-md mb-2 flex justify-between text-black">
                    <span>Wartość produktów:</span>
                    <span className="font-semibold">{subTotal.toFixed(2)} zł</span>
                </div>

                {codePromotionPrice && (
                    <div className="text-md mb-2 flex justify-between text-black">
                        <span>Wartość produktów po obniżce:</span>
                        <span className="font-semibold">{codePromotionPrice.toFixed(2)} zł</span>
                    </div>
                )}

                <div className="text-md flex justify-between text-black">
                    <span>Wysyłka:</span>
                    <span className="font-semibold">{cart?.freeShippingApplied ? 'Darmowa' : `${shippingCost.toFixed(2)} zł`}</span>
                </div>

                {!cart?.freeShippingApplied && missingToFree > 0 && (
                    <p className="bg-dark-plum mt-3 rounded-md p-2 text-center text-sm font-medium text-white">
                        Do darmowej przesyłki brakuje jeszcze: <strong>{missingToFree.toFixed(2)} zł</strong>
                    </p>
                )}
            </div>

            {cart?.products?.map((product, index) => (
                <div key={index} className="relative mb-5 rounded-lg bg-gray-100 p-4 shadow-sm">
                    <div className="flex gap-3">
                        <Link href={route('store.product', { slug: product.item.slug })} className="aspect-square w-1/4">
                            <img
                                className="h-full w-full rounded object-cover"
                                src={getR2Url(getMainProductImage(product.item.images))}
                                alt={product.item.name}
                            />
                        </Link>

                        <div className="flex flex-col items-start">
                            <Link href={route('store.product', { slug: product.item.slug })}>
                                <h4 className="text-dark-plum text-lg font-semibold hover:underline">{product.item.name}</h4>
                            </Link>

                            <ProductPrice price={product.item.price} promotion={product.item.promotion_active} />

                            {product.quantity && <p className="text-sm text-black">Ilość: {product.quantity}</p>}

                            {product.variant_value && <p className="text-sm text-black">Rozmiar: {product.variant_value.value}</p>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartSummary;
