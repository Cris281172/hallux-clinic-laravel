import { router } from '@inertiajs/react';
import { route } from 'ziggy-js';
import { Button } from '../../../../ui/button.tsx';
import DialogConfirmation from '../../../dialog-confirmation.jsx';

const Settings = ({ patient }) => {
    return (
        <>
            <div className={'mb-8 flex gap-3'}>
                <h2 className={'flex items-center gap-2 text-xl font-bold'}>Ustawienia</h2>
            </div>
            <DialogConfirmation
                title={'Usunięcie pacjenta'}
                text={`Czy na pewno chcesz usunąć pacjenta "${patient.full_name}"?`}
                handleConfirmation={() => router.get(route('dashboard.patient.delete', patient.id))}
                confirmationAlert={'Pacjent został usunięty'}
            >
                <Button variant={'destructive'}>Usuń pacjenta</Button>
            </DialogConfirmation>
        </>
    );
};

export default Settings;
