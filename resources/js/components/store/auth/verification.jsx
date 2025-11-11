import { router } from '@inertiajs/react';
import { useState } from 'react';
import { Button } from '../../ui/button.js';

const Verification = () => {
    const [resendDisabled, setResendDisabled] = useState(false);

    const handleResend = () => {
        setResendDisabled(true);

        router.get(route('verification.resend'));

        // Wywołanie endpointu do ponownego wysłania maila
        // Inertia.post(
        //     '/verification/resend',
        //     {},
        //     {
        //         onFinish: () => {
        //             // po 30 sekundach włącz ponownie przycisk
        //             setTimeout(() => setResendDisabled(false), 30000);
        //         },
        //     },
        // );
    };

    return (
        <>
            <p>Aby aktywować swoje konto, sprawdź swoją skrzynkę mailową i kliknij w link weryfikacyjny.</p>
            <p>Nie otrzymałeś maila? Możesz wysłać go ponownie.</p>
            <div className={'flex gap-5'}>
                <Button variant={'darkPlum'} className={'flex-1'} onClick={handleResend} disabled={resendDisabled}>
                    {resendDisabled ? 'Wyślij ponownie za chwilę...' : 'Wyślij ponownie'}
                </Button>
                <Button className={'flex-1'}>Zmień konto</Button>
            </div>
        </>
    );
};

export default Verification;
