import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { BadgeInfo } from 'lucide-react';
import naturopathyImage1 from '../../assets/images/treatments/naturopathy/treatment1.webp';
import naturopathyImage2 from '../../assets/images/treatments/naturopathy/treatment2.webp';
import naturopathyImage3 from '../../assets/images/treatments/naturopathy/treatment3.webp';
import naturopathyImage4 from '../../assets/images/treatments/naturopathy/treatment4.webp';
import HeadingHome from '../heading-home.jsx';
import Container from '../page/container.jsx';
import { Badge } from '../ui/badge.tsx';
import { Button } from '../ui/button.tsx';

const NaturopathySection = () => {
    const naturopathyConfig = [
        {
            image: naturopathyImage3,
            title: 'Dźwiękoterapia',
            text: 'Terapia wykorzystująca fale dźwiękowe do głębokiej relaksacji, redukcji napięć oraz harmonizacji pracy organizmu. Wspiera regenerację, poprawia jakość snu i ułatwia wyciszenie układu nerwowego.',
            pricing: '60-90 min / 150,00 zł',
            route: route('service-item', { serviceType: 'naturopata', categorySlug: 'dzwiekoterapia' }),
            imageClass: 'object-[0_-96px]',
        },
        {
            image: naturopathyImage2,
            title: 'Refleksologia stóp',
            text: 'Delikatna stymulacja wybranych punktów na stopach, twarzy lub dłoniach, która wspiera pracę narządów wewnętrznych, poprawia krążenie i pomaga przywrócić naturalną równowagę organizmu.',
            pricing: '45 min / 120,00 zł',
            route: route('service-item', { serviceType: 'naturopata', categorySlug: 'refleksologia-stop' }),
        },
        {
            image: naturopathyImage4,
            title: 'Bańki ogniowe',
            text: 'Tradycyjna technika poprawiająca krążenie i pomagająca łagodzić napięcia mięśniowe. Stosowana w celu wsparcia odporności, redukcji bólu i przyspieszenia procesów regeneracyjnych.',
            pricing: '30-45 min / 100,00 zł',
            route: route('service-item', { serviceType: 'naturopata', categorySlug: 'banki-ogniowe' }),
        },
        {
            image: naturopathyImage1,
            title: 'Konchowanie (lejowanie)',
            text: 'Terapia relaksacyjna z wykorzystaniem konch, wspierająca odprężenie i łagodzenie napięć w obrębie głowy. Pomaga w poprawie komfortu oddychania i ogólnego samopoczucia.',
            pricing: '45-60 min / 120,00 zł',
            route: route('service-item', { serviceType: 'naturopata', categorySlug: 'konchowanie' }),
        },
    ];

    return (
        <section className="bg-gray-100 pt-20 pb-20">
            <Container>
                <div className={'flex justify-center'}>
                    <Badge variant="destructive" className={'mb-5 px-3 py-1'}>
                        <BadgeInfo />
                        Nowość!
                    </Badge>
                </div>
                <div className="flex w-full flex-col items-center">
                    <HeadingHome
                        title="Naturopatia"
                        titleClasName="text-dark-plum"
                        text="Oferujemy naturalne metody wspomagające regenerację organizmu, redukcję stanów zapalnych oraz ogólną poprawę samopoczucia."
                    />
                </div>

                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-4">
                    {naturopathyConfig.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: 25 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="overflow-hidden rounded-2xl border bg-white shadow-md"
                            key={index}
                        >
                            <img src={item.image} className={`h-40 w-full object-cover ${item.imageClass}`} />
                            <div className="p-6">
                                <h4 className="text-dark-plum mb-2 text-xl font-bold">{item.title}</h4>
                                <p className={'text-gray-700'}>{item.text}</p>
                                <p className={'mt-2 font-bold text-black'}>{item.pricing}</p>
                                <Button className={'mt-3 w-full'} asChild>
                                    <Link href={item.route}>Więcej informacji</Link>
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default NaturopathySection;
