import { useForm } from '@inertiajs/react';
import { useState } from 'react';

import formatToMySQLDateTime from '../../utils/formatToMySQLDateTime.js';
import { Button } from '../ui/button.js';
import { Label } from '../ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select.js';
import { Textarea } from '../ui/textarea.js';
import DatetimeVisit from './visits/datetime-visit.jsx';

const EditVisit = ({ visit, statuses, setEditVisitID, fetchVisits }) => {
    const [availableTimes, setAvailableTimes] = useState([]);
    const { data, setData, post } = useForm({
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
                setEditVisitID(null);
                if (typeof fetchVisits === 'function') {
                    fetchVisits();
                }
            },
        });
    };

    return (
        <form className="px-4" onSubmit={handleSubmit}>
            <div className={'flex flex-col gap-5'}>
                <div className={'grid w-full grid-cols-2 gap-4'}>
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
                                    {statuses.map((item, index) => (
                                        <SelectItem key={index} value={`${item.id}`}>
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="flex w-full flex-col gap-1.5">
                    <Label htmlFor="description">Opis</Label>
                    <Textarea
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        placeholder="Edytuj opis wizyty"
                        id="description"
                    />
                </div>
            </div>
            <div className={'mt-5 flex gap-4'}>
                <Button type={'submit'} className={'flex-1'}>
                    Edytuj wizytę
                </Button>
                <Button onClick={() => setEditVisitID(null)} variant={'outline'} className={'flex-1'}>
                    Anuluj
                </Button>
            </div>
        </form>
    );
};

export default EditVisit;
