import { usePage } from '@inertiajs/react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination.js';

const AppPagination = ({ currentPage, lastPage, url, search, query }) => {
    const page = usePage();
    const isDashboard = page.url.split('/').find((el) => el === 'dashboard');
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(lastPage, currentPage + 2);

    let pages = [];

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    if (lastPage <= 1) {
        return;
    }

    return (
        <Pagination>
            <PaginationContent>
                {currentPage !== 1 && (
                    <PaginationItem>
                        <PaginationPrevious className={isDashboard ? '' : 'text-black'} href={`${url}?page=${currentPage - 1}`} />
                    </PaginationItem>
                )}
                {pages.map((page, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink
                            className={isDashboard ? 'border-1' : currentPage === page ? 'bg-dark-plum' : 'text-black'}
                            href={`${url}?page=${page}&search=${search}`}
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {currentPage !== lastPage && (
                    <PaginationItem>
                        <PaginationNext className={isDashboard ? '' : 'text-black'} href={`${url}?page=${currentPage + 1}`} />
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
};

export default AppPagination;
