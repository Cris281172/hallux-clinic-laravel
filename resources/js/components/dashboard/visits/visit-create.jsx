import { useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import formatToMySQLDateTime from '../../../utils/formatToMySQLDateTime.js';
import FormError from '../../form-error.jsx';
import { Button } from '../../ui/button.tsx';
import { Checkbox } from '../../ui/checkbox.js';
import { Input } from '../../ui/input.tsx';
import { Label } from '../../ui/label.tsx';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../ui/select.tsx';
import { Textarea } from '../../ui/textarea.tsx';
import DatetimeVisit from './datetime-visit.jsx';

const VisitCreate = ({ children, patientID, statuesVisit, onSuccess, users }) => {
    const { props } = usePage();
    const [visitWithoutPatient, setVisitWithoutPatient] = useState(false);
    const userID = props.auth.user.id;
    const [reminderVisible, setReminderVisible] = useState(false);
    const { data, setData, post, errors, processing } = useForm({
        description: '',
        patientID: patientID,
        date: undefined,
        statusID: '1',
        price: '',
        userID: users.find((item) => item.id === userID) ? userID : '',
        emailReminder: null,
        phoneReminder: null,
        phone: '',
    });

    const [availableTimes, setAvailableTimes] = useState([]);

    useEffect(() => {
        setData('patientID', patientID);
    }, [patientID]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.visit.create'), {
            onSuccess: () => onSuccess(),
        });
    };

    const handleUserSelect = (value) => {
        setData('userID', value);
        setData('date', undefined);
        setAvailableTimes([]);
    };

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
                                    {statuesVisit.map((item, index) => (
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
                        <Label htmlFor={'price'}>Kod</Label>
                        <Input
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            type="text"
                            id="price"
                            placeholder="Podaj numer telefonu"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <Checkbox onCheckedChange={(value) => setVisitWithoutPatient(value)} id="patientWithoutVisit" />
                        <Label htmlFor="patientWithoutVisit">Dodaj wizytę bez pacjenta</Label>
                    </div>
                    <div className="flex items-center gap-3">
                        <Checkbox onCheckedChange={(value) => setReminderVisible(value)} id="remider" />
                        <Label htmlFor="remider">Przypomnienie wiyty (wymagane podanie nr telefonu lub email)</Label>
                    </div>
                    {reminderVisible && (
                        <div className={'flex gap-5'}>
                            <div className="flex flex-1 flex-col gap-1.5">
                                <Label>Przypomnienie sms</Label>

                                <Select value={data.phoneReminder} onValueChange={(value) => setData('phoneReminder', value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Wybierz czas przypomnienia" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value={null}>Brak</SelectItem>
                                        </SelectGroup>
                                        <SelectGroup>
                                            <SelectItem value={'5'}>5 minut przed</SelectItem>
                                        </SelectGroup>
                                        <SelectGroup>
                                            <SelectItem value={'10'}>10 minut przed</SelectItem>
                                        </SelectGroup>
                                        <SelectGroup>
                                            <SelectItem value={'60'}>Godzine przed</SelectItem>
                                        </SelectGroup>
                                        <SelectGroup>
                                            <SelectItem value={`${60 * 3}`}>3 godziny przed</SelectItem>
                                        </SelectGroup>
                                        <SelectGroup>
                                            <SelectItem value={`${60 * 24}`}>Dzień przed</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
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
                </div>

                <Button disabled={(!patientID && !visitWithoutPatient) || processing} type={'submit'} className={'mt-5'}>
                    Dodaj wizytę
                </Button>
            </form>
            {children}
        </>
    );
};

export default VisitCreate;
