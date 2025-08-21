import { FaUser, FaUserDoctor } from 'react-icons/fa6';
import formatDatePolish from '../../../utils/formatDatePolish.js';
import { Card } from '../../ui/card.js';
import StatusVisit from '../status-visit.jsx';

const VisitSingleCard = ({ children, visit }) => {
    return (
        <Card className={'justify-between rounded-xl border-1 p-8'}>
            <div className={'mb-4 border-b-1 pb-4'}>
                <div className={'flex items-center justify-between'}>
                    <div className={'text-lg font-bold'}>{formatDatePolish(visit.date)}</div>
                    <StatusVisit status={visit.status} />
                </div>
                <div className={'flex items-center gap-1'}>
                    <FaUserDoctor className={'text-sm text-blue-700'} />
                    <p>Lekarz: {visit.user?.name}</p>
                </div>
                <div className={'flex items-center gap-1'}>
                    <FaUser className={'text-sm'} />
                    <p>Pacjent: {visit.patient?.full_name}</p>
                </div>
                {visit.price && +visit.price !== 0 && <p>Kod: {visit.price}</p>}
                <div className="line-clamp-5 w-full overflow-hidden">{visit.description ? visit.description : 'Brak opisu'}</div>
            </div>
            {children}
        </Card>
    );
};

export default VisitSingleCard;
