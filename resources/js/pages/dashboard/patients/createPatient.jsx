import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import DateBirthday from '../../../components/dashboard/patinets/date-birthday.jsx';
import FormError from '../../../components/form-error.jsx';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import { Checkbox } from '../../../components/ui/checkbox.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import { Textarea } from '../../../components/ui/textarea.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';
import formatToMySQLDateTime from '../../../utils/formatToMySQLDateTime.js';
const CreatePatient = ({ statuses }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const { data, setData, processing, post, errors } = useForm({
        name: '',
        surname: '',
        phone: '',
        description: '',
        comments: '',
        birthdate: null,
        statusID: '1',
        patientCard: false,
        email: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.patient.create'));
    };

    return (
        <DashboardLayout>
            <Heading title={'Dodaj pacjenta'} />
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Imię</Label>
                        <Input
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            type="text"
                            id="name"
                            placeholder="Podaj imię pacjenta"
                        />
                        <FormError id="name-error" message={errors.name} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="surname">Nazwisko</Label>
                        <Input
                            value={data.surname}
                            onChange={(e) => setData('surname', e.target.value)}
                            type="text"
                            id="surname"
                            placeholder="Podaj nazwisko pacjenta"
                        />
                        <FormError id="surname-error" message={errors.surname} />
                    </div>

                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="phone">Numer telefonu</Label>
                        <Input
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            type="text"
                            id="phone"
                            placeholder="Podaj numer telefonu pacjenta"
                        />
                        <FormError id="phone-error" message={errors.phone} />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="phone">Email</Label>
                        <Input
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            type="email"
                            id="email"
                            placeholder="Podaj email pacjenta"
                        />
                        <FormError id="email-error" message={errors.email} />
                    </div>
                </div>
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="birthdate">Data urodzenia</Label>
                        <DateBirthday selected={data.birthdate} onChange={(date) => setData('birthdate', formatToMySQLDateTime(date))} />
                        <FormError id="birthdate-error" message={errors.birthdate} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="age">Płeć</Label>
                        <Select onValueChange={(value) => setData('gender', value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Wybierz płeć pacjenta" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="male">Mężczyzna</SelectItem>
                                    <SelectItem value="female">Kobieta</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <FormError id="birthdate-error" message={errors.gender} />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="age">Status</Label>
                        <Select defaultValue={'1'} onValueChange={(value) => setData('statusID', value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Wybierz status pacjenta" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {statuses.map((item, index) => (
                                        <SelectItem key={index} value={`${item.id}`}>
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        {/*{errors.slug && <>Bład w slug</>}*/}
                    </div>
                </div>
                <div className={'flex flex-col gap-4'}>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="description">Opis</Label>
                        <Textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="Podaj opis pacjenta"
                            id="description"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="comments">Uwagi</Label>
                        <Textarea
                            value={data.comments}
                            onChange={(e) => setData('comments', e.target.value)}
                            placeholder="Podaj uwagi pacjenta"
                            id="comments"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Checkbox onCheckedChange={(value) => setData('patientCard', value)} id="patientCard" />
                    <Label htmlFor="patientCard">Karta pacjenta wypełniona</Label>
                </div>
                {/*<div className="w-full">*/}
                {/*    <Label htmlFor="image">Zdjęcie</Label>*/}
                {/*    <div className={'grid grid-cols-2 gap-4'}>*/}
                {/*        <Input id="image" type="file" onChange={handleFileChange} />*/}
                {/*        <img className={'aspect-square w-full max-w-100 object-cover'} src={blobImagePreview} />*/}
                {/*    </div>*/}
                {/*</div>*/}
                <Button type="submit" disabled={processing}>
                    Dodaj pacjenta
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default CreatePatient;
