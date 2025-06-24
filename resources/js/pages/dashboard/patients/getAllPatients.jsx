import { Alert, AlertTitle } from '@/components/ui/alert';
import { Link, router } from '@inertiajs/react';
import { Ban } from 'lucide-react';
import React, { useState } from 'react';
import { FaCalendarAlt, FaEye } from 'react-icons/fa';
import AppPagination from '../../../components/app-pagination.jsx';
import DetailsWindow from '../../../components/dashboard/details-window.jsx';
import PatientSingleCard from '../../../components/dashboard/patinets/patient-single-card.jsx';
import VisitCreate from '../../../components/dashboard/visit-create.jsx';
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
import { Button } from '../../../components/ui/button.js';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../../components/ui/dialog.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const GetAllPatients = ({ data, statuses, users }) => {
    const { patients, filters, visitStatuses } = data;

    const [statusID, setStatusID] = useState(filters.status_id || '');
    const [search, setSearch] = useState(filters.search || '');
    const [addVisitOpen, setAddVisitOpen] = useState(null);
    const [infoOpen, setInfoOpen] = useState(null);

    return (
        <DashboardLayout>
            <Heading title={'Wszyscy pacjencji'} />
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    router.get(
                        route('dashboard.patient.get.all'),
                        {
                            ...(search && { search }),
                            ...(statusID && { status_id: statusID }),
                        },
                        { preserveScroll: true },
                    );
                }}
                className="mb-6 flex w-full items-end justify-between gap-3.5"
            >
                <div className={'flex w-full flex-col gap-1.5'}>
                    <Label>Szukaj</Label>
                    <Input
                        type="text"
                        placeholder="Szukaj pacjenta po nazwie/email/numer telefonu..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className={'flex w-1/3 flex-col gap-1.5'}>
                    <Label>Status</Label>
                    <Select defaultValue={`${statusID}`} onValueChange={(value) => setStatusID(`${value}`)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Wybierz status pacjenta" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value={null}>Brak</SelectItem>
                                {statuses.map((status, index) => (
                                    <SelectItem key={index} value={`${status.id}`}>
                                        {status.name}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <Button type={'submit'}>Wyszukaj pacjenta</Button>
            </form>
            {patients?.data.length !== 0 ? (
                <div className={'grid grid-cols-2 gap-5'}>
                    {patients.data.map((patient, index) => (
                        <React.Fragment key={index}>
                            <PatientSingleCard patient={patient}>
                                <div className={'mt-5 flex w-full gap-4'}>
                                    <Dialog open={infoOpen === patient.id} onOpenChange={(value) => setInfoOpen(value ? patient.id : null)}>
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
                                            <DetailsWindow patient={patient} className="px-4" />
                                        </DialogContent>
                                    </Dialog>

                                    <Dialog open={addVisitOpen === patient.id} onOpenChange={(value) => setAddVisitOpen(value ? patient.id : null)}>
                                        <DialogTrigger asChild>
                                            <Button className={'flex-1 cursor-pointer'} variant={'outline'}>
                                                <FaCalendarAlt />
                                                Dodaj wizytę
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[650px]">
                                            <DialogTitle>
                                                <div>test</div>
                                            </DialogTitle>
                                            <VisitCreate
                                                patientID={patient.id}
                                                statuesVisit={visitStatuses}
                                                onSuccess={() => setAddVisitOpen(null)}
                                                className="px-4"
                                                users={users}
                                            />
                                        </DialogContent>
                                    </Dialog>
                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button variant="outline" className={'flex-1'}>
                                                Usuń pacjenta
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Czy jesteś pewna/y usunięcia pacjenta?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Ta czynność spowoduje trwałe usunięcie pacjenta bez możliwości jej przywrócenia.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Anuluj</AlertDialogCancel>
                                                <AlertDialogAction asChild>
                                                    <Link href={route('dashboard.patient.delete', patient.id)}>Potwierdz</Link>
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </PatientSingleCard>
                        </React.Fragment>
                    ))}
                </div>
            ) : (
                <Alert>
                    <Ban />
                    <AlertTitle>Brak wyników!</AlertTitle>
                </Alert>
            )}
            {patients?.data.length !== 0 && (
                <AppPagination
                    lastPage={patients.last_page}
                    currentPage={patients.current_page}
                    url={'/dashboard/patients/get/all'}
                    search={search}
                />
            )}
        </DashboardLayout>
    );
};

export default GetAllPatients;
