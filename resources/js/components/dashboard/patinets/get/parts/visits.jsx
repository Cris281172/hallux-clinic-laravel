import { router } from '@inertiajs/react';
import { Ban, CalendarPlus, EditIcon, Trash } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DotLoader } from 'react-spinners';
import { route } from 'ziggy-js';
import usePermissions from '../../../../../hooks/usePermissions.js';
import formatDatePolish from '../../../../../utils/formatDatePolish.js';
import { Alert, AlertTitle } from '../../../../ui/alert.tsx';
import { Button } from '../../../../ui/button.tsx';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../../../ui/dialog.tsx';
import { ScrollArea } from '../../../../ui/scroll-area.tsx';
import DialogConfirmation from '../../../dialog-confirmation.jsx';
import StatusVisit from '../../../status-visit.jsx';
import VisitCreate from '../../../visits/visit-create.jsx';
import VisitEdit from '../../../visits/visit-edit.jsx';

const Visits = ({ patientID }) => {
    const [visits, setVisits] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [addVisitDialog, setAddVisitDialog] = useState(false);
    const [visitEditDialog, setVisitEditDialog] = useState(false);

    const { checkUserHasPermission } = usePermissions();

    const fetchVisits = async (page = 1) => {
        if (loading || (lastPage && page > lastPage)) return;

        setLoading(true);
        try {
            const url = route('api.dashboard.visits.get.all.patient.visits', { id: patientID }, false);
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
        setVisits([]);
        fetchVisits();
    }, [addVisitDialog, visitEditDialog]);

    const nextPageVisits = () => {
        fetchVisits(currentPage + 1);
    };

    return (
        <>
            <div className={'mb-8 flex gap-3'}>
                <h2 className={'flex items-center gap-2 text-xl font-bold'}>Wizyty</h2>
                <Dialog open={addVisitDialog} onOpenChange={(value) => setAddVisitDialog((prev) => !prev)}>
                    <DialogTrigger asChild>
                        <Button className={'cursor-pointer'} variant={'outline'}>
                            <CalendarPlus size={20} />
                            Dodaj wizytę
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[650px]">
                        <DialogTitle>
                            <div>Dodawanie wizyty do pacjenta</div>
                        </DialogTitle>
                        <VisitCreate allowWithoutPatient={false} patientID={patientID} onSuccess={() => setAddVisitDialog(false)} className="px-4" />
                    </DialogContent>
                </Dialog>
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
                                            <strong>Cena zabiegu:</strong> {visit.price && +visit.price !== 0 ? `${visit.price} zł` : 'Brak ceny'}
                                        </p>
                                    </div>
                                    <div className={'mt-3 flex gap-3'}>
                                        <Dialog open={visitEditDialog} onOpenChange={() => setVisitEditDialog((prev) => !prev)}>
                                            <DialogTrigger asChild>
                                                <Button className={'cursor-pointer'} variant={'outline'}>
                                                    <EditIcon />
                                                    Edytuj wizytę
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[650px]">
                                                <DialogTitle>
                                                    <div>Dodawanie wizyty do pacjenta</div>
                                                </DialogTitle>
                                                <VisitEdit
                                                    allowWithoutPatient={false}
                                                    patientID={patientID}
                                                    visit={visit}
                                                    onSuccess={() => setVisitEditDialog(false)}
                                                />
                                            </DialogContent>
                                        </Dialog>

                                        {checkUserHasPermission('usuwanie wizyt') && (
                                            <DialogConfirmation
                                                title={'Czy jesteś pewień usunięcia wizyty?'}
                                                text={'Po usunięciu wizyty nie będzie można jej przywrócić.'}
                                                confirmationAlert={'Usunięto wizytę'}
                                                handleConfirmation={() => {
                                                    router.get(route('dashboard.visit.delete', visit.id), {}, { preserveState: true });
                                                    setVisits((prevState) => prevState.filter((el) => el.id !== visit.id));
                                                }}
                                            >
                                                <Button variant={'outline'}>
                                                    <Trash />
                                                    Usuń
                                                </Button>
                                            </DialogConfirmation>
                                        )}
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

                {loading && (
                    <div className={'mt-5 flex w-full justify-center'}>
                        <DotLoader size={32} color={'#fff'} />
                    </div>
                )}

                {currentPage < lastPage && (
                    <Button variant={'outline'} className={'mt-5 w-full'} onClick={nextPageVisits}>
                        Pokaż więcej
                    </Button>
                )}
                <div className={'h-50'}></div>
            </ScrollArea>
        </>
    );
};

export default Visits;
