import formatDatePolish from '../../../../../utils/formatDatePolish.js';
import { Card, CardDescription, CardHeader, CardTitle } from '../../../../ui/card.tsx';

const Summary = ({ patient }) => {
    return (
        <>
            <div className={'mb-8 flex gap-3'}>
                <h2 className={'flex items-center gap-2 text-xl font-bold'}>Podsumowanie</h2>
            </div>
            <div className={'grid grid-cols-1 gap-5'}>
                <Card>
                    <CardHeader>
                        <CardDescription className={'flex items-center justify-between'}>Wykonane wizyty</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">{patient.totalVisits}</CardTitle>
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
        </>
    );
};

export default Summary;
