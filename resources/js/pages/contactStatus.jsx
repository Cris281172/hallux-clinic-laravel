import { Head } from '@inertiajs/react';
import headerBackground from '../assets/images/header.webp';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const ContactStatus = ({ status }) => {
    return (
        <AppLayout>
            <Head>
                <title>Potwierdzenie Wysłania Wiadomości | Hallux Clinic</title>
                <meta name="description" content="Dziękuję za Twoją wiadomość. Została pomyślnie wysłana. Odpowiem najszybciej, jak to możliwe." />
                <meta name="robots" content="noindex, nofollow" />
            </Head>
            <SubpageHeader title={'kontakt'} background={headerBackground} />
            <SubpageLayoutContainer>{status}</SubpageLayoutContainer>
        </AppLayout>
    );
};

export default ContactStatus;
