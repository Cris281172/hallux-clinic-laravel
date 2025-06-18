import headerBackground from '../assets/images/header.webp';
import PricesAccordion from '../components/prices-accordion.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import { allPrices } from '../config/configPrice.js';
import AppLayout from '../layouts/app-layout.jsx';
const PriceList = () => {
    return (
        <AppLayout>
            <SubpageHeader title={'Cennik'} background={headerBackground} />
            <SubpageLayoutContainer>
                <div className={'flex flex-col gap-5'}>
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
