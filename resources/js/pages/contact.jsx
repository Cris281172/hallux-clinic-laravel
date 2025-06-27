import headerBackground from '../assets/images/header.webp';
import Map from '../components/map.jsx';
import ContactSection from '../components/page/contact-section.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const Contact = () => {
    return (
        <AppLayout>
            <SubpageHeader title={'Kontakt'} background={headerBackground} />
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
