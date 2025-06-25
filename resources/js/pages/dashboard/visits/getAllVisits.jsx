import { Link, router, usePage } from '@inertiajs/react';
import { pl } from 'date-fns/locale';
import { Ban } from 'lucide-react';
import React, { useState } from 'react';
import { route } from 'ziggy-js';
import DetailsWindow from '../../../components/dashboard/details-window.jsx';
import VisitSingleCard from '../../../components/dashboard/visits/visit-single-card.jsx';
import Heading from '../../../components/heading.js';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '../../../components/ui/alert-dialog.js';
import { Alert, AlertTitle } from '../../../components/ui/alert.js';
import { Button } from '../../../components/ui/button.js';
import { Calendar } from '../../../components/ui/calendar.js';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../../components/ui/dialog.js';
import { Label } from '../../../components/ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const GetAllVisits = ({ visits, date, users, user_id }) => {
    const { props } = usePage();
    const permissions = props.userPermissions;
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
            <div className={'mt-5'}>
                {visits && visits.length !== 0 ? (
                    <div className={'grid w-full grid-cols-3 gap-10'}>
                        {visits
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .map((visit, index) => (
                                <React.Fragment key={index}>
                                    <VisitSingleCard visit={visit}>
                                        <div className={'flex gap-5'}>
                                            <Dialog open={infoOpen === visit.id} onOpenChange={(value) => setInfoOpen(value ? visit.id : null)}>
                                                <DialogTrigger asChild>
                                                    <Button className={'flex-1 cursor-pointer'}>Szczegóły</Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[900px]">
                                                    <DialogTitle>
                                                        <div>test</div>
                                                    </DialogTitle>
                                                    <DetailsWindow patient={visit.patient} />
                                                </DialogContent>
                                            </Dialog>
                                            <Button className={'flex-1'} asChild>
                                                <Link href={route('dashboard.visit.edit.view', visit.id)}>Edytuj</Link>
                                            </Button>
                                            {permissions.find((el) => el.name === 'usuwanie wizyt') && (
                                                <AlertDialog>
                                                    <AlertDialogTrigger asChild>
                                                        <Button variant="outline" className={'flex-1'}>
                                                            Usuń wizytę
                                                        </Button>
                                                    </AlertDialogTrigger>
                                                    <AlertDialogContent>
                                                        <AlertDialogHeader>
                                                            <AlertDialogTitle>Czy jesteś pewna/y usunięcia wizyty?</AlertDialogTitle>
                                                            <AlertDialogDescription>
                                                                Ta czynność spowoduje trwałe usunięcie wizyty bez możliwości jej przywrócenia.
                                                            </AlertDialogDescription>
                                                        </AlertDialogHeader>
                                                        <AlertDialogFooter>
                                                            <AlertDialogCancel>Anuluj</AlertDialogCancel>
                                                            <AlertDialogAction asChild>
                                                                <Link href={route('dashboard.visit.delete', visit.id)}>Potwierdz</Link>
                                                            </AlertDialogAction>
                                                        </AlertDialogFooter>
                                                    </AlertDialogContent>
                                                </AlertDialog>
                                            )}
                                        </div>
                                    </VisitSingleCard>
                                </React.Fragment>
                            ))}
                    </div>
                ) : (
                    <Alert>
                        <Ban />
                        <AlertTitle>Brak wizyt!</AlertTitle>
                    </Alert>
                )}
            </div>
        </DashboardLayout>
    );
};

export default GetAllVisits;
