import { usePage } from '@inertiajs/react';
import { clsx } from 'clsx';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination.js';

const AppPagination = ({ currentPage, lastPage, url, queryParams }) => {
    const page = usePage();
    const isDashboard = page.url.split('/').find((el) => el === 'dashboard');
    const pagesToShow = [];
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(lastPage, currentPage + 2);

    for (let i = start; i <= end; i++) {
        pagesToShow.push(i);
    }

    if (lastPage <= 1) {
        return;
    }
    const buildUrl = (pageNumber) => {
        const newUrl = new URL(url, window.location.origin);
        newUrl.searchParams.set('page', pageNumber);

        if (queryParams) {
            Object.entries(queryParams).forEach(([key, value]) => {
                newUrl.searchParams.set(key, value);
            });
        }

        return newUrl.pathname + newUrl.search;
    };

    return (
        <Pagination>
            <PaginationContent>
                {currentPage > 1 && (
                    <PaginationItem
                        className={clsx('', {
                            '': isDashboard,

                            'bg-dark-plum hover:bg-dark-plum text-white': !isDashboard,
                        })}
                    >
                        <PaginationPrevious href={buildUrl(currentPage - 1)} />
                    </PaginationItem>
                )}

                {pagesToShow.map((page, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink
                            className={clsx('rounded-md px-4 py-2 transition-colors duration-200', {
                                '': isDashboard,

                                'bg-dark-plum hover:bg-dark-plum text-white': !isDashboard && currentPage === page,
                                'text-black': !isDashboard && currentPage !== page,
                            })}
                            href={buildUrl(page)}
                            isActive={currentPage === page}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}

                {currentPage < lastPage && (
                    <PaginationItem
                        className={clsx('', {
                            '': isDashboard,

                            'bg-dark-plum hover:bg-dark-plum text-white': !isDashboard,
                        })}
                    >
                        <PaginationNext href={buildUrl(currentPage + 1)} />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
};

export default AppPagination;
