import { Link } from '@inertiajs/react';
import bannerBackground from '../../../assets/images/banners/banner-1.webp';
import AppPagination from '../../../components/app-pagination.jsx';
import SubpageHeader from '../../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../../components/subpage-layout-container.jsx';
import AppLayout from '../../../layouts/app-layout.jsx';
import { formatDate } from '../../../utils/dateUtils.js';

const GetAll = ({ posts }) => {
    console.log(posts);
    return (
        <AppLayout>
            <SubpageHeader
                title={'Galeria'}
                background={bannerBackground}
                text={'Praktyczne porady, nowinki i ekspercka wiedza ze świata podologii. Sprawdź nasze artykuły o zdrowiu stóp!'}
            />

            <SubpageLayoutContainer>
                {posts.data.length === 0 ? (
                    <></>
                ) : (
                    <div className={'pt-15'}>
                        <div className={'container mx-auto'}>
                            {posts.data.map((item, index) => (
                                <div key={index} className={'mb-15 flex justify-between gap-7 border-b-2 border-[#F7AACBFF] pb-15'}>
                                    <img
                                        className={`${index % 2 === 0 ? 'order-2' : 'order-1'} aspect-square w-full max-w-1/5 rounded-2xl object-cover`}
                                        src={`${import.meta.env.VITE_R2_PUBLIC_URL}/${item.image}`}
                                    />
                                    <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'} flex w-full flex-col justify-between`}>
                                        <div>
                                            <p className={'text-xs text-gray-500'}>{formatDate(item.created_at)}</p>
                                            <h2 className={'text-dark-plum text-2xl font-bold'}>{item.title}</h2>
                                            <p className={'text-black'}>{item.short_desc}</p>
                                        </div>
                                        <Link
                                            href={`/${item.slug}`}
                                            className={
                                                'bg-neon-blossom hover:bg-dark-plum-500 mt-3 flex w-50 justify-center rounded-full px-4 py-2 font-bold text-white transition'
                                            }
                                        >
                                            Zobacz więcej
                                        </Link>
                                    </div>
                                </div>
                            ))}
                            <div className={'pt-5 pb-5'}>
                                <AppPagination currentPage={posts.current_page} lastPage={posts.last_page} url={'/blog'} />
                            </div>
                        </div>
                    </div>
                )}
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default GetAll;
