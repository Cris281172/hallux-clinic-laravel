import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from '@inertiajs/react';
import { Star } from 'lucide-react';
import { toast } from 'sonner';
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
    const { data, setData, processing, post, errors } = useForm({
        fullName: '',
        phone: '',
        description: '',
        comments: '',
        birthdate: null,
        statusID: '1',
        patientCard: false,
        email: '',
        address: null,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.patient.create'), {
            onSuccess: () => {
                toast('Pacjent został dodany');
            },
            onError: () => {
                toast('Błąd podczas dodawania pacjenta');
            },
        });
    };

    return (
        <DashboardLayout>
            <Heading title={'Dodaj pacjenta'} />
            <p className={'mb-3 text-right text-xs text-gray-300'}>
                <Star className="inline h-2 w-2 fill-white text-white" /> - wymagane pola
            </p>
            <form onSubmit={handleSubmit} className="space-y-8">
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label requiredStar={true} htmlFor="fullName">
                            Imię i nazwisko
                        </Label>
                        <Input
                            value={data.fullName}
                            onChange={(e) => setData('fullName', e.target.value)}
                            type="text"
                            id="fullName"
                            placeholder="Podaj imię i nazwisko pacjenta"
                        />
                        <FormError id="fullName-error" message={errors.fullName} />
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
                    <div className="grid w-full items-center gap-1.5">
                        <Label htmlFor="address">Adres zamieszkania</Label>
                        <Input
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            type="text"
                            id="address"
                            placeholder="Podaj adres zamieszkania"
                        />
                    </div>
                </div>
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label requiredStar={true} htmlFor="birthdate">
                            Data urodzenia
                        </Label>
                        <DateBirthday selected={data.birthdate} onChange={(date) => setData('birthdate', formatToMySQLDateTime(date))} />
                        <FormError id="birthdate-error" message={errors.birthdate} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label requiredStar={true} htmlFor="age">
                            Płeć
                        </Label>
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

                <Button type="submit" disabled={processing}>
                    Dodaj pacjenta
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default CreatePatient;
