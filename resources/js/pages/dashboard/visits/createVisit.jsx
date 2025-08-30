import { router } from '@inertiajs/react';
import { useState } from 'react';
import VisitAddPatient from '../../../components/dashboard/visits/visit-add-patient.jsx';
import VisitCreate from '../../../components/dashboard/visits/visit-create.jsx';
import Heading from '../../../components/heading.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const CreateVisit = ({ statuses, users }) => {
    const [selectedPatientID, setSelectedPatientID] = useState(null);

    const [patientPhoneVisible, setPatientPhoneVisible] = useState(false);
    const [patientEmailVisible, setPatientEmailVisible] = useState(false);

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
                <VisitAddPatient
                    setSelectedPatientID={setSelectedPatientID}
                    setPatientEmailVisible={setPatientEmailVisible}
                    setPatientPhoneVisible={setPatientPhoneVisible}
                />
            </VisitCreate>
        </DashboardLayout>
    );
};

export default CreateVisit;
