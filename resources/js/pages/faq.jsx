import { FAQ as FAQComponent } from '../components/page/faq.jsx';
import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import { configFAQ } from '../config/configFAQ.js';
import AppLayout from '../layouts/app-layout.jsx';

const FAQ = () => {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: configFAQ.map((item) => ({
            '@type': 'Question',
            name: item.value,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.desc,
            },
        })),
    };

    return (
        <AppLayout>
            <SEO
                title={'Pytania i Odpowiedzi o Zabiegi Podologiczne'}
                description={
                    'Masz pytania dotyczące leczenia stóp? Sprawdź odpowiedzi na najczęstsze pytania pacjentów o zabiegi podologiczne, przygotowanie do wizyty i pielęgnację.'
                }
                url={'/faq'}
                structuredData={structuredData}
            />
            <SubpageHeader title={'FAQ'} text={'Najczęstsze pytania'} />
            <SubpageLayoutContainer>
                <FAQComponent data={configFAQ} />
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default FAQ;
