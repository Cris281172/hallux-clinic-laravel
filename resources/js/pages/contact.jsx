import subpageHeader1 from '../assets/images/subpage-header/subpage-header-1.jpg';
import Map from '../components/map.jsx';
import ContactSection from '../components/page/contact-section.jsx';
import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const Contact = () => {
    return (
        <AppLayout>
            <SEO
                title={'Kontakt - Gabinet Podologiczny Łódź'}
                description={
                    'Skontaktuj się z Hallux Clinic w Łodzi. Zarezerwuj termin wizyty telefonicznie lub online. Znajdziesz tu adres, telefon oraz mapę dojazdu do gabinetu.'
                }
                url={'/kontakt'}
            />
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
