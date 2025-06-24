import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import PatientSingleCard from '../../../components/dashboard/patinets/patient-single-card.jsx';
import DatetimeVisit from '../../../components/dashboard/visits/datetime-visit.jsx';
import FormError from '../../../components/form-error.jsx';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select.js';
import { Textarea } from '../../../components/ui/textarea.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';
import formatToMySQLDateTime from '../../../utils/formatToMySQLDateTime.js';

const EditVisit = ({ visit, statuses, users }) => {
    const [availableTimes, setAvailableTimes] = useState([]);
    const { data, setData, post, errors } = useForm({
        description: visit.description,
        patientID: visit.patient_id,
        date: visit.date,
        userID: visit.user_id,
        statusID: `${visit.status_id}`,
        price: visit.price,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.visit.edit', visit.id));
    };

    const handleUserSelect = (value) => {
        setData('userID', value);
        setData('date', undefined);
        setAvailableTimes([]);
    };
    return (
        <DashboardLayout>
            <Heading title={'Edytuj wizytę'} />
            <PatientSingleCard patient={visit.patient} visitInfoVisible={false} />
            <form className="px-4" onSubmit={handleSubmit}>
                <div className={'flex flex-col gap-5'}>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="date">Data i godzina wizyty</Label>
                        <DatetimeVisit
                            selected={data.date ? new Date(data.date) : null}
                            data={data}
                            onChange={(date) => setData('date', formatToMySQLDateTime(date))}
                            setAvailableTimes={setAvailableTimes}
                            availableTimes={availableTimes}
                        />
                        <FormError id="date-error" message={errors.date} />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="age">Status wizyty</Label>
                        <Select defaultValue={data.statusID} onValueChange={(value) => setData('statusID', value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Wybierz status wizyty" />
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
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="phone">Opis wizyty</Label>
                        <Textarea
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="Podaj opis wizyty"
                            id="description"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label>Lekarz</Label>
                        <Select defaultValue={`${data.userID}`} onValueChange={handleUserSelect}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Wybierz lekarza" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {users.map((user, index) => (
                                        <SelectItem key={index} value={`${user.id}`}>
                                            {user.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <FormError id="surname-error" message={errors.userID} />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor={'price'}>Kod</Label>
                        <Input value={data.price} onChange={(e) => setData('price', e.target.value)} type="text" id="price" placeholder="Podaj kod" />
                    </div>
                </div>
                <Button type={'submit'} className={'mt-5'}>
                    Edytuj wizytę
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default EditVisit;
