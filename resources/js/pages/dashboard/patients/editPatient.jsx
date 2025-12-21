import PatientEdit from '../../../components/dashboard/patinets/patient-edit.jsx';
import Heading from '../../../components/heading.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const EditPatient = ({ patient, statuses }) => {
    return (
        <DashboardLayout>
            <Heading title={`Edytowanie pacjenta ${patient.full_name}`} />
            <PatientEdit patient={patient} />
        </DashboardLayout>
    );
};

export default EditPatient;
