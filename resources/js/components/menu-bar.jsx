import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card.tsx';
import { Link, usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { ChevronDown, SquareArrowOutUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const MenuBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const { props } = usePage();

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const [activeChildrenMobileMenu, setActiveChildrenMobileMenu] = useState(null);

    const menuConfig = [
        {
            id: 'services',
            name: 'Usługi',
            url: route('services'),
            children: [
                {
                    id: 'diagnostyka-podologiczna',
                    name: 'Diagnostyka podologiczna',
                    url: route('serviceCategory', { category: 'diagnostyka-podologiczna' }),
                },
                {
                    name: 'Profilaktyka podologiczna',
                    id: 'profilaktyka-podologiczna',
                    url: route('serviceCategory', { category: 'profilaktyka-podologiczna' }),
                },
                {
                    name: 'Terapie problemów skórnych',
                    id: 'terapie-problemow-skornych',
                    url: route('serviceCategory', { category: 'terapie-problemow-skornych' }),
                },
                {
                    id: 'terapie-problemow-aparatu-paznokciowego',
                    name: 'Terapie problemów aparatu paznokciowego',
                    url: route('serviceCategory', { category: 'terapie-problemow-aparatu-paznokciowego' }),
                },
                {
                    id: 'ortonyksja',
                    name: 'Ortonyksja',
                    url: route('serviceCategory', { category: 'ortonyksja' }),
                },
                {
                    id: 'zabiegi-uzupelniajace',
                    name: 'Zabiegi uzupełniające',
                    url: route('serviceCategory', { category: 'zabiegi-uzupelniajace' }),
                },
            ],
        },
        { name: 'Cennik', url: route('price-list') },
        {
            id: 'about-us',
            name: 'O nas',
            url: route('about-us'),
            children: [
                {
                    id: 'monika-juczynska',
                    name: 'Monika Juczyńska',
                    url: route('about-us.person', { person: 'monika-juczynska' }),
                },
                {
                    id: 'krzysztof-juczynski-senior',
                    name: 'Krzysztof Juczyński (Senior)',
                    url: route('about-us.person', { person: 'krzysztof-juczynski-senior' }),
                },
                {
                    id: 'krzysztof-juczynski-junior',
                    name: 'Krzysztof Juczyński (Junior)',
                    url: route('about-us.person', { person: 'krzysztof-juczynski-junior' }),
                },
            ],
        },
        {
            id: 'gallery',
            name: 'Galeria',
            url: route('gallery', 'wszystkie'),
            children: [
                {
                    id: 'gabinet',
                    name: 'Gabinet',
                    url: route('gallery', { type: 'gabinet' }),
                },
                {
                    id: 'uslugi',
                    name: 'Usługi',
                    url: route('gallery', { type: 'uslugi' }),
                },
            ],
        },
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

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div>
            <div className={'fixed top-0 z-50 w-full border-gray-50 shadow-sm'}>
                <div
                    className={`pt-3 pb-3 transition-all duration-300 ${
                        isScrolled
                            ? 'border-b border-white/10 bg-[#530236]/40 shadow-lg shadow-black/20 backdrop-blur-2xl'
                            : 'bg-dark-plum border-b border-transparent'
                    } `}
                >
                    <div className="mx-4 flex items-center justify-between sm:container sm:mx-auto">
                        <Link href="/">
                            <img src="/images/logo.webp" alt="Logo" className="w-40 md:w-50" />
                        </Link>

                        <div className="inset-y-0 left-0 flex items-center lg:hidden">
                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
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

                        <nav className="hidden lg:block">
                            <ul className="relative flex gap-5">
                                <motion.div
                                    layout
                                    className="absolute -bottom-1 h-[5px] bg-white transition-all duration-300"
                                    animate={{ left: indicatorProps.left, width: indicatorProps.width }}
                                />
                                {menuConfig.map((menuItem, index) => (
                                    <HoverCard key={index} openDelay={0} closeDelay={500}>
                                        <li
                                            className="relative"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                        >
                                            <HoverCardTrigger>
                                                <Link
                                                    ref={(el) => (linkRefs.current[index] = el)}
                                                    className="flex items-center gap-1 font-sans text-lg font-bold text-white"
                                                    href={menuItem.url}
                                                >
                                                    {menuItem.name}
                                                    {menuItem.children && (
                                                        <motion.div
                                                            animate={{ rotate: hoveredIndex === index ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            <ChevronDown size={15} />
                                                        </motion.div>
                                                    )}
                                                </Link>
                                            </HoverCardTrigger>

                                            {menuItem.children && (
                                                <HoverCardContent className="bg-gray-100 px-0 text-black">
                                                    <ul className="flex flex-col gap-3">
                                                        {menuItem.children.map((item, i) => (
                                                            <li key={i}>
                                                                <Link
                                                                    href={item.url}
                                                                    className="flex bg-gray-100 px-2 py-3 text-sm font-medium transition-all duration-300 hover:bg-white"
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </HoverCardContent>
                                            )}
                                        </li>
                                    </HoverCard>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
                <div
                    className={`${menuOpen ? 'right-0' : '-right-full'} absolute z-20 h-screen w-full overflow-y-auto border-l border-white/10 bg-[#530236]/40 shadow-lg shadow-black/20 backdrop-blur-2xl transition-all lg:hidden`}
                    id="mobile-menu"
                >
                    <div className="flex flex-col items-center space-y-1 px-7 pt-2 pb-3">
                        {menuConfig.map((menuItem, index) => (
                            <div className={'flex w-full flex-col items-start justify-start py-4'}>
                                <div key={index} className={'flex w-full items-center justify-between'}>
                                    <Link
                                        className="block rounded-md text-lg font-thin text-gray-100"
                                        href={menuItem.url}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {menuItem.name}
                                    </Link>
                                    {menuItem.children && (
                                        <>
                                            <ChevronDown
                                                className={`${menuItem.id === activeChildrenMobileMenu ? 'rotate-180' : 'rotate-0'} transition-all duration-400`}
                                                size={20}
                                                onClick={() =>
                                                    setActiveChildrenMobileMenu((prevState) => (prevState === menuItem.id ? null : menuItem.id))
                                                }
                                            />
                                        </>
                                    )}
                                </div>
                                {menuItem.id === activeChildrenMobileMenu && (
                                    <div className={'relative'}>
                                        <motion.ul
                                            className={'mt-1 flex flex-col gap-1.5'}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            {menuItem.children.map((item, index) => (
                                                <li key={index}>
                                                    <Link className={'flex items-center gap-1 text-sm font-medium'} href={menuItem.url}>
                                                        {item.name} <SquareArrowOutUpRight size={12} />
                                                    </Link>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
