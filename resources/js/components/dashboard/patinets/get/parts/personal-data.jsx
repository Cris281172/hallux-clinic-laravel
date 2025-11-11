import { Cake, EditIcon, IdCard, MapPinHouse, User, UserPlus, VenusAndMars } from 'lucide-react';
import { useState } from 'react';
import { CiPhone } from 'react-icons/ci';
import { MdOutlineEmail } from 'react-icons/md';
import ageFromDate from '../../../../../utils/ageFromDate.js';
import formatDatePolish from '../../../../../utils/formatDatePolish.js';
import { Button } from '../../../../ui/button.tsx';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '../../../../ui/dialog.tsx';
import StatusPatient from '../../../status-patient.jsx';
import PatientEdit from '../../patient-edit.jsx';
const PersonalData = ({ patient, fetchPatient }) => {
    const [patientEditDialog, setPatientEditDialog] = useState(false);

    const patientInfoConfig = [
        {
            icon: <User size={18} />,
            text: `Imię i nazwisko: ${patient.full_name ? patient.full_name : 'Brak'}`,
        },
        {
            icon: <Cake size={18} />,
            text: `Data urodzenia: ${patient.birth_date ? `${formatDatePolish(patient.birth_date, false)} (${ageFromDate(patient.birth_date)} lat)` : 'Brak'}`,
        },
        {
            icon: <CiPhone size={18} />,
            text: `Numer telefonu: ${patient.phone ? patient.phone : 'Brak'}`,
        },
        {
            icon: <MdOutlineEmail size={18} />,
            text: `Email: ${patient.email ? patient.email : 'Brak'}`,
        },
        {
            icon: <VenusAndMars size={18} />,
            text: `Płeć: ${patient.gender ? (patient.gender === 'male' ? 'Mężczyzna' : 'Kobieta') : 'Brak'}`,
        },
        {
            icon: <MapPinHouse size={18} />,
            text: `Adres: ${patient.address ? patient.address : 'Brak'}`,
        },
        {
            icon: <IdCard size={18} />,
            text: `Karta pacjenta: ${patient.patient_card === 1 ? 'Uzupełniona' : 'Nie uzupełniona'}`,
        },
        {
            icon: <UserPlus size={18} />,
            text: `Stworzony: ${patient.created_at ? formatDatePolish(patient.created_at, false) : 'Brak'}`,
        },
    ];

    return (
        <>
            <div className={'mb-8 flex gap-3'}>
                <h2 className={'flex items-center gap-2 text-xl font-bold'}>Dane pacjenta</h2>
                <Dialog open={patientEditDialog} onOpenChange={() => setPatientEditDialog((prev) => !prev)}>
                    <DialogTrigger asChild>
                        <Button className={'cursor-pointer'} variant={'outline'}>
                            <EditIcon />
                            Edytuj pacjenta
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[650px]">
                        <DialogTitle>
                            <div>Edytowanie pacjenta</div>
                        </DialogTitle>
                        <PatientEdit patient={patient} onPatientUpdated={fetchPatient} />
                    </DialogContent>
                </Dialog>
            </div>
            <div className={'mb-3 flex items-center gap-2'}>
                Status:
                <StatusPatient status={patient.status} />
            </div>
            <ul className={'grid grid-cols-2 gap-4'}>
                {patientInfoConfig.map((item, index) => (
                    <li className={'flex items-center gap-1'} key={index}>
                        {item.icon}
                        <p>{item.text}</p>
                    </li>
                ))}
            </ul>
            <div className={'mt-5 flex flex-col gap-3'}>
                <p>
                    <strong>Opis</strong>: {patient.description ? patient.description : 'Brak opisu'}
                </p>
                <p>
                    <strong>Uwagi</strong>: {patient.comments ? patient.comments : 'Brak uwag'}
                </p>
            </div>
        </>
    );
};

export default PersonalData;
