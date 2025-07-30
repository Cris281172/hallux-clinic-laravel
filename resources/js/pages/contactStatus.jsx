import headerBackground from '../assets/images/header.webp';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const ContactStatus = ({ status }) => {
    return (
        <AppLayout>
            <SubpageHeader title={'kontakt'} background={headerBackground} />
            <SubpageLayoutContainer>{status}</SubpageLayoutContainer>
        </AppLayout>
    );
};

export default ContactStatus;
