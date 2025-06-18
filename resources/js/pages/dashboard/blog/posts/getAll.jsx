import { Link } from '@inertiajs/react';
import dayjs from 'dayjs';
import AppPagination from '../../../../components/app-pagination.jsx';
import HeadingSmall from '../../../../components/heading-small.tsx';
import Heading from '../../../../components/heading.tsx';
import { Button } from '../../../../components/ui/button.tsx';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';

const GetAll = ({ posts }) => {
    return (
        <DashboardLayout>
            <Heading title={'Wszystkie wpisy'} />
            <div className={'grid grid-cols-2 gap-15'}>
                {posts.data.map((post, index) => (
                    <div className={'mb-5 flex gap-6'}>
                        <div key={index}>
                            <img
                                src={`${import.meta.env.VITE_APP_URL}/storage/posts/${post.image}`}
                                className={'object-cover'}
                                style={{ aspectRatio: '1 / 1', maxWidth: '300px' }}
                            />
                        </div>
                        <div className={'flex flex-col justify-between'}>
                            <div>
                                <p className={'text-[12px]'}>{dayjs(post.created_at).format('DD-MM-YYYY HH:mm')}</p>
                                <HeadingSmall title={post.title} description={post.short_desc} />
                            </div>
                            <div className={'mt-2 flex gap-2'}>
                                <Link href={route('dashboard.blog.post.delete', post.id)}>Usuń</Link>
                                <Link href={route('dashboard.blog.post.edit', post.id)}>Edytuj</Link>
                                <Button>Podgląd</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <AppPagination currentPage={posts.current_page} lastPage={posts.last_page} url={'/dashboard/blog/post/get/all'} />
        </DashboardLayout>
    );
};

export default GetAll;
