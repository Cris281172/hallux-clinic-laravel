import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../../../../components/form-error.jsx';
import Heading from '../../../../components/heading.js';
import { Button } from '../../../../components/ui/button.js';
import { Input } from '../../../../components/ui/input.js';
import { Label } from '../../../../components/ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../../components/ui/select.js';
import { variantValues } from '../../../../config/dashboard/store/variantValues.js';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';

const EditVariant = ({ variant }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: variant.name,
        value: variant.value,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.variant.edit', { id: variant.id }), {
            onSuccess: () => {
                toast.success('Wariant został edytowany.');
            },
        });
    };

    return (
        <DashboardLayout>
            <Heading title={`Edytowanie wariantu ${variant.name} ${variant.value}`} />
            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Nazwa wariantu</Label>
                        <Select defaultValue={data.name} onValueChange={(value) => setData('name', value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Wybierz nazwe wariantu" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {variantValues.map((item, index) => (
                                        <SelectItem key={index} value={`${item.key}`}>
                                            {item.value}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <FormError id="name-error" message={errors.name} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Zawartość wariantu</Label>
                        <Input
                            value={data.value}
                            onChange={(e) => {
                                setData('value', e.target.value);
                            }}
                            type="text"
                            id="value"
                            placeholder="Podaj zawartość wariantu"
                        />
                        <FormError id="value-error" message={errors.value} />
                    </div>
                </div>
                <Button disabled={processing} type={'submit'}>
                    Edytuj wariant
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default EditVariant;
