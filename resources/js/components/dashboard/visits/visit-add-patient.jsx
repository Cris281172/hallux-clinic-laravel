import { useEffect, useState } from 'react';
import AppPagination from '../../app-pagination.jsx';
import { Input } from '../../ui/input.js';
import { Label } from '../../ui/label.js';
import { RadioGroup, RadioGroupItem } from '../../ui/radio-group.js';
import PatientSingleCard from '../patinets/patient-single-card.jsx';

const VisitAddPatient = ({ setSelectedPatientID, selectedPatientID }) => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [patients, setPatients] = useState([]);

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
        <>
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
                <>
                    <RadioGroup
                        value={selectedPatientID}
                        onValueChange={(value) => setSelectedPatientID(value)}
                        className={'mb-10 grid grid-cols-2 gap-5'}
                    >
                        {patients.data && patients?.data.length !== 0 && (
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
                    <AppPagination
                        currentPage={patients.current_page}
                        lastPage={patients.last_page}
                        url={'/dashboard/visits/edit/175'}
                        queryParams={{ search: search }}
                    />
                </>
            )}
        </>
    );
};

export default VisitAddPatient;
