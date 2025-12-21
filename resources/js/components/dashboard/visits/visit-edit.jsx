import { useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

import formatToMySQLDateTime from '../../../utils/formatToMySQLDateTime.js';
import FormError from '../../form-error.jsx';
import { Button } from '../../ui/button.tsx';
import { Checkbox } from '../../ui/checkbox.tsx';
import { Input } from '../../ui/input.tsx';
import { Label } from '../../ui/label.tsx';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../ui/select.tsx';
import { Textarea } from '../../ui/textarea.tsx';
import PatientSelect from '../patinets/patient-select.jsx';
import DatetimeVisit from './datetime-visit.jsx';

const VisitEdit = ({ visit, children, allowWithoutPatient = true, selectPatientVisible, onSuccess }) => {
    const [availableTimes, setAvailableTimes] = useState([]);
    const [visitStatuses, setVisitStatuses] = useState([]);
    const [reminderVisible, setReminderVisible] = useState(false);
    const [users, setUsers] = useState([]);
    const [visitWithoutPatient, setVisitWithoutPatient] = useState(false);
    const { data, setData, post, errors, processing } = useForm({
        description: visit.description,
        patientID: visit.patient_id,
        date: visit.date,
        userID: visit.user_id,
        statusID: `${visit.status_id}`,
        price: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.visit.edit', visit.id), {
            onSuccess: () => {
                onSuccess();
            },
        });
    };

    const handleUserSelect = (value) => {
        setData('userID', value);

        setData('date', undefined);
        setAvailableTimes([]);
    };

    const fetchVisitStatuses = async () => {
        const response = await fetch(route('api.dashboard.visit.status.get.all'));
        const data = await response.json();

        if (data.success) {
            setVisitStatuses(data.data.statuses);
            setUsers(data.data.users);
        }
    };

    useEffect(() => {
        fetchVisitStatuses();
    }, []);

    return (
        <>
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
                                    {visitStatuses.map((item, index) => (
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
                        <FormError id="user-id-error" message={errors.userID} />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor={'price'}>Cena wizyty</Label>
                        <Input
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            type="text"
                            id="price"
                            placeholder="Podaj cenę wizyty"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <Checkbox
                            disabled={!allowWithoutPatient}
                            onCheckedChange={(value) => setVisitWithoutPatient(value)}
                            id="patientWithoutVisit"
                        />
                        <Label htmlFor="patientWithoutVisit">Dodaj wizytę bez pacjenta</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <Checkbox onCheckedChange={(value) => setReminderVisible(value)} id="remider" />
                        <Label htmlFor="remider">Przypomnienie wiyty (wymagane podanie nr telefonu lub email)</Label>
                    </div>
                    {reminderVisible && (
                        <div className={'flex gap-5'}>
                            <div className="flex flex-1 flex-col gap-1.5">
                                <Label>Numer telefonu</Label>
                                <Input
                                    value={data.phone}
                                    onChange={(e) => setData('phone', e.target.value)}
                                    type="text"
                                    placeholder="Podaj numer telefonu"
                                />
                            </div>
                        </div>
                    )}
                    {selectPatientVisible && (
                        <PatientSelect patientID={data.patientID} onSelect={(value) => setData('patientID', value)} visit={visit} />
                    )}
                </div>

                <Button disabled={(!data.patientID && !visitWithoutPatient) || processing} type={'submit'} className={'mt-5'}>
                    Edytuj wizytę
                </Button>
            </form>
            {children}
        </>
    );
};

export default VisitEdit;
