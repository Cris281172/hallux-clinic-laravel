import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { route } from 'ziggy-js';
import { CardTitle } from '../../../ui/card.tsx';
import { Sheet, SheetContent } from '../../../ui/sheet.tsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/tabs.tsx';
import PersonalData from './parts/personal-data.jsx';
import Settings from './parts/settings.jsx';
import Summary from './parts/summary.jsx';
import Visits from './parts/visits.jsx';

const FullPatientsInfoSheet = ({ open, setOpen, patientID, visitStatuses }) => {
    const [loading, setLoading] = useState(true);
    const [patient, setPatient] = useState(null);

    const fetchPatient = async () => {
        setLoading(true);
        try {
            const response = await fetch(route('api.dashboard.patients.get', { id: patientID }));
            const data = await response.json();

            if (data.success) {
                setPatient(data.data);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPatient();
    }, []);

    return (
        <Sheet open={open} onOpenChange={() => setOpen(false)}>
            <SheetContent className={'min-w-2/4'}>
                {loading ? (
                    <div className={'flex h-screen items-center justify-center'}>
                        <BeatLoader size={32} color={'#fff'} />
                    </div>
                ) : (
                    <>
                        <CardTitle className={'mt-3 ml-5 text-xl'}>{patient.full_name}</CardTitle>
                        <Tabs defaultValue="summary" orientation="vertical" className="relative flex gap-6">
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
                                    <Summary patient={patient} />
                                </TabsContent>
                                <TabsContent value="visits">
                                    <Visits visitStatuses={visitStatuses} patientID={patient.id} />
                                </TabsContent>
                                <TabsContent value="patient-data">
                                    <PersonalData patient={patient} fetchPatient={fetchPatient} />
                                </TabsContent>
                                <TabsContent value="settings">
                                    <Settings patient={patient} />
                                </TabsContent>
                            </div>
                        </Tabs>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default FullPatientsInfoSheet;
