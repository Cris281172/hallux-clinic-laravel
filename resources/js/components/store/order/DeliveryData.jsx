import { useForm } from '@inertiajs/react';
import FormError from '../../form-error.jsx';
import { Button } from '../../ui/button.tsx';
import { Checkbox } from '../../ui/checkbox.tsx';
import { Input } from '../../ui/input.tsx';
import { Label } from '../../ui/label.tsx';

const companyFormConfig = [
    {
        id: 'company',
        label: 'Nazwa firmy',
        placeholder: 'Podaj nazwę firmy',
        required: false,
    },
    {
        id: 'nip',
        label: 'NIP',
        placeholder: 'Podaj NIP',
        required: false,
    },
    {
        id: 'companyAddressLine1',
        label: 'Adres firmy (ulica i numer)',
        placeholder: 'np. ul. Długa 15',
        required: false,
    },
    {
        id: 'companyAddressLine2',
        label: 'Adres firmy – uzupełnienie (opcjonalnie)',
        placeholder: 'np. mieszkanie 4, piętro 2, budynek B',
        required: false,
    },
    {
        id: 'companyZipCode',
        label: 'Kod pocztowy firmy',
        placeholder: 'Podaj kod pocztowy firmy',
        required: false,
    },
    {
        id: 'companyCity',
        label: 'Miasto',
        placeholder: 'Podaj miasto',
        required: true,
    },
];

const personFormConfig = [
    {
        id: 'name',
        label: 'Imię',
        placeholder: 'Podaj imię',
        required: true,
    },
    {
        id: 'surname',
        label: 'Nazwisko',
        placeholder: 'Podaj nazwisko',
        required: true,
    },
    {
        id: 'addressLine1',
        label: 'Adres (ulica i numer)',
        placeholder: 'np. ul. Długa 15',
        required: true,
    },
    {
        id: 'addressLine2',
        label: 'Adres – uzupełnienie (opcjonalnie)',
        placeholder: 'np. mieszkanie 4, piętro 2, budynek B',
        required: false,
    },
    {
        id: 'zipCode',
        label: 'Kod pocztowy',
        placeholder: 'Podaj kod pocztowy',
        required: true,
    },
    {
        id: 'city',
        label: 'Miasto',
        placeholder: 'Podaj miasto',
        required: true,
    },
    {
        id: 'phone',
        label: 'Numer telefonu',
        placeholder: 'Podaj numer telefonu np. 123456789',
        required: true,
    },
];

export const DeliveryDataSummary = ({ deliveryDetails, setCurrentStep }) => {
    return (
        <>
            <div className={'mt-4'}>
                <h5 className={'font-bold text-black'}>Dane podstawowe</h5>

                <div className={'grid grid-cols-2'}>
                    {personFormConfig.map((item) => (
                        <>
                            {deliveryDetails[item.id] && (
                                <p className={'text-sm text-black'}>
                                    {item.label}: {deliveryDetails[item.id]}
                                </p>
                            )}
                        </>
                    ))}
                </div>
            </div>
            {deliveryDetails.invoice && (
                <div className={'mt-1'}>
                    <h5 className={'font-bold text-black'}>Dane firmy</h5>
                    <div className={'grid grid-cols-2'}>
                        {companyFormConfig.map((item) => (
                            <>
                                {deliveryDetails[item.id] && (
                                    <p className={'text-sm text-black'}>
                                        {item.label}: {deliveryDetails[item.id]}
                                    </p>
                                )}
                            </>
                        ))}
                    </div>
                </div>
            )}

            <Button size={'sm'} onClick={() => setCurrentStep(2)} className={'mt-5'} variant={'darkPlum'} type={'button'}>
                Edytuj
            </Button>
        </>
    );
};

const DeliveryData = ({ setCurrentStep, deliveryDetails }) => {
    const { data, setData, post, errors } = useForm({
        name: deliveryDetails?.name ?? '',
        surname: deliveryDetails?.surname ?? '',
        addressLine1: deliveryDetails?.addressLine1 ?? '',
        addressLine2: deliveryDetails?.addressLine2 ?? '',
        zipCode: deliveryDetails?.zipCode ?? '',
        city: deliveryDetails?.city ?? '',
        phone: deliveryDetails?.phone ?? '',
        invoice: deliveryDetails?.invoice ?? '',
        nip: deliveryDetails?.nip ?? '',
        company: deliveryDetails?.company ?? '',
        companyAddressLine1: deliveryDetails?.companyAddressLine1 ?? '',
        companyAddressLine2: deliveryDetails?.companyAddressLine2 ?? '',
        companyZipCode: deliveryDetails?.companyZipCode ?? '',
        companyCity: deliveryDetails?.companyCity ?? '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('store.order.delivery.details'), {
            preserveScroll: true,
            onSuccess: () => {
                setCurrentStep((prev) => prev + 1);
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={'grid grid-cols-2 gap-5'}>
                {personFormConfig.map((item, index) => (
                    <div className="flex w-full flex-col gap-1.5" key={index}>
                        <Label htmlFor="name" className={'text-dark-plum flex'}>
                            {item.label} {item.required ? '*' : ''}
                        </Label>
                        <Input
                            id={item.id}
                            value={data[item.id]}
                            onChange={(e) => setData(item.id, e.target.value)}
                            type="text"
                            className="mt-1 block w-full border-[#530236] text-black placeholder:text-black"
                            placeholder={item.placeholder}
                        />
                        <FormError id="fullName-error" message={errors[item.id]} />
                    </div>
                ))}
            </div>
            <div className="mt-5 mb-5 flex items-center gap-3">
                <Checkbox
                    defaultChecked={data.invoice}
                    onCheckedChange={(value) => setData('invoice', value)}
                    className="border-[#530236] data-[state=checked]:border-[#530236] data-[state=checked]:bg-[#530236] data-[state=checked]:text-white"
                    id="invoice"
                />
                <Label htmlFor="invoice" className={'text-dark-plum'}>
                    Potrzebujesz faktury?
                </Label>
            </div>
            {data.invoice && (
                <div className={'grid grid-cols-2 gap-5'}>
                    {companyFormConfig.map((item, index) => (
                        <div className="flex w-full flex-col gap-1.5" key={index}>
                            <Label htmlFor="name" className={'text-dark-plum flex'}>
                                {item.label} {item.required ? '*' : ''}
                            </Label>
                            <Input
                                id={item.id}
                                value={data[item.id]}
                                onChange={(e) => setData(item.id, e.target.value)}
                                type="text"
                                className="mt-1 block w-full border-[#530236] text-black placeholder:text-black"
                                placeholder={item.placeholder}
                            />
                            <FormError id="fullName-error" message={errors[item.id]} />
                        </div>
                    ))}
                </div>
            )}
            <div className={'mt-5 flex gap-5'}>
                <Button variant={'darkPlum'} type={'button'} onClick={() => setCurrentStep((prev) => prev - 1)}>
                    Wróć
                </Button>
                <Button variant={'darkPlum'} type={'submit'}>
                    Kontynuuj
                </Button>
            </div>
        </form>
    );
};

export default DeliveryData;
