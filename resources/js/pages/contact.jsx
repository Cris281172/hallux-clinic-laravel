import { Head } from '@inertiajs/react';
import subpageHeader1 from '../assets/images/subpage-header/subpage-header-1.jpg';
import Map from '../components/map.jsx';
import ContactSection from '../components/page/contact-section.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const Contact = () => {
    return (
        <AppLayout>
            <Head>
                <title>Kontakt i Rejestracja Wizyt | Gabinet Podologiczny w Łodzi</title>
                <meta
                    name="description"
                    content="Skontaktuj się, aby umówić wizytę w gabinecie podologicznym w Łodzi. Znajdziesz tu adres, numer telefonu, e-mail oraz wygodny formularz kontaktowy."
                />
            </Head>
            <SubpageHeader
                title={'Kontakt'}
                background={subpageHeader1}
                text={
                    'Skontaktuj się, aby umówić wizytę w gabinecie podologicznym w Łodzi. Znajdziesz tu adres, numer telefonu, e-mail oraz wygodny formularz kontaktowy.'
                }
            />
            <SubpageLayoutContainer>
                <ContactSection />
                <div className={'mt-10'}>
                    <Map />
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default Contact;
