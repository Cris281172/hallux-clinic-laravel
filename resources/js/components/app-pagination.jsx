import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination.js';

const AppPagination = ({ currentPage, lastPage, url, search }) => {
    const startPage = Math.max(1, currentPage - 5);
    const endPage = Math.min(lastPage, currentPage + 5);

    let pages = [];

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href={`${url}?page=${currentPage - 1}`} />
                </PaginationItem>
                {pages.map((page, index) => (
                    <PaginationItem key={index}>
                        <PaginationLink className={currentPage === page ? 'bg-green-950' : ''} href={`${url}?page=${page}&search=${search}`}>
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationNext href={`${url}?page=${currentPage + 1}`} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default AppPagination;
