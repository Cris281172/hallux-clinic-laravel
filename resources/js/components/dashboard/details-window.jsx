import { CiClock2, CiPhone } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';
import { route } from 'ziggy-js';

import { Link } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import formatDatePolish from '../../utils/formatDatePolish.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select.js';
import StatusPatient from './status-patient.jsx';
import StatusVisit from './status-visit.jsx';

const DetailsWindow = ({ patient }) => {
    const [visits, setVisits] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(null);
    const [loading, setLoading] = useState(false);
    const observerRef = useRef(null);
    const fetchVisits = async (page = 1) => {
        if (loading || (lastPage && page > lastPage)) return;

        setLoading(true);
        try {
            const res = await fetch(route('api.dashboard.visits.get.all.patient.visits', { id: patient.id, page }));
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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !loading && currentPage < lastPage) {
                    fetchVisits(currentPage + 1);
                }
            },
            { threshold: 1.0 },
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [currentPage, lastPage, loading]);

    const [textMoreID, setTextMoreID] = useState(null);
    const patientInfoConfig = [
        {
            icon: <IoPersonOutline />,
            text: `Data urodzenia: ${patient.birth_date ? formatDatePolish(patient.birth_date) : 'Brak'}`,
        },
        {
            icon: <CiPhone />,
            text: `Numer telefonu: ${patient.phone ? patient.phone : 'Brak'}`,
        },
        {
            icon: <MdOutlineEmail />,
            text: `Email: ${patient.email ? patient.email : 'Brak'}`,
        },
    ];

    return (
        <div className={'flex max-h-[500px] gap-5'}>
            <div className={'flex w-13/32 flex-col gap-5'}>
                <div className={'rounded-2xl border-1 p-4'}>
                    <p className={'font-bold'}>Dane osobowe</p>

                    <div className={'mt-1 mb-3 flex items-center gap-5'}>
                        <h3 className={'text-xl font-bold'}>
                            {patient.name} {patient.surname}
                        </h3>
                        <StatusPatient status={patient.status} />
                    </div>
                    <ul>
                        {patientInfoConfig.map((item, index) => (
                            <li className={'flex items-center gap-1'} key={index}>
                                {item.icon}
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                    <Link href={route('dashboard.patient.edit.view', patient.id)} className={'mt-2 flex underline' + ''}>
                        Edytuj dane
                    </Link>
                </div>
                <div className={'rounded-2xl border-1 p-4'}>
                    <p className={'font-bold'}>Statystyki</p>
                    <ul className={'mt-1'}>
                        <li className={'flex items-center'}>
                            <p>Liczba wizyt: {patient.totalVisits ? patient.totalVisits : 0}</p>
                        </li>
                        <li className={'flex items-center'}>
                            <p>Ostatnia wizyta: {patient.lastVisit ? patient.lastVisit.date : 'Brak'}</p>
                        </li>
                        <li className={'flex items-center'}>
                            <p>Następna wizyta: {patient.upcomingVisit ? patient.upcomingVisit.date : 'Brak'}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={'max-h-full w-19/32 overflow-y-scroll rounded-2xl border-1 p-4'}>
                <div className={'flex items-center justify-between gap-1'}>
                    <div className={'flex items-center gap-1'}>
                        <CiClock2 className={'text-xl text-green-700'} />
                        <p className={'text-xl font-bold'}>Wizyty</p>
                    </div>
                    <div className="grid items-center gap-1.5">
                        <Select defaultValue={'all'} onValueChange={(value) => setData('statusID', value)}>
                            <SelectTrigger className={'w-[200px]'}>
                                <SelectValue placeholder="Wybierz status wizyty" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value={'all'}>Wszystkie</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className={'mt-8 flex flex-col gap-8'}>
                    {visits.map((visit, index) => (
                        <div key={index} className={'border-l-6 pl-2'}>
                            <>
                                <div className={'flex items-center justify-between'}>
                                    <p>{formatDatePolish(visit.date)}</p>
                                    <StatusVisit status={visit.status} />
                                </div>
                                <div className="mt-2 w-full max-w-[500px] overflow-hidden">
                                    <p className={`${textMoreID === visit.id ? '' : 'truncate'} text-sm break-words`}>
                                        {visit.description ? visit.description : 'Brak opisu'}
                                    </p>
                                    <div className={'flex justify-between'}>
                                        <p
                                            onClick={() => setTextMoreID((prevState) => (prevState === visit.id ? null : visit.id))}
                                            className={`underline ${visit.description ? '' : 'invisible'}`}
                                        >
                                            {textMoreID === visit.id ? 'Schowaj' : 'Pokaż więcej'}
                                        </p>
                                        <Link href={route('dashboard.visit.edit.view', visit.id)} className={'underline'}>
                                            Edytuj
                                        </Link>
                                    </div>
                                </div>
                            </>
                        </div>
                    ))}
                    {loading && <div className="animate-pulse py-4 text-center text-gray-500">Ładowanie kolejnych wizyt...</div>}
                    <div ref={observerRef}></div>
                </div>
            </div>
        </div>
    );
};
export default DetailsWindow;
