import VisitEdit from '../../../components/dashboard/visits/visit-edit.jsx';
import Heading from '../../../components/heading.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const EditVisit = ({ visit }) => {
    return (
        <DashboardLayout>
            <Heading title={'Edytuj widzytę'} />
            <VisitEdit visit={visit} selectPatientVisible={true} />
        </DashboardLayout>
    );
};

export default EditVisit;
