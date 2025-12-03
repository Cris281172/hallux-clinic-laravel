import treatment1Image from '../../assets/images/treatments/podiatry/treatment1.webp';
import treatment2Image from '../../assets/images/treatments/podiatry/treatment2.webp';
import treatment3Image from '../../assets/images/treatments/podiatry/treatment3.webp';
import treatment4Image from '../../assets/images/treatments/podiatry/treatment4.webp';
import treatment5Image from '../../assets/images/treatments/podiatry/treatment5.webp';
import treatment6Image from '../../assets/images/treatments/podiatry/treatment6.webp';
import HeadingHome from '../heading-home.jsx';
import Container from '../page/container.jsx';
import Tiles from '../tiles.jsx';

const TreatmentSection = () => {
    const treatmentsConfig = [
        {
            text: 'Diagnostyka podologiczna',
            url: route('service-item', { serviceType: 'podolog', categorySlug: 'diagnostyka-podologiczna' }),
            image: treatment1Image,
        },
        {
            text: 'Profilaktyka podologiczna',
            url: route('service-item', { serviceType: 'podolog', categorySlug: 'profilaktyka-podologiczna' }),
            image: treatment2Image,
        },
        {
            text: 'Terpaie problemów skórnych',
            url: route('service-item', { serviceType: 'podolog', categorySlug: 'terapie-problemow-skornych' }),
            image: treatment3Image,
        },
        {
            text: 'Terapie problemów aparatu paznokciowego',
            url: route('service-item', { serviceType: 'podolog', categorySlug: 'terapie-problemow-aparatu-paznokciowego' }),
            image: treatment4Image,
        },
        {
            text: 'ortonyskja',
            url: route('service-item', { serviceType: 'podolog', categorySlug: 'ortonyksja' }),
            image: treatment5Image,
        },
        {
            text: 'zabiegi uzupełniające',
            url: route('service-item', { serviceType: 'podolog', categorySlug: 'zabiegi-uzupelniajace' }),
            image: treatment6Image,
        },
    ];
    return (
        <section className={'bg-gray-200 pt-20 pb-20'}>
            <Container>
                <div className={'flex w-full flex-col items-center'}>
                    <HeadingHome
                        title={'Zabiegi podologiczne'}
                        text={
                            'Oferujemy pełen zakres profesjonalnych zabiegów podologicznych – od usuwania odcisków i modzeli, po terapię wrastających paznokci i pielęgnację skóry stóp. Każdy zabieg dobieramy indywidualnie, by przywrócić Twoim stopom zdrowie i lekkość.'
                        }
                        titleClasName={'text-dark-plum'}
                    />
                </div>
                <Tiles config={treatmentsConfig} />
            </Container>
        </section>
    );
};

export default TreatmentSection;
