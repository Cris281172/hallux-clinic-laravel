import { CiPhone } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import { route } from 'ziggy-js';

import { Link, router } from '@inertiajs/react';
import { Ban, Cake, EditIcon, IdCard, MapPinHouse, Trash, User, UserPlus, VenusAndMars } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import ageFromDate from '../../utils/ageFromDate.js';
import formatDatePolish from '../../utils/formatDatePolish.js';
import { Alert, AlertTitle } from '../ui/alert.tsx';
import { Button } from '../ui/button.tsx';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card.tsx';
import { ScrollArea } from '../ui/scroll-area.tsx';
import { Sheet, SheetContent } from '../ui/sheet.tsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs.tsx';
import DialogConfirmation from './dialog-confirmation.jsx';
import StatusPatient from './status-patient.jsx';
import StatusVisit from './status-visit.jsx';

const DetailsWindow = ({ patient, open = true, setOpen }) => {
    const [visits, setVisits] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(null);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef(null);
    const [activeTab, setActiveTab] = useState('summary');

    const fetchVisits = async (page = 1) => {
        if (loading || (lastPage && page > lastPage)) return;

        setLoading(true);
        try {
            const url = route('api.dashboard.visits.get.all.patient.visits', { id: patient.id }, false);
            const res = await fetch(`${url}?page=${page}`);
            const data = await res.json();
            setVisits((prev) => [...prev, ...data.visits.data]);
            setCurrentPage(data.visits.current_page);
            setLastPage(data.visits.last_page);
        } catch (error) {
            console.error('Błąd podczas pobierania wizyt:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVisits();
    }, []);

    const nextPageVisits = () => {
        fetchVisits(currentPage + 1);
    };

    const patientInfoConfig = [
        {
            icon: <User size={18} />,
            text: `Imię i nazwisko: ${patient.full_name ? patient.full_name : 'Brak'}`,
        },
        {
            icon: <Cake size={18} />,
            text: `Data urodzenia: ${patient.birth_date ? `${formatDatePolish(patient.birth_date, false)} (${ageFromDate(patient.birth_date)} lat)` : 'Brak'}`,
        },
        {
            icon: <CiPhone size={18} />,
            text: `Numer telefonu: ${patient.phone ? patient.phone : 'Brak'}`,
        },
        {
            icon: <MdOutlineEmail size={18} />,
            text: `Email: ${patient.email ? patient.email : 'Brak'}`,
        },
        {
            icon: <VenusAndMars size={18} />,
            text: `Płeć: ${patient.gender ? (patient.gender === 'male' ? 'Mężczyzna' : 'Kobieta') : 'Brak'}`,
        },
        {
            icon: <MapPinHouse size={18} />,
            text: `Adres: ${patient.address ? patient.address : 'Brak'}`,
        },
        {
            icon: <IdCard size={18} />,
            text: `Karta pacjenta: ${patient.patient_card === 1 ? 'Uzupełniona' : 'Nie uzupełniona'}`,
        },
        {
            icon: <UserPlus size={18} />,
            text: `Stworzony: ${patient.created_at ? formatDatePolish(patient.created_at, false) : 'Brak'}`,
        },
    ];

    return (
        <>
            <Sheet open={open} onOpenChange={() => setOpen(false)}>
                <SheetContent className={'min-w-2/4'}>
                    <Tabs
                        value={activeTab}
                        onValueChange={(val) => setActiveTab(val)}
                        defaultValue="summary"
                        orientation="vertical"
                        className="relative flex gap-6"
                    >
                        <TabsList aria-label="Manage your account" className="flex w-full border-r-2 px-14 py-6">
                            <TabsTrigger value="summary" className="my-2 rounded-full px-10 py-4">
                                Podsumowanie
                            </TabsTrigger>
                            <TabsTrigger value="visits" className="my-2 rounded-full px-10 py-4">
                                Wizyty
                            </TabsTrigger>
                            <TabsTrigger value="patient-data" className="my-2 rounded-full px-10 py-4">
                                Dane pacjenta
                            </TabsTrigger>
                            <TabsTrigger value="settings" className="my-2 rounded-full px-10 py-4">
                                Ustawienia
                            </TabsTrigger>
                        </TabsList>

                        <div className="flex-1 p-4 px-10">
                            <TabsContent value="summary">
                                <div className={'mb-8 flex gap-3'}>
                                    <h2 className={'flex items-center gap-2 text-xl font-bold'}>Podsumowanie</h2>
                                </div>
                                <div className={'grid grid-cols-1 gap-5'}>
                                    <Card>
                                        <CardHeader>
                                            <CardDescription className={'flex items-center justify-between'}>Wykonane wizyty</CardDescription>
                                            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                                {patient.totalVisits}
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardDescription className={'flex items-center justify-between'}>Następna wizyta</CardDescription>
                                            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                                {patient.upcomingVisit ? formatDatePolish(patient.upcomingVisit.date) : 'Brak'}
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardDescription className={'flex items-center justify-between'}>Ostatnia wizyta</CardDescription>
                                            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                                {patient.lastVisit ? formatDatePolish(patient.lastVisit.date) : 'Brak'}
                                            </CardTitle>
                                        </CardHeader>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="visits">
                                <div className={'mb-8 flex gap-3'}>
                                    <h2 className={'flex items-center gap-2 text-xl font-bold'}>Wizyty</h2>
                                </div>
                                <ScrollArea className="h-screen w-full rounded-md border-0">
                                    <div className={'flex flex-col gap-8'}>
                                        {visits.length !== 0 ? (
                                            visits.map((visit, index) => (
                                                <div key={index} className={'border-l-6 py-4 pl-2'}>
                                                    <>
                                                        <div className={'flex flex-col gap-2'}>
                                                            <div className={'flex'}>
                                                                <StatusVisit status={visit.status} />
                                                            </div>

                                                            <p>
                                                                <span className={'text-2xl'}>{formatDatePolish(visit.date, true)}</span>
                                                            </p>
                                                            <p>
                                                                <strong>Osoba tworząca:</strong> {visit.user?.name}
                                                            </p>
                                                            <p>
                                                                <strong>Data utworzenia:</strong> {formatDatePolish(visit.created_at, false)}
                                                            </p>
                                                            <p>
                                                                <strong>Opis wizyty:</strong> {visit.description ? visit.description : 'Brak opisu'}
                                                            </p>
                                                            <p>
                                                                <strong>Cena zabiegu:</strong>{' '}
                                                                {visit.price && +visit.price !== 0 ? visit.price : 'Brak ceny'}
                                                            </p>
                                                        </div>
                                                        <div className={'mt-3 flex gap-3'}>
                                                            <Button variant={'outline'} asChild>
                                                                <Link href={route('dashboard.visit.edit.view', visit.id)}>
                                                                    <EditIcon />
                                                                    Edytuj
                                                                </Link>
                                                            </Button>
                                                            <Button variant={'outline'}>
                                                                <Trash />
                                                                Usuń
                                                            </Button>
                                                        </div>
                                                    </>
                                                </div>
                                            ))
                                        ) : (
                                            <Alert>
                                                <Ban />
                                                <AlertTitle>Brak wizyt!</AlertTitle>
                                            </Alert>
                                        )}
                                    </div>

                                    {loading && <div className="animate-pulse py-4 text-center text-gray-500">Ładowanie kolejnych wizyt...</div>}

                                    {currentPage < lastPage && (
                                        <Button variant={'outline'} className={'mt-5 w-full'} onClick={nextPageVisits}>
                                            Pokaż więcej
                                        </Button>
                                    )}
                                    <div className={'h-50'}></div>
                                </ScrollArea>
                            </TabsContent>
                            <TabsContent value="patient-data">
                                <div className={'mb-8 flex gap-3'}>
                                    <h2 className={'flex items-center gap-2 text-xl font-bold'}>Dane pacjenta</h2>
                                    <Button variant={'outline'} asChild={true}>
                                        <Link href={route('dashboard.patient.edit.view', patient.id)}>
                                            <EditIcon size={20} className={'cursor-pointer'} />
                                            Edytuj
                                        </Link>
                                    </Button>
                                </div>
                                <div className={'mb-3 flex items-center gap-2'}>
                                    Status:
                                    <StatusPatient status={patient.status} />
                                </div>
                                <ul className={'grid grid-cols-2 gap-4'}>
                                    {patientInfoConfig.map((item, index) => (
                                        <li className={'flex items-center gap-1'} key={index}>
                                            {item.icon}
                                            <p>{item.text}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className={'mt-5 flex flex-col gap-3'}>
                                    <p>
                                        <strong>Opis</strong>: {patient.description ? patient.description : 'Brak opisu'}
                                    </p>
                                    <p>
                                        <strong>Uwagi</strong>: {patient.comments ? patient.comments : 'Brak uwag'}
                                    </p>
                                </div>
                            </TabsContent>
                            <TabsContent value="settings">
                                <div className={'mb-8 flex gap-3'}>
                                    <h2 className={'flex items-center gap-2 text-xl font-bold'}>Ustawienia</h2>
                                </div>
                                <DialogConfirmation
                                    title={'Usunięcie pacjenta'}
                                    text={`Czy na pewno chcesz usunąć pacjenta "${patient.full_name}"?`}
                                    handleConfirmation={() => router.get(route('dashboard.patient.delete', patient.id))}
                                    confirmationAlert={'Pacjent został usunięty'}
                                >
                                    <Button variant={'destructive'}>Usuń pacjenta</Button>
                                </DialogConfirmation>
                            </TabsContent>
                        </div>
                    </Tabs>
                </SheetContent>
            </Sheet>
        </>
    );
};
export default DetailsWindow;
