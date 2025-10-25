import { Input } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import { Label } from '../../../components/ui/label.js';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const UploadImage = ({ services }) => {
    const { setData, post, data } = useForm({
        images: '',
        type: '',
        service: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.gallery.upload'));
    };

    return (
        <DashboardLayout>
            <Heading title={'Dodawanie zdjęc do galerii'} />
            <form onSubmit={handleSubmit}>
                <RadioGroup onValueChange={(value) => setData('type', value)}>
                    <div className={'flex items-center gap-1.5'}>
                        <RadioGroupItem value={'office'} id={'office'} />
                        <Label htmlFor={'office'}>Gabinet</Label>
                    </div>
                    <div className={'flex items-center gap-1.5'}>
                        <RadioGroupItem value={'services'} id={'services'} />
                        <Label htmlFor={'services'}>Usługi</Label>
                    </div>
                </RadioGroup>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="age">Status wizyty</Label>
                    <Select onValueChange={(value) => setData('service', value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Wybierz usługę" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {services.map((item) => (
                                    <SelectItem key={item.key} value={item.key}>
                                        {item.title}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <Input type="file" id={'images'} onChange={(e) => setData('images', e.target.files)} multiple />
                <Button type="submit">Uploaduj</Button>
            </form>
        </DashboardLayout>
    );
};

export default UploadImage;
