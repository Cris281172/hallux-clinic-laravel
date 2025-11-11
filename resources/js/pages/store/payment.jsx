import subpageHeader4 from '../../assets/images/subpage-header/subpage-header-4.jpg';
import CartSummary from '../../components/store/order/CartSummary.jsx';
import SubpageHeader from '../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../components/subpage-layout-container.jsx';
import { Button } from '../../components/ui/button.tsx';
import StoreLayout from '../../layouts/store-layout.jsx';

const Payment = ({ order }) => {
    console.log(order);
    const handlePayment = () => {
        // Tu wstawisz Stripe PaymentElement submit
        console.log('Stripe payment submit');
    };

    return (
        <StoreLayout>
            <SubpageHeader title={'Płatność'} background={subpageHeader4} text={'Potwierdź i opłać zamówienie'} />

            <SubpageLayoutContainer>
                <div className="flex gap-15">
                    {/* SEK CJA PŁATNOŚCI */}
                    <div className="flex w-7/10 flex-col gap-6">
                        <h3 className="text-dark-plum text-2xl font-bold">Numer zamówienia: {order.uuid}</h3>

                        {/* DANE KLIENTA */}
                        <div className="rounded-xl border border-[#530236] bg-gray-100 p-5">
                            <h4 className="text-dark-plum mb-2 text-lg font-bold">Dane klienta</h4>
                            <p className="text-black">
                                {deliveryDetails.name} {deliveryDetails.surname}
                            </p>
                            <p className="text-black">{order.email}</p>
                            <p className="text-black">
                                {deliveryDetails.addressLine1}
                                {deliveryDetails.addressLine2 && `, ${deliveryDetails.addressLine2}`}
                            </p>
                            <p className="text-black">
                                {deliveryDetails.zipCode} {deliveryDetails.city}
                            </p>
                            <p className="text-black">{deliveryDetails.phone}</p>
                        </div>

                        {/* DOSTAWA */}
                        <div className="rounded-xl border border-[#530236] bg-gray-100 p-5">
                            <h4 className="text-dark-plum mb-2 text-lg font-bold">Dostawa</h4>
                            <p className="text-black">
                                {shippingMethod?.name} — {order.shipping_cost.toFixed(2)} zł
                            </p>
                        </div>

                        {/* PŁATNOŚĆ STRIPE */}
                        <div className="rounded-xl border border-[#530236] bg-gray-100 p-5">
                            <h4 className="text-dark-plum mb-4 text-lg font-bold">Płatność</h4>

                            {/* Placeholder pod Stripe PaymentElement */}
                            <div
                                id="payment-element"
                                className="border-dark-plum/40 text-dark-plum min-h-[200px] rounded-lg border border-dashed p-4 text-center"
                            >
                                🔒 Za chwilę pojawi się tu bezpieczna metoda płatności
                            </div>

                            <Button onClick={handlePayment} size="lg" className="mt-5 w-full" variant="darkPlum">
                                Zapłać
                            </Button>
                        </div>
                    </div>

                    {/* PODSUMOWANIE */}
                    <CartSummary cart={cart} currentShippingMethodID={shippingMethod?.id} />
                </div>
            </SubpageLayoutContainer>
        </StoreLayout>
    );
};

export default Payment;
