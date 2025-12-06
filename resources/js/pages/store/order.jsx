import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import Account, { AccountSummary } from '../../components/store/order/Account.jsx';
import CartSummary from '../../components/store/order/CartSummary.jsx';
import DeliveryData, { DeliveryDataSummary } from '../../components/store/order/DeliveryData.jsx';
import DeliveryType, { DeliveryTypeSummary } from '../../components/store/order/DeliveryType.jsx';
import SubpageHeader from '../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../components/subpage-layout-container.jsx';
import { Button } from '../../components/ui/button.tsx';
import StoreLayout from '../../layouts/store-layout.jsx';
import { callToApi } from '../../utils/api/callToApi.js';

const Order = ({ deliveryDetails, account, availableShippingMethod, shippingMethod }) => {
    const { props } = usePage();
    const [cart, setCart] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [currentShippingMethodID, setCurrentShippingMethodID] = useState(shippingMethod?.shippingMethodID ?? null);
    const [codePromotionID, setCodePromotionID] = useState(null);
    console.log(codePromotionID);
    const fetchCartProducts = async () => {
        const response = await callToApi({
            url: route('api.store.cart.get.products'),
            method: 'post',
        });
        setCart(response);
    };

    useEffect(() => {
        fetchCartProducts();
    }, []);

    const stepsConfig = [
        {
            step: 1,
            title: 'Konto',
            component: <Account setCurrentStep={setCurrentStep} account={account} />,
            summary: <AccountSummary account={account} setCurrentStep={setCurrentStep} />,
        },
        {
            step: 2,
            title: 'Dane dostawy',
            component: <DeliveryData setCurrentStep={setCurrentStep} deliveryDetails={deliveryDetails} />,
            summary: <DeliveryDataSummary deliveryDetails={deliveryDetails} setCurrentStep={setCurrentStep} />,
        },
        {
            step: 3,
            title: 'Sposób dostawy',
            component: (
                <DeliveryType
                    setCurrentStep={setCurrentStep}
                    availableShippingMethod={availableShippingMethod}
                    shippingMethod={shippingMethod}
                    setCurrentShippingMethodID={setCurrentShippingMethodID}
                    cart={cart}
                />
            ),
            summary: (
                <DeliveryTypeSummary
                    availableShippingMethod={availableShippingMethod}
                    shippingMethod={shippingMethod}
                    setCurrentStep={setCurrentStep}
                />
            ),
        },
    ];

    const handleGoPayment = () => {
        Inertia.post(route('store.order.create'));
    };

    return (
        <StoreLayout>
            <SubpageHeader
                title={'Zamówienie'}
                text={'Praktyczne porady, nowinki i ekspercka wiedza ze świata podologii. Sprawdź nasze artykuły o zdrowiu stóp!'}
            />
            <SubpageLayoutContainer>
                {cart && cart.products.length !== 0 ? (
                    <>
                        <div className={'flex gap-15'}>
                            <div className={'flex w-7/10 flex-col'}>
                                <h4 className={'text-dark-plum mb-1 text-lg font-bold'}>
                                    Krok {currentStep} z {stepsConfig.length}
                                </h4>
                                <div className={'flex flex-col gap-5'}>
                                    {stepsConfig.map((step, index) => (
                                        <div className={''}>
                                            <div className={'flex flex-col rounded-2xl border-1 border-[#530236] bg-gray-100 p-4'}>
                                                <span className="text-dark-plum relative flex items-center gap-3 text-xl font-bold">
                                                    <span
                                                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                                                            currentStep === step.step
                                                                ? 'bg-dark-plum border-dark-plum animate-pulse'
                                                                : currentStep > step.step
                                                                  ? 'scale-110 border-green-600 bg-green-600 text-white'
                                                                  : 'border-dark-plum/40'
                                                        }`}
                                                        style={currentStep === step.step ? { animationDuration: '2500ms' } : {}}
                                                    >
                                                        {currentStep > step.step && <Check />}
                                                    </span>

                                                    {step.title}
                                                </span>

                                                {currentStep > step.step && (
                                                    <div
                                                        className={`overflow-hidden transition-all duration-300 duration-500 ease-in-out ${currentStep > step.step ? 'opacity-100' : 'max-h-0 opacity-0'} `}
                                                    >
                                                        {step.summary}
                                                    </div>
                                                )}
                                                {currentStep === step.step && (
                                                    <div
                                                        className={`overflow-hidden transition-all duration-300 duration-500 ease-in-out ${currentStep === step.step ? 'opacity-100' : 'max-h-0 opacity-0'} `}
                                                    >
                                                        {step.component}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <CartSummary cart={cart} currentShippingMethodID={currentShippingMethodID} setCodePromotionID={setCodePromotionID} />
                        </div>
                        {currentStep === 4 && (
                            <Button type={'button'} onClick={handleGoPayment} size={'lg'} className={'mt-10 w-full'} variant={'darkPlum'}>
                                Zapłać
                            </Button>
                        )}
                    </>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                        <h3 className="text-dark-plum text-2xl font-bold">Twój koszyk jest pusty</h3>
                        <p className="text-gray-600">Dodaj przedmioty do koszyka, aby móc złożyć zamówienie.</p>
                        <Button size="lg" variant="darkPlum" onClick={() => Inertia.get(route('store.products'))}>
                            Dodaj przedmioty do koszyka
                        </Button>
                    </div>
                )}
            </SubpageLayoutContainer>
        </StoreLayout>
    );
};

export default Order;
