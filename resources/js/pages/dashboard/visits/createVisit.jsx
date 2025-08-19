import { router } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import PatientSingleCard from '../../../components/dashboard/patinets/patient-single-card.jsx';
import VisitCreate from '../../../components/dashboard/visits/visit-create.jsx';
import Heading from '../../../components/heading.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import { RadioGroup, RadioGroupItem } from '../../../components/ui/radio-group.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const CreateVisit = ({ statuses, users }) => {
    const [search, setSearch] = useState('');
    const [patients, setPatients] = useState();
    const [loading, setLoading] = useState(false);
    const [selectedPatientID, setSelectedPatientID] = useState(null);
    const fetchPatients = async (search = '') => {
        setLoading(true);
        try {
            const response = await fetch(route('api.dashboard.patients.get.all') + `?search=${encodeURIComponent(search)}`);
            const data = await response.json();
            setPatients(data.patients);
        } catch (err) {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPatients();
    }, []);

    return (
        <DashboardLayout>
            <Heading title={'Dodaj wizytę'} />
            <VisitCreate
                patientID={selectedPatientID}
                setAddVisitOpen={false}
                statuesVisit={statuses}
                onSuccess={() => router.visit(route('dashboard.patient.get.all'))}
                users={users}
            >
                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        await fetchPatients(search);
                    }}
                    className="mt-12 mb-6 grid w-full items-center gap-1.5"
                >
                    <Label>Wybierz pacjenta</Label>
                    <Input
                        type="text"
                        placeholder="Szukaj pacjenta po nazwie/email/numer telefonu..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </form>
                {loading ? (
                    'Ładowanie'
                ) : (
                    <RadioGroup onValueChange={(value) => setSelectedPatientID(value)} className={'grid grid-cols-2 gap-5'}>
                        {patients && patients?.data.length !== 0 && (
                            <>
                                {patients.data.map((patient, index) => (
                                    <PatientSingleCard patient={patient}>
                                        <div className="mt-5 flex items-center gap-3">
                                            <RadioGroupItem value={patient.id} id={patient.id} />
                                            <Label htmlFor={patient.id}>Wybierz pacjenta</Label>
                                        </div>
                                    </PatientSingleCard>
                                ))}
                            </>
                        )}
                    </RadioGroup>
                )}
            </VisitCreate>
        </DashboardLayout>
    );
};

export default CreateVisit;
