import bannerFAQ from '../assets/images/banners/banner-faq.png';
import { FAQ as FAQComponent } from '../components/page/faq.jsx';
import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import { configFAQ } from '../config/configFAQ.js';
import AppLayout from '../layouts/app-layout.jsx';

const FAQ = () => {
    return (
        <AppLayout>
            <SEO
                title={'Pytania i Odpowiedzi o Zabiegi Podologiczne'}
                description={
                    'Masz pytania dotyczące leczenia stóp? Sprawdź odpowiedzi na najczęstsze pytania pacjentów o zabiegi podologiczne, przygotowanie do wizyty i pielęgnację.'
                }
                url={'/faq'}
            />
            <SubpageHeader title={'FAQ'} text={'Najczęstsze pytania'} background={bannerFAQ} />
            <SubpageLayoutContainer>
                <FAQComponent data={configFAQ} variant={'primary'} />
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default FAQ;
