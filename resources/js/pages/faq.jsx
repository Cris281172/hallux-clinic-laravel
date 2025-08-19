import { Head } from '@inertiajs/react';
import bannerFAQ from '../assets/images/banners/banner-faq.png';
import { FAQ as FAQComponent } from '../components/page/faq.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import { configFAQ } from '../config/configFAQ.js';
import AppLayout from '../layouts/app-layout.jsx';

const FAQ = () => {
    return (
        <AppLayout>
            <Head>
                <title>Najczęściej Zadawane Pytania (FAQ) | Hallux Clinic</title>
                <meta
                    name="description"
                    content="Znajdź odpowiedzi na pytania dotyczące zabiegów podologicznych, przygotowania do wizyty, zaleceń po zabiegu i pielęgnacji stóp w domu."
                />
            </Head>
            <SubpageHeader title={'FAQ'} text={'Najczęstsze pytania'} background={bannerFAQ} />
            <SubpageLayoutContainer>
                <FAQComponent data={configFAQ} variant={'primary'} />
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default FAQ;
