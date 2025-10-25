import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import logo from '../../../assets/images/logo.webp';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../ui/dialog.tsx';
import SignIn from './sign-in.jsx';
import SignUp from './sign-up.jsx';
import VerificationSuccess from './verification-success.jsx';
import Verification from './verification.jsx';

const AuthDialog = () => {
    const { url, props } = usePage();
    const params = new URLSearchParams(url.split('?')[1]);
    const authParam = params.get('auth');
    const [open, setOpen] = useState(authParam);

    useEffect(() => {
        const channel = window.Echo.channel('auth-channel');

        channel.listen('.user.verified', () => {
            const url = new URL(window.location.href);
            url.searchParams.set('auth', 'weryfikacja-sukces');

            Inertia.replace(url.toString(), {
                preserveState: true,
                preserveScroll: true,
            });
        });

        return () => channel.stopListening('.user.verified');
    }, []);

    const authConfig = [
        {
            key: 'rejestracja',
            title: 'Rejestracja',
            component: <SignUp />,
        },
        {
            key: 'logowanie',
            title: 'Logowanie',
            component: <SignIn />,
        },
        {
            key: 'weryfikacja',
            title: 'Weryfikacja',
            component: <Verification />,
        },
        {
            key: 'weryfikacja-sukces',
            title: 'Udana weryfiakcja',
            component: <VerificationSuccess />,
        },
    ];

    const activeTab = authConfig.find((el) => el.key === authParam);

    if (props.auth.user && props.auth.user.email_verified_at && activeTab?.key !== 'weryfikacja-sukces') {
        return;
    }

    return (
        <Dialog
            open={open}
            onOpenChange={() => {
                const urlWithoutParams = window.location.pathname;
                window.history.replaceState({}, '', urlWithoutParams);
                setOpen(false);
            }}
        >
            <DialogContent>
                <DialogHeader>
                    <div className={'flex justify-center'}>
                        <img src={logo} alt={'Logo hallux clinic'} className={'w-1/2'} />
                    </div>
                    <DialogTitle className={'text-center text-xl'}>{activeTab?.title}</DialogTitle>
                    {activeTab?.component}
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default AuthDialog;
