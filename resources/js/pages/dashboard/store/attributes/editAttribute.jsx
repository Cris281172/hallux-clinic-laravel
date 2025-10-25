import { useForm } from '@inertiajs/react';
import { toast } from 'sonner';
import FormError from '../../../../components/form-error.jsx';
import Heading from '../../../../components/heading.js';
import { Button } from '../../../../components/ui/button.js';
import { Input } from '../../../../components/ui/input.js';
import { Label } from '../../../../components/ui/label.js';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';

const EditAttribute = ({ attribute }) => {
    const { data, setData, processing, post, errors } = useForm({
        name: attribute.name,
        value: attribute.value,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.attribute.edit', { id: attribute.id }), {
            onSuccess: () => {
                toast.success('Atrybut został edytowany.');
            },
        });
    };

    return (
        <DashboardLayout>
            <Heading title={`Edytowanie atrybutu ${attribute.name} ${attribute.value}`} />
            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Nazwa atrybutu</Label>
                        <Input
                            value={data.name}
                            onChange={(e) => {
                                setData('name', e.target.value);
                            }}
                            type="text"
                            id="name"
                            placeholder="Podaj nazwe atrybutu"
                        />
                        <FormError id="name-error" message={errors.name} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Zawartość atrybutu</Label>
                        <Input
                            value={data.value}
                            onChange={(e) => {
                                setData('value', e.target.value);
                            }}
                            type="text"
                            id="value"
                            placeholder="Podaj zawartość atrybutu"
                        />
                        <FormError id="value-error" message={errors.value} />
                    </div>
                </div>
                <Button disabled={processing} type={'submit'}>
                    Edytuj atrybut
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default EditAttribute;
