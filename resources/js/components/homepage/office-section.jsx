import { Accessibility, HeartHandshake, Music, ShoppingCart, SquareParking, TicketCheck } from 'lucide-react';
import officeImage from '../../assets/images/office/office.webp';
import HeadingHome from '../heading-home.jsx';
import Container from '../page/container.jsx';
import { Button } from '../ui/button.tsx';

const OfficeSection = () => {
    const benefitsConfig = [
        {
            title: 'Relaksująca atmosfera',
            Icon: <Music size={32} className={'text-electric-romance'} />,
        },
        {
            title: 'Udogodnienia',
            Icon: <Accessibility size={32} className={'text-electric-romance'} />,
        },
        {
            title: 'Łatwy dojazd i parking',
            Icon: <SquareParking size={32} className={'text-electric-romance'} />,
        },
        {
            title: 'Sprzedaż specjalistyczna',
            Icon: <ShoppingCart size={32} className={'text-electric-romance'} />,
        },
        {
            title: 'Bony podarunkowe',
            Icon: <TicketCheck size={32} className={'text-electric-romance'} />,
        },
        {
            title: 'Bezpieczeństwo i higiena',
            Icon: <HeartHandshake size={32} className={'text-electric-romance'} />,
        },
        {
            title: 'Nowoczesny i ergonomiczny',
            Icon: <HeartHandshake size={32} className={'text-electric-romance'} />,
        },
    ];

    return (
        <section className="bg-gray-200 pt-20 pb-20">
            <Container>
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-25">
                    <div className="w-full md:w-18/32">
                        <HeadingHome
                            title="Gabinet stacjonarny"
                            titleClasName="text-dark-plum"
                            text="Nowoczesny gabinet w centrum Łodzi został zaprojektowany z myślą o Twoim komforcie. To miejsce, w którym panuje przyjazna atmosfera, a najwyższe standardy higieny i nowoczesny sprzęt gwarantują bezpieczne i skuteczne zabiegi."
                        />

                        <div className="mt-10 w-full overflow-hidden">
                            <div className="carousel animate-scroll flex gap-6 py-5">
                                {[...benefitsConfig, ...benefitsConfig].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex min-h-[9rem] w-50 flex-col items-center justify-between rounded-2xl bg-white p-6 text-center shadow-md"
                                    >
                                        <div className="text-dark-plum flex h-16 items-center justify-center text-4xl">{item.Icon}</div>
                                        <h4 className="text-dark-plum mt-4 h-12 overflow-hidden text-sm font-semibold sm:text-base">{item.title}</h4>
                                        <div className="mt-2"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-2 text-center">
                            <h4 className="text-dark-plum text-lg font-bold">Godziny otwarcia</h4>
                            <p className="text-gray-700">Pon – Pt: 10:00 – 18:00</p>
                            <p className="text-gray-700">Sob – Nd: nieczynne</p>
                        </div>
                        <div className="mt-5 flex flex-row items-center justify-center gap-5">
                            <Button size={'lg'} variant={'darkPlum'} asChild>
                                <a href="https://maps.app.goo.gl/AYsaeVkj7LU1nRSY6" target="_blank">
                                    Jak dojechać?
                                </a>
                            </Button>
                            <Button size={'lg'} variant={'darkPlum'} asChild>
                                <a href="tel:+48459410096">Umów wizytę</a>
                            </Button>
                        </div>
                    </div>

                    <div className="flex w-full justify-center md:w-14/32">
                        <img
                            src={officeImage}
                            alt="Gabinet podologiczny"
                            className="aspect-square w-full max-w-md rounded-2xl object-cover shadow-2xl"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OfficeSection;
