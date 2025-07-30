import { Link, usePage } from '@inertiajs/react';
import Heading from '../../components/heading.js';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card.js';
import DashboardLayout from '../../layouts/dashboard-layout.jsx';

const Dashboard = ({ userCountVisits, userAddPatientsCount }) => {
    const { props } = usePage();
    const user = props.auth.user;
    return (
        <DashboardLayout>
            <Heading title={'Strona główna'} />
            <div className={'flex items-center justify-between'}>
                <div className="flex items-center bg-gradient-to-tr">
                    <div className="flex w-max">
                        <h1 className="typing-once inline-block pt-1 pr-5 pb-1 text-5xl font-bold text-white">Witaj {user.name}!</h1>
                    </div>
                </div>
                {user.roles[0] && <div className={'mb-1 w-max rounded-sm bg-green-700 pt-1 pr-3 pb-1 pl-3 text-sm'}>{user.roles[0].name}</div>}
            </div>
            <div className={'mt-10 grid grid-cols-4 gap-5'}>
                <Card className="@container/card gap-2">
                    <CardHeader>
                        <CardDescription className={'flex items-center justify-between'}>Wykonane wizyty</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">{userCountVisits}</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <div className="line-clamp-1 flex gap-2 font-medium">Liczba Twoich wszystkich wykonanych wizyt</div>
                        <div className={'flex'}>
                            <Link
                                href={route('dashboard.visit.create.view', new Date().toLocaleDateString('pl-PL').replaceAll('/', '-'))}
                                className="text-muted-foreground underline"
                            >
                                Dodaj wizytę
                            </Link>
                            <Link
                                href={route('dashboard.visit.get.all', new Date().toLocaleDateString('pl-PL').replaceAll('/', '-'))}
                                className="text-muted-foreground underline"
                            >
                                Lista wizyt
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="@container/card gap-2">
                    <CardHeader>
                        <CardDescription className={'flex items-center justify-between'}>Dodani pacjenci</CardDescription>
                        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">{userAddPatientsCount}</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-sm">
                        <div className="line-clamp-1 flex gap-2 font-medium">Liczba Twoich wszystkich dodanych pacjentów</div>
                        <div className={'flex gap-2'}>
                            <Link href={route('dashboard.patient.create.view')} className="text-muted-foreground underline">
                                Dodaj pacjenta
                            </Link>
                            <Link href={route('dashboard.patient.get.all')} className="text-muted-foreground underline">
                                Lista pacjentów
                            </Link>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
