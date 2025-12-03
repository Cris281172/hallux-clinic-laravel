import headerBackground from '../../assets/images/header.webp';
import naturopathyMainImage from '../../assets/images/treatments/naturopathy/main.webp';
import podiatryMainImage from '../../assets/images/treatments/podiatry/main.webp';
import SEO from '../../components/page/SEO.jsx';
import SubpageHeader from '../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../components/subpage-layout-container.jsx';
import Tiles from '../../components/tiles.jsx';
import AppLayout from '../../layouts/app-layout.jsx';

const ServiceTypeSelector = () => {
    const servicesConfig = [
        {
            text: 'Podolog',
            url: route('service-category', 'podolog'),
            image: podiatryMainImage,
        },
        {
            text: 'Naturopata',
            url: route('service-category', 'naturopata'),
            image: naturopathyMainImage,
        },
    ];

    return (
        <AppLayout>
            <SEO
                title={'Zakres Usług Podologicznych w Łodzi'}
                description={
                    'Odkryj pełen zakres profesjonalnych zabiegów podologicznych. Specjalizuję się w terapii paznokci, usuwaniu brodawek wirusowych, pedicure medycznym i profilaktyce stopy cukrzycowej.'
                }
                url={'/uslugi'}
            />

            <SubpageHeader
                title={'Usługi'}
                background={headerBackground}
                text={
                    'Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj wizytę już dziś!'
                }
            />
            <SubpageLayoutContainer>
                <Tiles config={servicesConfig} />
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default ServiceTypeSelector;
