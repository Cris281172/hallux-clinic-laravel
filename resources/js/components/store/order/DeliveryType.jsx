import { useForm } from '@inertiajs/react';
import { Button } from '../../ui/button.tsx';
import { Label } from '../../ui/label.tsx';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group.js';

export const DeliveryTypeSummary = ({ availableShippingMethod, shippingMethod, setCurrentStep }) => {
    return (
        <div className={'mt-1'}>
            <h5 className={'font-bold text-black'}>Metoda dostawy</h5>
            <p className={'text-sm text-black'}>
                Rodzaj dostawy: {availableShippingMethod.find((el) => el.id === shippingMethod.shippingMethodID).name}
            </p>
            <Button size={'sm'} onClick={() => setCurrentStep(3)} className={'mt-5'} variant={'darkPlum'} type={'button'}>
                Edytuj
            </Button>
        </div>
    );
};

const DeliveryType = ({ setCurrentStep, availableShippingMethod, shippingMethod, setCurrentShippingMethodID, cart }) => {
    const { setData, data, post } = useForm({
        shippingMethodID: shippingMethod?.shippingMethodID ?? '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('store.order.shipping.method'), {
            preserveScroll: true,
            onSuccess: () => {
                setCurrentStep((prev) => prev + 1);
            },
        });
    };

    const handleChange = (value) => {
        setData('shippingMethodID', value);
        setCurrentShippingMethodID(value);
    };

    return (
        <form className={'flex flex-col'} onSubmit={handleSubmit}>
            <RadioGroup onValueChange={(value) => handleChange(value)} defaultValue={data.shippingMethodID}>
                {availableShippingMethod.map((item, index) => (
                    <div key={index} className={'flex items-center gap-1.5'}>
                        <RadioGroupItem className={'bg-dark-plum'} value={item.id} id={'office'} />
                        <Label htmlFor={item.id} className={'text-dark-plum'}>
                            {item.name} - {cart?.freeShippingApplied ? 'ZA DARMO' : `${item?.price} zł`}
                        </Label>
                    </div>
                ))}
            </RadioGroup>
            {availableShippingMethod?.find((el) => el.id === data.shippingMethodID)?.code === 'inpost_locker' && <div>PACZKOMATY</div>}
            <div className={'mt-5 flex gap-5'}>
                <Button size={'sm'} variant={'darkPlum'} type={'button'} onClick={() => setCurrentStep((prev) => prev - 1)}>
                    Wróć
                </Button>
                <Button size={'sm'} variant={'darkPlum'} type={'submit'}>
                    Przejdź do płatności
                </Button>
            </div>
        </form>
    );
};

export default DeliveryType;
