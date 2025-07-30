import { Link } from '@inertiajs/react';
import { ChevronRight, Home } from 'lucide-react';
import capitalizeFirstLetter from '../utils/capitalizeFirstLetter.js';

const ArrowRight = () => {
    return (
        <svg
            className="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
        >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
        </svg>
    );
};

const HeadingSubpage = () => {
    const config = [
        {
            text: 'Strona główna',
            url: '/',
            icon: <Home className={'text-dark-plum mr-1'} size={18} strokeWidth={2} />,
        },
    ];

    const pathSegments = window.location.pathname.slice(1).split('/');

    let currentPath = '';

    pathSegments.forEach((segment) => {
        currentPath += `/${segment}`;
        config.push({
            text: capitalizeFirstLetter(segment),
            url: currentPath,
            icon: <ChevronRight className={'text-dark-plum mr-1'} size={18} strokeWidth={2} />,
        });
    });

    return (
        <>
            <nav className="mb-4 flex" aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-x-1 md:gap-x-2 rtl:space-x-reverse">
                    {config.map((item, index) => (
                        <li className="inline-flex items-center" key={index}>
                            {item.icon}
                            <Link
                                href={item.url}
                                className="inline-flex items-center text-sm font-medium whitespace-nowrap text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                            >
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
};

export default HeadingSubpage;
