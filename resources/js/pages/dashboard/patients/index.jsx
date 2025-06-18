import React from 'react';
import { IoIosTrendingUp } from 'react-icons/io';
import ChartPatientsAge from '../../../components/dashboard/charts/chart-patients-age.jsx';
import ChartPatientsGender from '../../../components/dashboard/charts/chart-patients-gender.jsx';
import PatientSingleCard from '../../../components/dashboard/patinets/patient-single-card.jsx';
import Heading from '../../../components/heading.js';
import { Badge } from '../../../components/ui/badge.js';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const Patients = ({ statistics, latestPatients }) => {
    return (
        <DashboardLayout>
            <Heading title={'Wszyscy użytkownicy'} />
            <div className={'flex flex-col gap-1.5'}>
                <h2>Ostatnio dodani</h2>
                <div className={'mb-5 grid grid-cols-2 gap-5'}>
                    {latestPatients.map((item, index) => (
                        <React.Fragment key={index}>
                            <PatientSingleCard patient={item} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className={'flex flex-col gap-1.5'}>
                <h2>Statystyki</h2>
                <div className={'grid grid-cols-4 gap-5'}>
                    <Card className="@container/card gap-2">
                        <CardHeader>
                            <CardDescription className={'flex items-center justify-between'}>
                                Wszyscy pacjenci
                                <Badge variant="secondary">
                                    <IoIosTrendingUp />
                                    {statistics.newPatientsCount}%
                                </Badge>
                            </CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">{statistics.patientsCount}</CardTitle>
                        </CardHeader>
                        <CardFooter className="flex-col items-start gap-1.5 text-sm">
                            <div className="line-clamp-1 flex gap-2 font-medium">W tym miesiącu zyskuje na popularności</div>
                            <div className="text-muted-foreground">Liczba pacjentów z ostatniego miesiąca</div>
                        </CardFooter>
                    </Card>
                    <Card className="@container/card gap-2">
                        <CardHeader>
                            <CardDescription className={'flex items-center justify-between'}>
                                Aktywni pacjenci
                                <Badge variant="secondary">
                                    <IoIosTrendingUp />
                                    {statistics.newActivePatientsCount}%
                                </Badge>
                            </CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
                                {statistics.activePatientsCount}
                            </CardTitle>
                        </CardHeader>
                        <CardFooter className="flex-col items-start gap-1.5 text-sm">
                            <div className="line-clamp-1 flex gap-2 font-medium">W tym miesiącu zyskuje na popularności</div>
                            <div className="text-muted-foreground">Liczba aktywynch pacjentów z ostatniego miesiąca</div>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <ChartPatientsAge />
            <ChartPatientsGender />
        </DashboardLayout>
    );
};

export default Patients;
