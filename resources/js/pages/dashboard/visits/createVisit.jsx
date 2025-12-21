import { router } from '@inertiajs/react';
import VisitCreate from '../../../components/dashboard/visits/visit-create.jsx';
import Heading from '../../../components/heading.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const CreateVisit = () => {
    return (
        <DashboardLayout>
            <Heading title={'Dodaj wizytę'} />
            <VisitCreate selectPatientVisible setAddVisitOpen={false} onSuccess={() => router.visit(route('dashboard.patient.get.all'))} />
        </DashboardLayout>
    );
};

export default CreateVisit;
