import { useForm } from '@inertiajs/react';
import FormError from '../../../../components/form-error.jsx';
import Heading from '../../../../components/heading.js';
import { Button } from '../../../../components/ui/button.js';
import { Input } from '../../../../components/ui/input.js';
import { Label } from '../../../../components/ui/label.js';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';

const CreateAttribute = () => {
    const { data, setData, processing, post, errors } = useForm({
        name: '',
        value: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.attribute.create'));
    };

    return (
        <DashboardLayout>
            <Heading title={'Dodawanie atrybutu'} />
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
                    Dodaj atrybut
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default CreateAttribute;
