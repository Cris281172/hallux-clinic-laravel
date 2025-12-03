import naturopathyTreatment1Image from '../../assets/images/treatments/naturopathy/treatment1.webp';
import naturopathyTreatment2Image from '../../assets/images/treatments/naturopathy/treatment2.webp';
import naturopathyTreatment3Image from '../../assets/images/treatments/naturopathy/treatment3.webp';
import naturopathyTreatment4Image from '../../assets/images/treatments/naturopathy/treatment4.webp';
import podiatryTreatment1Image from '../../assets/images/treatments/podiatry/treatment1.webp';
import podiatryTreatment2Image from '../../assets/images/treatments/podiatry/treatment2.webp';
import podiatryTreatment3Image from '../../assets/images/treatments/podiatry/treatment3.webp';
import podiatryTreatment4Image from '../../assets/images/treatments/podiatry/treatment4.webp';
import podiatryTreatment5Image from '../../assets/images/treatments/podiatry/treatment5.webp';
import podiatryTreatment6Image from '../../assets/images/treatments/podiatry/treatment6.webp';
import SEO from '../../components/page/SEO.jsx';
import SubpageHeader from '../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../components/subpage-layout-container.jsx';
import Tiles from '../../components/tiles.jsx';
import AppLayout from '../../layouts/app-layout.jsx';

const ServiceCategoryList = ({ serviceType }) => {
    const serviceCategoryConfig = [
        {
            id: 'podolog',
            title: 'Zakres Usług Podologicznych w Łodzi Usługi',
            text: 'Odkryj pełen zakres profesjonalnych zabiegów podologicznych. Specjalizuję się w terapii paznokci, usuwaniu brodawek wirusowych, pedicure medycznym i profilaktyce stopy cukrzycowej.',
            seo: {
                title: 'Usługi',
                description:
                    'Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj wizytę już dziś!',
                url: '/uslugi/podolog',
            },
            tileItems: [
                {
                    text: 'Diagnostyka podologiczna',
                    url: route('service-item', { serviceType: 'podolog', categorySlug: 'diagnostyka-podologiczna' }),
                    image: podiatryTreatment1Image,
                },
                {
                    text: 'Profilaktyka podologiczna',
                    url: route('service-item', { serviceType: 'podolog', categorySlug: 'profilaktyka-podologiczna' }),
                    image: podiatryTreatment2Image,
                },
                {
                    text: 'Terpaie problemów skórnych',
                    url: route('service-item', { serviceType: 'podolog', categorySlug: 'terapie-problemow-skornych' }),
                    image: podiatryTreatment3Image,
                },
                {
                    text: 'Terapie problemów aparatu paznokciowego',
                    url: route('service-item', { serviceType: 'podolog', categorySlug: 'terapie-problemow-aparatu-paznokciowego' }),
                    image: podiatryTreatment4Image,
                },
                {
                    text: 'ortonyskja',
                    url: route('service-item', { serviceType: 'podolog', categorySlug: 'ortonyskja' }),
                    image: podiatryTreatment5Image,
                },
                {
                    text: 'zabiegi uzupełniające',
                    url: route('service-item', { serviceType: 'podolog', categorySlug: 'zabiegi-uzupelniajace' }),
                    image: podiatryTreatment6Image,
                },
            ],
        },
        {
            id: 'naturopata',
            title: 'Zakres Usług Podologicznych w Łodzi Usługi',
            text: 'Odkryj pełen zakres profesjonalnych zabiegów podologicznych. Specjalizuję się w terapii paznokci, usuwaniu brodawek wirusowych, pedicure medycznym i profilaktyce stopy cukrzycowej.',
            seo: {
                title: 'Usługi',
                description:
                    'Dbaj o swoje stopy! Zabiegi podologiczne to sposób na zdrowe i zadbane stopy. Usuń odciski. modzele i grzybicę. Zarezerwuj wizytę już dziś!',
                url: '/uslugi/podolog',
            },
            tileItems: [
                {
                    text: 'Dźwiękoterapia',
                    url: route('service-item', { serviceType: 'naturopata', categorySlug: 'dzwiekoterapia' }),
                    image: naturopathyTreatment1Image,
                },
                {
                    text: 'Refleksologia stóp',
                    url: route('service-item', { serviceType: 'naturopata', categorySlug: 'refleksologia-stop' }),
                    image: naturopathyTreatment2Image,
                },
                {
                    text: 'Bańki ogniowe',
                    url: route('service-item', { serviceType: 'naturopata', categorySlug: 'banki-ogniowe' }),
                    image: naturopathyTreatment4Image,
                },
                {
                    text: 'Konchowanie (lejowanie)',
                    url: route('service-item', { serviceType: 'naturopata', categorySlug: 'konchowanie' }),
                    image: naturopathyTreatment3Image,
                },
            ],
        },
    ];

    let currentConfig = serviceCategoryConfig.find((el) => el.id === serviceType);

    return (
        <AppLayout>
            <SEO title={currentConfig.seo.title} description={currentConfig.seo.description} url={currentConfig.seo.url} />
            <SubpageHeader title={currentConfig.title} text={currentConfig.text} />
            <SubpageLayoutContainer>
                <Tiles config={currentConfig.tileItems} />
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default ServiceCategoryList;
