import harmoniaLogo from '../../../assets/images/cooperation-company/harmonia.png';
import kingmedLogo from '../../../assets/images/cooperation-company/kingmed.svg';
import mypapsLogo from '../../../assets/images/cooperation-company/mypaps.png';
import halluxClinicLogo from '../../../assets/images/logo.webp';
import Container from '../../page/container.jsx';
import SectionHeader from './parts/section-header.jsx';

const CooperationCompanySection = () => {
    return (
        <div className="bg-gray-100 py-20">
            <Container>
                <SectionHeader
                    title={'Współpracujemy z'}
                    text={
                        'Współpracujemy z uznanymi markami i specjalistami, aby dostarczać produkty najwyższej jakości i zapewniać kompleksową obsługę naszych klientów.'
                    }
                />
                <div className="flex flex-wrap items-center justify-between gap-10 px-10">
                    <a href={'https://mypaps.eu/'} target={'_blank'}>
                        <img src={mypapsLogo} alt="MyPaps" className="h-16 grayscale transition-all duration-300 hover:grayscale-0" />
                    </a>
                    <a href={'https://www.kingmed.pl/pl/'} target={'_blank'}>
                        <img src={kingmedLogo} alt="KingMed" className="h-16 grayscale transition-all duration-300 hover:grayscale-0" />
                    </a>
                    <a href={'https://harmoniaenergii.pl/'} target={'_blank'}>
                        <img src={halluxClinicLogo} alt="KingMed" className="h-16 grayscale transition-all duration-300 hover:grayscale-0" />
                    </a>
                    <a href={'https://harmoniaenergii.pl/'} target={'_blank'}>
                        <img src={harmoniaLogo} alt="KingMed" className="h-16 grayscale transition-all duration-300 hover:grayscale-0" />
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default CooperationCompanySection;
