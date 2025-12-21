import { Link } from '@inertiajs/react';
import AppPagination from '../../../../components/app-pagination.jsx';
import Heading from '../../../../components/heading.js';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';

const GetAllComments = ({ comments }) => {
    const filterSubComments = (comments) => {
        return comments.fitler((comment) => comment.published === 1);
    };

    return (
        <DashboardLayout>
            <Heading title={'Komentarze'} />
            <div>
                {comments.data.map((comment, index) => (
                    <>
                        <div key={index} className={'border-2 border-solid p-3'}>
                            <div>
                                <p>Użytkownik: {comment.username}</p>
                                <p>Email: {comment.email}</p>
                            </div>
                            <p>{comment.text}</p>
                            <div>
                                <Link href={route('dashboard.blog.comment.delete', comment.id)}>Usuń</Link>
                                {comment.published === 1 ? (
                                    <Link href={route('dashboard.blog.comment.change.published', { id: comment.id, published: 0 })}>Ukryj</Link>
                                ) : (
                                    <Link href={route('dashboard.blog.comment.change.published', { id: comment.id, published: 1 })}>Pokaż</Link>
                                )}
                            </div>
                        </div>
                        {comment.subcomments.map((subcomment, index) => (
                            <div key={index}>
                                <div>
                                    <p>Użytkownik: {subcomment.username}</p>
                                    <p>Email: {subcomment.email}</p>
                                </div>
                                <p>{subcomment.text}</p>
                                <div>
                                    <Link href={route('dashboard.blog.comment.delete', subcomment.id)}>Usuń</Link>
                                    {subcomment.published === 1 ? (
                                        <Link href={route('dashboard.blog.comment.change.published', { id: subcomment.id, published: 0 })}>
                                            Ukryj
                                        </Link>
                                    ) : (
                                        <Link href={route('dashboard.blog.comment.change.published', { id: subcomment.id, published: 1 })}>
                                            Pokaż
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </>
                ))}
            </div>
            <AppPagination currentPage={comments.current_page} lastPage={comments.last_page} url={'/dashboard/blog/get/all'} />
        </DashboardLayout>
    );
};

export default GetAllComments;
