import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineEmail } from 'react-icons/md';
import ageFromDate from '../../../utils/ageFromDate.js';
import formatDatePolish from '../../../utils/formatDatePolish.js';
import { Card } from '../../ui/card.js';
import StatusPatient from '../status-patient.jsx';

const PatientSingleCard = ({ patient, children, visitInfoVisible = true }) => {
    return (
        <Card className={'relative rounded-xl border-1 px-8 py-12'}>
            <div className={` ${visitInfoVisible ? 'mb-4 border-b-1 pb-4' : ''} `}>
                <div className={'flex items-center justify-between'}>
                    <h3 className={'text-xl font-bold'}>{patient.full_name}</h3>
                    <StatusPatient status={patient.status} />
                </div>
                <div>
                    Data urodzenia: {formatDatePolish(patient.birth_date, false)} ({ageFromDate(patient.birth_date)} lat)
                </div>
                <ul>
                    <li className={'flex items-center gap-1'}>
                        <HiOutlinePhone />
                        {patient.phone ? patient.phone : 'Brak'}
                    </li>
                    <li className={'flex items-center gap-1'}>
                        <MdOutlineEmail />
                        {patient.email ? patient.email : 'Brak'}
                    </li>
                </ul>
            </div>
            {visitInfoVisible && (
                <div>
                    <div className={'flex items-center justify-between'}>
                        <p>Ostatnia wizyta:</p>
                        <p>{patient.lastVisit ? formatDatePolish(patient.lastVisit.date) : 'Brak'}</p>
                    </div>
                    <div className={'flex items-center justify-between'}>
                        <p>Następna wizyta:</p>
                        <p>{patient.upcomingVisit ? formatDatePolish(patient.upcomingVisit.date) : 'Brak'}</p>
                    </div>
                    <div className={'flex items-center justify-between'}>
                        <p>Liczba wizyt:</p>
                        <p>{patient.totalVisits ? patient.totalVisits : 0}</p>
                    </div>
                </div>
            )}

            {children}
        </Card>
    );
};

export default PatientSingleCard;
