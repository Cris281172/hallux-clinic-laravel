import { Link } from '@inertiajs/react';
import logo from '../assets/images/logo.webp';
const Footer = () => {
    const navigationConfig = [
        {
            name: 'Strona główna',
            link: 'home',
        },
        {
            name: 'Usługi',
            link: 'services',
        },
        {
            name: 'Cennik',
            link: 'price-list',
        },
        {
            name: 'O mnie',
            link: 'about-me',
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
    ];

    const servicesConfig = [
        {
            name: 'Diagnostyka podologiczna',
            url: 'test',
            children: [
                {
                    name: 'Konsutlacja podologiczna',
                    url: '',
                },
                {
                    name: 'Konsutlacja Online',
                    url: '',
                },
            ],
        },
        {
            name: 'Profilaktyka podologiczna',
            url: 'test',
            children: [
                {
                    name: 'Podstawowy zabieg podologiczny',
                    url: '',
                },
                {
                    name: 'Rozszerzony zabieg podologiczny',
                    url: '',
                },
            ],
        },
        {
            name: 'Terapie problemów skórnych',
            url: 'test',
            children: [
                {
                    name: 'Pękające pięty',
                    url: '',
                },
                {
                    name: 'Usuwanie brodawek wirusowych',
                    url: '',
                },
                {
                    name: 'Usuwanie Modzeli',
                    url: '',
                },
                {
                    name: 'Usuwanie Modzeli',
                    url: '',
                },
            ],
        },
        {
            name: 'Terapie problemów aparatu paznokciowego',
            url: 'test',
            children: [
                {
                    name: 'Grzybica Stóp i Paznokci',
                    url: '',
                },
                {
                    name: 'Leczenie Wrastających i Wkręcających Paznokci',
                    url: '',
                },
                {
                    name: 'Onycholiza',
                    url: '',
                },
                {
                    name: 'Usunięcie Krwiaka',
                    url: '',
                },
            ],
        },
        {
            name: 'Ortonyksja',
            url: 'test',
            children: [
                {
                    name: 'Założenie klamry korygującej',
                    url: '',
                },
                {
                    name: 'Przełożenie klamry korygującej',
                    url: '',
                },
                {
                    name: 'Podklejenie klamry korygującej',
                    url: '',
                },
                {
                    name: 'Zdjęcie klamry korygującej na zakończenie zabiegu',
                    url: '',
                },
            ],
        },
        {
            name: 'Zabiegi uzupełniające',
            url: 'test',
            children: [
                {
                    name: 'Tamponada wrastającego paznokcia',
                    url: '',
                },
                {
                    name: 'Opatrunek z odciążeniem',
                    url: '',
                },
                {
                    name: 'Opatrunek z preparatem specjalistycznym',
                    url: '',
                },
                {
                    name: 'Taping podologiczny (taping palucha)',
                    url: '',
                },
                {
                    name: 'Usunięcie lakieru hybrydowego – w przypadku pedicure podologicznego',
                    url: '',
                },
                {
                    name: 'Badanie stóp na podoskopie',
                    url: '',
                },
            ],
        },
    ];

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
                </div>
                <div
                    className={
                        'col-span-12 mt-5 mb-5 md:col-span-12 lg:col-span-7 lg:mt-0 lg:mr-10 lg:mb-0 lg:ml-10 lg:border-r-1 lg:border-l-1 lg:pr-10 lg:pl-10'
                    }
                >
                    <p className={'text-xl font-bold'}>Usługi</p>
                    <ul className={'mt-2 grid grid-cols-1 gap-5 md:grid-cols-2'}>
                        {servicesConfig.map((item, index) => (
                            <li key={index}>
                                <Link>{item.name}</Link>
                                <div className={'flex flex-col'}>
                                    {item.children.map((children) => (
                                        <Link className={'ml-5 text-sm'}>- {children.name}</Link>
                                    ))}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={'col-span-12 md:col-span-12 lg:col-span-2'}>
                    <p className={'text-xl font-bold'}>Nawigacja</p>
                    <ul className={'mt-2'}>
                        {navigationConfig.map((item, index) => (
                            <li key={index}>
                                <Link href={route(item.link, item.params)}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </footer>
            <div className={'flex flex-col items-center justify-center border-t-1 pt-5 pb-5'}>
                <p>&copy; Wszelkie prawa zastrzeżone.</p>
                <p>
                    Created & Design by{' '}
                    <a href={'https://dark-site.pl/'} target={'_blank'} className={'font-bold underline'}>
                        Dark Site
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
