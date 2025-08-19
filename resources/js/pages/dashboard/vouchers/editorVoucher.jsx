import { useForm } from '@inertiajs/react';
import { pl } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import FormError from '../../../components/form-error.jsx';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const EditorVoucher = ({ voucher }) => {
    const { setData, data, processing, post, errors } = useForm({
        fullName: voucher?.full_name ?? '',
        service: voucher?.service ?? null,
        price: voucher?.price ?? '',
        validTo: voucher?.valid_to ?? '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (voucher) {
            post(route('dashboard.voucher.edit', voucher.id));
        } else {
            post(route('dashboard.voucher.create'));
        }
    };

    return (
        <DashboardLayout>
            <Heading title={voucher ? 'Edytuj voucher' : 'Dodaj voucher'} />
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Imię i nazwisko</Label>
                        <Input
                            value={data.fullName}
                            onChange={(e) => setData('fullName', e.target.value)}
                            type="text"
                            id="fullName"
                            placeholder="Podaj imię i nazwisko"
                        />
                        <FormError id="full-name-error" message={errors.fullName} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="surname">Usługa</Label>
                        <Input
                            value={data.service}
                            onChange={(e) => setData('service', e.target.value)}
                            type="text"
                            id="service"
                            placeholder="Podaj nazwę usłgui"
                        />
                    </div>

                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="phone">Kwota vouchera</Label>
                        <Input
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            type="text"
                            id="price"
                            placeholder="Podaj kwote vouchera"
                        />
                        <FormError id="phone-error" message={errors.price} />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="date">Data ważności</Label>
                        <DatePicker
                            locale={pl}
                            id="date"
                            selected={data.validTo}
                            onChange={(date) => setData('validTo', date)}
                            dateFormat="dd-MM-yyyy"
                            className="border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                            placeholderText={'Podaj date ważności'}
                        />
                        <FormError id="valid-to-error" message={errors.validTo} />
                    </div>
                </div>
                <Button type="submit" disabled={processing}>
                    {voucher ? 'Edytuj voucher' : 'Dodaj voucher'}
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default EditorVoucher;
