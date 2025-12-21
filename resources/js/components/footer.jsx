import { Link, usePage } from '@inertiajs/react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import logo from '../assets/images/logo.webp';
const Footer = () => {
    const { props } = usePage();

    const navigationConfig = [
        {
            name: 'Strona główna',
            link: 'home',
        },
        {
            name: 'Usługi',
            link: 'service-type-selector',
        },
        {
            name: 'Cennik',
            link: 'price-list',
        },
        {
            name: 'O nas',
            link: 'about-us',
        },
        {
            name: 'Galeria',
            link: 'gallery',
            params: {
                type: 'wszystkie',
            },
        },
        {
            name: 'Kontakt',
            link: 'contact',
        },
        {
            name: 'Regulamin sklepu',
            link: 'store.regulations',
        },
        {
            name: 'Regulamin gabinetu',
            link: 'office.regulations',
        },
        {
            name: 'Ogólne warunki użytkowania strony internetowej',
            link: 'website.terms',
        },
    ];

    const servicesConfigPodiatry = Object.entries(props.treatments.podolog).map(([slug, data]) => ({
        name: data.title,
        url: route('service-item', { serviceType: 'podolog', categorySlug: slug }),
        children: Object.entries(data.services).map(([serviceSlug, serviceData]) => ({
            name: serviceData.title,
            url: route('service-details', { serviceType: 'podolog', categorySlug: slug, itemSlug: serviceSlug }),
        })),
    }));

    return (
        <div className={'bg-dark-plum pt-10'}>
            <footer className={'container mx-auto grid grid-cols-12 border-t-2 border-gray-200 px-4 pt-10 pb-10'}>
                <div className={'col-span-12 sm:col-span-12 lg:col-span-3'}>
                    <Link className={'inline-block'}>
                        <img src={logo} className={'w-75'} />
                    </Link>
                    <p className={'mt-2 text-sm text-gray-300'}>
                        Profesjonalna opieka podologiczna w Łodzi. Zdrowe stopy to podstawa aktywnego życia.
                    </p>
                    <div className={'mt-5 text-white'}>
                        <ul className={'mb-2 pb-2'}>
                            <li className={'flex items-center'}>
                                <FaPhoneAlt className={'mr-2'} /> Numer telefonu:{' '}
                                <a className={'ml-1 font-bold'} href={'tel:+48459410096'}>
                                    +48 459 410 096
                                </a>
                            </li>
                            <li className={'flex items-center'}>
                                <MdEmail className={'mr-2'} /> Email:{' '}
                                <a className={'ml-1 font-bold'} href={''}>
                                    {' '}
                                    hallux.clinic@gmail.com
                                </a>
                            </li>
                        </ul>
                        <ul className={'list-inside list-disc space-y-2 border-l-1 pl-4'}>
                            <li className="text-gray-300">Armii Krajowej 44/lok. U3; 94-046 Łódź</li>
                            <li className="text-gray-300">Nip: 7261496883</li>
                            <li className="text-gray-300">Regon: 471387913</li>
                            <li className="text-gray-300">Konto bankowe: 03 1240 5556 1111 0011 2320 7916 (Pekao S.A.)</li>
                        </ul>
                    </div>
                </div>
                <div
                    className={
                        'col-span-12 mt-5 mb-5 md:col-span-12 lg:col-span-7 lg:mt-0 lg:mr-10 lg:mb-0 lg:ml-10 lg:border-r-1 lg:border-l-1 lg:pr-10 lg:pl-10'
                    }
                >
                    <p className={'mb-4 text-lg font-semibold tracking-wide'}>Usługi Podologiczne</p>
                    <ul className={'mt-2 grid grid-cols-1 gap-5 md:grid-cols-2'}>
                        {servicesConfigPodiatry.map((item, index) => (
                            <li key={index}>
                                <Link href={item.url} className="mb-2 flex font-medium text-gray-100 transition hover:text-white">
                                    {item.name}
                                </Link>
                                <ul className="list-inside list-disc space-y-2 border-l pl-4">
                                    {item.children.map((child, idx) => (
                                        <li key={idx} className="text-sm text-gray-300 transition hover:text-white">
                                            <Link href={child.url}>{child.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={'col-span-12 md:col-span-12 lg:col-span-2'}>
                    <p className="mb-4 text-lg font-semibold tracking-wide">Nawigacja</p>
                    <ul className="space-y-2">
                        {navigationConfig.map((item, index) => (
                            <li key={index}>
                                <Link href={route(item.link, item.params)} className="text-gray-300 transition hover:text-white">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
            <div className={'flex flex-col items-center justify-center border-t-1 pt-5 pb-5'}>
                <p>&copy; Wszelkie prawa zastrzeżone.</p>
                <p>
                    Created & Design by{' '}
                    <a href={'https://juczynski.work/'} target={'_blank'} className={'font-bold underline'}>
                        Krzysztof Juczyński
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
