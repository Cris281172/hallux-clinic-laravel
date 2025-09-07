import subpageHeader2 from '../assets/images/subpage-header/subpage-header-2.jpg';
import SEO from '../components/page/SEO.jsx';
import PricesAccordion from '../components/prices-accordion.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import { allPrices } from '../config/configPrice.js';
import AppLayout from '../layouts/app-layout.jsx';
const PriceList = () => {
    return (
        <AppLayout>
            <SEO
                title={'Cennik Usług Podologicznych - Sprawdź Ceny Zabiegów'}
                description={
                    'Zapoznaj się z cennikiem usług gabinetu podologicznego Hallux Clinic w Łodzi. Transparentne ceny zabiegów na odciski, modzele, wrastające paznokcie i inne.'
                }
                url={'/cennik'}
            />
            <SubpageHeader
                title={'Cennik'}
                background={subpageHeader2}
                text={
                    'Sprawdź aktualny cennik zabiegów podologicznych w moim gabinecie w Łodzi. Poznaj ceny konsultacji, pedicure leczniczego, usuwania odcisków i innych usług.'
                }
            />
            <SubpageLayoutContainer>
                <div className={'flex flex-col gap-12'}>
                    <p className={'text-sm text-gray-700'}>
                        Ostateczna cena zabiegu może różnić się w zależności od ilości zużytego materiału lub stopnia zaawansowania choroby.
                    </p>
                    {allPrices.map((price, index) => (
                        <div key={index}>
                            <h2 className={'text-neon-blossom mb-3 text-2xl font-bold'}>{price.title}</h2>
                            <PricesAccordion data={price.items} category={price.link} variant={'plump'} />
                        </div>
                    ))}
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default PriceList;
