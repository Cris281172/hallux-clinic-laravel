import { Input } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const UploadImage = () => {
    const { setData, post } = useForm({
        images: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.gallery.upload'));
    };

    return (
        <DashboardLayout>
            <Heading title={'Dodawanie zdjęc do galerii'} />
            <form onSubmit={handleSubmit}>
                <Input multiple type="file" id={'images'} onChange={(e) => setData('images', e.target.files)} />
                <Button type="submit">Uploaduj</Button>
            </form>
        </DashboardLayout>
    );
};

export default UploadImage;
