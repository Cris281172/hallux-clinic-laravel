import { Link, router, usePage } from '@inertiajs/react';
import { pl } from 'date-fns/locale';
import { Ban, Settings } from 'lucide-react';
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
import { Calendar } from '../../../components/ui/calendar.js';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../../components/ui/dialog.js';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu.js';
import { Label } from '../../../components/ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select.js';
import usePermissions from '../../../hooks/usePermissions.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const GetAllVisits = ({ visits, date, users, user_id }) => {
    const { props } = usePage();
    console.log(visits);
    const permissions = props.userPermissions;
    const [infoOpen, setInfoOpen] = useState(null);
    const [userFilter, setUserFilter] = useState(user_id?.toString() ?? 'all');
    const parseDate = (str) => {
        const [day, month, year] = str.split('-').map(Number);
        return new Date(year, month - 1, day);
    };
    const { checkUserHasPermission } = usePermissions();
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
            <div className={'flex w-full flex-col gap-1'}>
                <div className={'flex w-full flex-col gap-1.5'}>
                    <Label>Lekarz</Label>
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
                <Calendar locale={pl} mode="single" selected={parseDate(date)} onSelect={handleSelect} />
            </div>
            <div className={'mt-5'}>
                {visits && visits.length !== 0 ? (
                    <div className={'grid w-full grid-cols-3 gap-10'}>
                        {visits
                            .sort((a, b) => new Date(b.date) - new Date(a.date))
                            .map((visit, index) => (
                                <React.Fragment key={index}>
                                    <VisitSingleCard visit={visit}>
                                        <div className={'absolute top-0 right-0 m-2'}>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger className={'cursor-pointer'}>
                                                    <Settings />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem>
                                                        <Link href={''}>Dodaj pacjenta do wizyty</Link>
                                                    </DropdownMenuItem>
                                                    {visit.patient_id && (
                                                        <Dialog
                                                            open={infoOpen === visit.id}
                                                            onOpenChange={(value) => setInfoOpen(value ? visit.id : null)}
                                                        >
                                                            <DialogTrigger asChild>
                                                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Szczegóły</DropdownMenuItem>
                                                            </DialogTrigger>
                                                            <DialogContent className="sm:max-w-[900px]">
                                                                <DialogTitle>
                                                                    <div>test</div>
                                                                </DialogTitle>
                                                                <DetailsWindow patient={visit.patient} />
                                                            </DialogContent>
                                                        </Dialog>
                                                    )}
                                                    {checkUserHasPermission('usuwanie wizyt') && (
                                                        <AlertDialog>
                                                            <AlertDialogTrigger asChild>
                                                                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Usuń</DropdownMenuItem>
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

                                                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                                                        <Link href={route('dashboard.visit.edit.view', visit.id)}>Edytuj</Link>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
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
