import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const MenuBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { props } = usePage();

    const [activeChildrenIndex, setActiveChildrenIndex] = useState(null);

    const menuConfig = [
        {
            name: 'Usługi',
            url: route('services'),
            children: [
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
            ],
        },
        { name: 'Cennik', url: route('price-list') },
        { name: 'O mnie', url: route('about-me') },
        { name: 'Galeria', url: route('gallery') },
        { name: 'Blog', url: route('blog.post.get.all') },
        { name: 'Kontakt', url: route('contact') },
    ];

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });
    const linkRefs = useRef([]);

    useEffect(() => {
        const activeIndex = menuConfig.findIndex((item) => item.url === props.ziggy.location);
        if (linkRefs.current[activeIndex]) {
            const rect = linkRefs.current[activeIndex].getBoundingClientRect();
            const containerLeft = linkRefs.current[0].parentElement.getBoundingClientRect().left;
            setIndicatorProps({ left: rect.left - containerLeft, width: rect.width });
        }
    }, [props.ziggy.location]);

    return (
        <div>
            <div className={'h-[94px]'}></div>
            <div className={'fixed top-0 z-50 w-full border-b-1 border-gray-50 shadow-xl'}>
                <div className="bg-dark-plum pt-3 pb-3">
                    <div className="mx-4 flex items-center justify-between sm:container sm:mx-auto">
                        <Link href="/">
                            <img src="/images/logo.webp" alt="Logo" className="w-60" />
                        </Link>

                        <div className="inset-y-0 left-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                                aria-controls="mobile-menu"
                                aria-expanded={menuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className={`${menuOpen ? 'hidden' : 'block'} size-6`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg
                                    className={`${menuOpen ? 'block' : 'hidden'} size-6`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <nav className="hidden sm:block">
                            <ul className="relative flex gap-5">
                                <motion.div
                                    layout
                                    className="absolute -bottom-1 h-[5px] bg-white transition-all duration-300"
                                    animate={{ left: indicatorProps.left, width: indicatorProps.width }}
                                />
                                {menuConfig.map((menuItem, index) => (
                                    <li
                                        key={index}
                                        className={'relative'}
                                        onMouseEnter={() => setActiveChildrenIndex(index)}
                                        onMouseLeave={() => setActiveChildrenIndex(null)}
                                    >
                                        <Link
                                            ref={(el) => (linkRefs.current[index] = el)}
                                            className={`text-2xl font-medium text-white`}
                                            href={menuItem.url}
                                        >
                                            {menuItem.name}
                                        </Link>
                                        {menuItem.children && (
                                            <div
                                                className={`text-dark-plum fixed grid w-1/2 -translate-x-1/2 grid-cols-3 gap-5 rounded-sm bg-white p-7 shadow-xl transition ${activeChildrenIndex === index ? 'visible opacity-100' : 'invisible opacity-0'}`}
                                            >
                                                {menuItem.children.map((childrenItem, index) => (
                                                    <div key={index} className={'w-full'}>
                                                        <p className={'text-md text font-bold'}>{childrenItem.name}</p>
                                                        <ul>
                                                            {childrenItem.children.map((service, index) => (
                                                                <li className={'ml-2 cursor-pointer text-sm'} key={index}>
                                                                    - {service.name}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>

                <div
                    className={`${menuOpen ? 'right-0' : '-right-full'} bg-dark-plum absolute top-[94] z-20 h-screen w-full transition-all sm:hidden`}
                    id="mobile-menu"
                >
                    <div className="flex flex-col items-center space-y-1 px-2 pt-2 pb-3">
                        {menuConfig.map((menuItem, index) => (
                            <Link
                                key={index}
                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                                href={menuItem.url}
                                onClick={() => setMenuOpen(false)}
                            >
                                {menuItem.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
