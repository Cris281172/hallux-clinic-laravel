import { Alert, AlertTitle } from '@/components/ui/alert';
import { router } from '@inertiajs/react';
import { Ban, Settings, Trash } from 'lucide-react';
import React, { useState } from 'react';
import { route } from 'ziggy-js';
import AppPagination from '../../../components/app-pagination.jsx';
import DialogConfirmation from '../../../components/dashboard/dialog-confirmation.jsx';
import FullPatientsInfoSheet from '../../../components/dashboard/patinets/get/full-patients-info-sheet.jsx';
import PatientSingleCard from '../../../components/dashboard/patinets/patient-single-card.jsx';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../components/ui/dropdown-menu.tsx';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select.js';
import usePermissions from '../../../hooks/usePermissions.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const GetAllPatients = ({ data }) => {
    const { patients, filters, visitStatuses } = data;
    const [statusID, setStatusID] = useState(filters.status_id || '');
    const [search, setSearch] = useState(filters.search || '');
    const [addVisitOpen, setAddVisitOpen] = useState(null);
    const [infoOpen, setInfoOpen] = useState(null);
    const [optionsOpen, setOptionsOpen] = useState(null);

    const { checkUserHasPermission } = usePermissions();

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
                                {visitStatuses.map((status, index) => (
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
                <div className={'grid grid-cols-1 gap-5 xl:grid-cols-2'}>
                    {patients.data.map((patient, index) => (
                        <React.Fragment key={index}>
                            {infoOpen === patient.id && (
                                <FullPatientsInfoSheet open={infoOpen === patient.id} setOpen={setInfoOpen} patientID={infoOpen} />
                            )}
                            {/*{infoOpen === patient.id && <DetailsWindow patient={patient} open={infoOpen === patient.id} setOpen={setInfoOpen} />}*/}

                            <PatientSingleCard patient={patient}>
                                <div className={'absolute top-0 right-0 m-2 flex gap-2'}>
                                    <DialogConfirmation
                                        title={'Usunięcie pacjenta'}
                                        text={`Czy na pewno chcesz usunąć pacjenta "${patient.name}"?`}
                                        handleConfirmation={() => router.get(route('dashboard.patient.delete', patient.id))}
                                        confirmationAlert={'Pacjent został usunięty'}
                                    >
                                        <Trash className={'text-red-600'} />
                                    </DialogConfirmation>

                                    <DropdownMenu open={optionsOpen === index} onOpenChange={(value) => setOptionsOpen(value ? index : null)}>
                                        <DropdownMenuTrigger className={'cursor-pointer'}>
                                            <Settings />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                            <DropdownMenuItem
                                                onClick={() => {
                                                    setInfoOpen(patient.id);
                                                    setOptionsOpen(null);
                                                }}
                                            >
                                                Szczegóły
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
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
