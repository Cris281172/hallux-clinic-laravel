import { HiOutlinePhone } from 'react-icons/hi';
import { MdOutlineEmail } from 'react-icons/md';
import ageFromDate from '../../../utils/ageFromDate.js';
import { Card } from '../../ui/card.js';
import StatusPatient from '../status-patient.jsx';

const PatientSingleCard = ({ patient, children }) => {
    return (
        <Card className={'rounded-xl border-1 p-8'}>
            <div className={'mb-4 border-b-1 pb-4'}>
                <div className={'flex items-center justify-between'}>
                    <h3 className={'text-xl font-bold'}>
                        {patient.name} {patient.surname}
                    </h3>
                    <StatusPatient status={patient.status} />
                </div>
                <div>
                    Data urodzenia: {patient.birth_date} ({ageFromDate(patient.birth_date)} lat)
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
            <div>
                <div className={'flex items-center justify-between'}>
                    <p>Ostatnia wizyta:</p>
                    <p>{patient.lastVisit ? patient.lastVisit.date : 'Brak'}</p>
                </div>
                <div className={'flex items-center justify-between'}>
                    <p>Następna wizyta:</p>
                    <p>{patient.upcomingVisit ? patient.upcomingVisit.date : 'Brak'}</p>
                </div>
                <div className={'flex items-center justify-between'}>
                    <p>Liczba wizyt:</p>
                    <p>{patient.totalVisits ? patient.totalVisits : 0}</p>
                </div>
            </div>
            {children}
        </Card>
    );
};

export default PatientSingleCard;
