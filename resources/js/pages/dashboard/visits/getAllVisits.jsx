import { Link, router, usePage } from '@inertiajs/react';
import { pl } from 'date-fns/locale';
import { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaUser, FaUserDoctor } from 'react-icons/fa6';
import DetailsWindow from '../../../components/dashboard/details-window.jsx';
import StatusVisit from '../../../components/dashboard/status-visit.jsx';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import { Calendar } from '../../../components/ui/calendar.js';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../../components/ui/dialog.js';
import { Label } from '../../../components/ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';
import formatDatePolish from '../../../utils/formatDatePolish.js';

const GetAllVisits = ({ visits, date, users, user_id }) => {
    const { props } = usePage();
    const userID = props.auth.user.id;
    const [infoOpen, setInfoOpen] = useState(null);
    const [userFilter, setUserFilter] = useState(user_id?.toString() ?? 'all');
    const parseDate = (str) => {
        const [day, month, year] = str.split('-').map(Number);
        return new Date(year, month - 1, day);
    };

    const handleSelect = (value) => {
        if (!value) return;
        const day = String(value.getDate()).padStart(2, '0');
        const month = String(value.getMonth() + 1).padStart(2, '0');
        const year = value.getFullYear();
        const formatted = `${day}-${month}-${year}`;

        router.get(route('dashboard.visit.get.all', [formatted, userFilter]), {}, { preserveScroll: true, preserveState: true });
    };

    const handleUserChange = (value) => {
        setUserFilter(value);
        router.get(route('dashboard.visit.get.all', [date, value]), {}, { preserveScroll: true, preserveState: true });
    };
    return (
        <DashboardLayout>
            <Heading title={'Wszystkie wizyty'} />
            <div className={'flex w-full gap-1'}>
                <div className={'flex w-full max-w-[250px] flex-col gap-1.5'}>
                    <Label>Użytkownik</Label>
                    <Select defaultValue={userFilter} onValueChange={handleUserChange}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Wybierz użytkownika" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={'all'}>Wszyscy</SelectItem>
                                {users.map((user, index) => (
                                    <SelectItem key={index} value={user.id}>
                                        {user.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <Calendar locale={pl} mode="single" selected={parseDate(date)} onSelect={handleSelect} className="" />
            </div>
            <div className={'grid w-full grid-cols-3 gap-10'}>
                {visits
                    .sort((a, b) => new Date(b.date) - new Date(a.date))
                    .map((visit, index) => (
                        <div key={index} className={'flex h-[300px] w-full flex-col justify-between rounded-2xl border-1 p-5'}>
                            <div>
                                <div className={'flex justify-between'}>
                                    <div>{formatDatePolish(visit.date)}</div>
                                    <StatusVisit status={visit.status} />
                                </div>
                                <div className={'flex items-center gap-1'}>
                                    <FaUserDoctor className={'text-sm text-blue-700'} />
                                    <p>Lekarz: {visit.user.name}</p>
                                </div>
                                <div className={'flex items-center gap-1'}>
                                    <FaUser className={'text-sm'} />
                                    <p>
                                        Pacjent: {visit.patient.name} {visit.patient.surname}
                                    </p>
                                </div>
                                {visit.price && +visit.price !== 0 && <p>Kod: {visit.price}</p>}
                                <div className="line-clamp-5 w-full overflow-hidden">{visit.description ? visit.description : 'Brak opisu'}</div>
                            </div>
                            <div className={'flex gap-5'}>
                                <Dialog open={infoOpen === visit.id} onOpenChange={(value) => setInfoOpen(value ? visit.id : null)}>
                                    <DialogTrigger asChild>
                                        <Button className={'flex-1 cursor-pointer'}>
                                            <FaEye />
                                            Szczegóły
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[900px]">
                                        <DialogTitle>
                                            <div>test</div>
                                        </DialogTitle>
                                        <DetailsWindow patient={visit.patient} visits={visit} className="px-4" />
                                    </DialogContent>
                                </Dialog>
                                <Button asChild variant="outline" className="flex-1">
                                    <Link href={route('dashboard.visit.delete', visit.id)}>Usuń wizytę</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
            </div>
        </DashboardLayout>
    );
};

export default GetAllVisits;
