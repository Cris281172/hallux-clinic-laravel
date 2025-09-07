import { useForm } from '@inertiajs/react';
import { Ban } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import PatientSingleCard from '../../../components/dashboard/patinets/patient-single-card.jsx';
import DatetimeVisit from '../../../components/dashboard/visits/datetime-visit.jsx';
import VisitAddPatient from '../../../components/dashboard/visits/visit-add-patient.jsx';
import FormError from '../../../components/form-error.jsx';
import Heading from '../../../components/heading.js';
import { Alert, AlertTitle } from '../../../components/ui/alert.js';
import { Button } from '../../../components/ui/button.js';
import { Checkbox } from '../../../components/ui/checkbox.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select.js';
import { Textarea } from '../../../components/ui/textarea.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';
import formatToMySQLDateTime from '../../../utils/formatToMySQLDateTime.js';

const EditVisit = ({ visit, statuses, users }) => {
    const [selectedPatientID, setSelectedPatientID] = useState(visit.patient_id || null);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [reminderVisible, setReminderVisible] = useState(false);
    const { data, setData, post, errors } = useForm({
        description: visit.description,
        patientID: visit.patient_id,
        date: visit.date,
        userID: visit.user_id,
        statusID: `${visit.status_id}`,
        price: visit.price,
        emailReminder: null,
        phoneReminder: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('dashboard.visit.edit', visit.id), {
            onSuccess: () => {
                toast('Wizyta została edytowana');
            },
            onError: (err) => {
                toast('Błąd podczas edytowania wizyty');
            },
        });
    };

    const handleUserSelect = (value) => {
        setData('userID', value);
        setData('date', undefined);
        setAvailableTimes([]);
    };

    useEffect(() => {
        setData('patientID', selectedPatientID);
    }, [selectedPatientID]);

    return (
        <DashboardLayout>
            <Heading title={'Edytuj widzytę'} />
            <div>
                <h4>Aktualny pacjent: </h4>
                {visit.patient ? (
                    <PatientSingleCard patient={visit.patient} visitInfoVisible={false} />
                ) : (
                    <Alert>
                        <Ban />
                        <AlertTitle>Nie ma żadnego pacjenta przypisanego do tej wizyty!</AlertTitle>
                    </Alert>
                )}
            </div>
            <form className="py-4" onSubmit={handleSubmit}>
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
                    <div className="flex items-center gap-3">
                        <Checkbox onCheckedChange={(value) => setReminderVisible(value)} id="remider" />
                        <Label htmlFor="remider">Przypomnienie wiyty (wymagane podanie nr telefonu lub email)</Label>
                    </div>
                    {reminderVisible && (
                        <div className={'flex gap-5'}>
                            <div className="flex flex-1 flex-col gap-1.5">
                                <Label>Przypomnienie email</Label>

                                <Select value={data.emailReminder} onValueChange={(value) => setData('emailReminder', value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Wybierz czas przypomnienia" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value={null}>Brak</SelectItem>
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
                                <Label>Przypomnienie email</Label>

                                <Select value={data.phoneReminder} onValueChange={(value) => setData('phoneReminder', value)}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Wybierz czas przypomnienia" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value={null}>Brak</SelectItem>
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
                        </div>
                    )}
                </div>
                <Button type={'submit'} className={'mt-5'}>
                    Edytuj wizytę
                </Button>
            </form>
            <VisitAddPatient setSelectedPatientID={setSelectedPatientID} selectedPatientID={selectedPatientID} />
        </DashboardLayout>
    );
};

export default EditVisit;
