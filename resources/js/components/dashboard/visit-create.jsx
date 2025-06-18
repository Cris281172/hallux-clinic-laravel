import { useForm, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import formatToMySQLDateTime from '../../utils/formatToMySQLDateTime.js';
import { Button } from '../ui/button.js';
import { Input } from '../ui/input.js';
import { Label } from '../ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select.js';
import { Textarea } from '../ui/textarea.js';
import DatetimeVisit from './visits/datetime-visit.jsx';

const VisitCreate = ({ children, patientID, statuesVisit, onSuccess, users }) => {
    const { props } = usePage();
    const userID = props.auth.user.id;
    const { data, setData, post } = useForm({
        description: '',
        patientID: patientID,
        date: undefined,
        statusID: '1',
        price: '',
        userID: users.find((item) => item.id === userID) ? userID : '',
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
                    <div className="grid w-full items-center gap-1.5">
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
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor={'price'}>Kod</Label>
                        <Input value={data.name} onChange={(e) => setData('price', e.target.value)} type="text" id="price" placeholder="Podaj kod" />
                    </div>
                </div>
                <Button disabled={!patientID} type={'submit'} className={'mt-5'}>
                    Dodaj wizytę
                </Button>
            </form>
            {children}
        </>
    );
};

export default VisitCreate;
