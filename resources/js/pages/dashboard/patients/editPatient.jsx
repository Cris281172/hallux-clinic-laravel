import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import { Calendar } from '../../../components/ui/calendar.js';
import { Checkbox } from '../../../components/ui/checkbox.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import { Textarea } from '../../../components/ui/textarea.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const EditPatient = ({ patient, statuses }) => {
    const [showCalendar, setShowCalendar] = useState(false);

    const { data, setData, processing, post } = useForm({
        name: patient.name,
        surname: patient.surname,
        phone: patient.phone,
        description: patient.description,
        comments: patient.comments,
        birthdate: patient.birth_date,
        statusID: patient.status_id,
        patientCard: patient.patient_card,
        email: patient.email,
        gender: patient.gender,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.patient.edit', patient.id));
        toast('Pacjent został edytowany');
    };

    return (
        <DashboardLayout>
            <Heading title={`Edytowanie pacjenta ${patient.name} ${patient.surname}`} />
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="name">Imię</Label>
                        <Input
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            type="text"
                            id="name"
                            placeholder="Podaj imię pacjenta"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="surname">Nazwisko</Label>
                        <Input
                            value={data.surname}
                            onChange={(e) => setData('surname', e.target.value)}
                            type="text"
                            id="surname"
                            placeholder="Podaj nazwisko pacjenta"
                        />
                        {/*{errors.slug && <>Bład w slug</>}*/}
                    </div>

                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="phone">Numer telefonu</Label>
                        <Input
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            type="text"
                            id="phone"
                            placeholder="Podaj numer telefonu pacjenta"
                        />
                        {/*{errors.slug && <>Bład w slug</>}*/}
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
                        {/*{errors.slug && <>Bład w slug</>}*/}
                    </div>
                </div>
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="relative grid w-full items-center gap-1.5">
                        <Label htmlFor="birthdate">Data urodzenia</Label>
                        <Button
                            className={'text-muted-foreground flex cursor-pointer justify-start border-1 bg-transparent hover:bg-transparent'}
                            type="button"
                            onClick={() => setShowCalendar((prev) => !prev)}
                        >
                            {data.birthdate ? data.birthdate : 'Wybierz datę'}
                        </Button>
                        {showCalendar && (
                            <Calendar
                                className="absolute top-0 mt-15 bg-black"
                                mode="single"
                                selected={data.birthdate}
                                onSelect={(date) => {
                                    setData('birthdate', date.toISOString().split('T')[0]);
                                    setShowCalendar(false);
                                }}
                                disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                                initialFocus
                            />
                        )}
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="age">Płeć</Label>
                        <Select defaultValue={data.gender} onValueChange={(value) => setData('gender', value)}>
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
                        {/*{errors.slug && <>Bład w slug</>}*/}
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
                    <Checkbox defaultChecked={data.patientCard === 1} onCheckedChange={(value) => setData('patientCard', value)} id="patientCard" />
                    <Label htmlFor="patientCard">Karta pacjenta wypełniona</Label>
                </div>
                <Button type="submit" disabled={processing}>
                    Edytuj pacjenta
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default EditPatient;
