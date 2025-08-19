import { Head } from '@inertiajs/react';
import headerBackground from '../assets/images/header.webp';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import TreatmentsTiles from '../components/treatments-tiles.jsx';
import AppLayout from '../layouts/app-layout.jsx';

const Services = () => {
    return (
        <AppLayout>
            <Head>
                <title>Zakres Usług Podologicznych | Hallux Clinic w Łodzi</title>
                <meta
                    name="description"
                    content="Odkryj pełen zakres profesjonalnych zabiegów podologicznych. Specjalizuję się w terapii paznokci, usuwaniu brodawek wirusowych, pedicure medycznym i profilaktyce stopy cukrzycowej."
                />
            </Head>
            <SubpageHeader
                title={'Usługi'}
                background={headerBackground}
                text={
                    'Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj wizytę już dziś!'
                }
            />
            <SubpageLayoutContainer>
                <TreatmentsTiles />
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default Services;
