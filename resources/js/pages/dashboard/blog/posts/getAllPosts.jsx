import { Link, router } from '@inertiajs/react';
import AppPagination from '../../../../components/app-pagination.jsx';
import DialogConfirmation from '../../../../components/dashboard/dialog-confirmation.jsx';
import Heading from '../../../../components/heading.tsx';
import { Button } from '../../../../components/ui/button.js';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../../components/ui/card.js';
import usePermissions from '../../../../hooks/usePermissions.js';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';
import { formatDate } from '../../../../utils/dateUtils.js';
import getR2Url from '../../../../utils/getR2Url.js';

const GetAllPosts = ({ posts }) => {
    const { checkUserHasPermission } = usePermissions();

    return (
        <DashboardLayout>
            <Heading title={'Wszystkie wpisy'} />
            <div className={'grid grid-cols-2 gap-15'}>
                {posts.data.map((post, index) => (
                    <Card className="@container/card gap-2" key={index}>
                        <CardHeader>
                            <CardDescription>Utworzony: {formatDate(post.created_at)}</CardDescription>
                            <CardTitle>{post.title}</CardTitle>
                            <CardDescription>{post.short_desc}</CardDescription>
                            <CardDescription>Slug: {post.slug}</CardDescription>
                            <img src={getR2Url(post.image)} className={'mt-2 object-cover'} style={{ aspectRatio: '1 / 1', maxWidth: '250px' }} />
                        </CardHeader>
                        <CardFooter className="mt-5 flex items-start gap-1.5 text-sm">
                            {checkUserHasPermission('edytowanie wpisów na blogu') && (
                                <Button asChild className={'flex-1'}>
                                    <Link href={route('dashboard.blog.post.edit', post.id)}>Edytuj</Link>
                                </Button>
                            )}
                            {checkUserHasPermission('usuwanie wpisów na blogu') && (
                                <DialogConfirmation
                                    title={'Potwierdź usunięcie wpisu na bloga'}
                                    text={'Po usunięciu wpisu na bloga nie będzie możliwości go przywrócenia!'}
                                    confirmationAlert={'Wpis na bloga został usunięty'}
                                    handleConfirmation={() => router.delete(route('dashboard.blog.post.delete', post.id))}
                                >
                                    <Button className={'flex-1'} variant={'outline'}>
                                        Usuń
                                    </Button>
                                </DialogConfirmation>
                            )}

                            <Button asChild className={'flex-1'} variant={'outline'}>
                                <a href={route('blog.post.get', post.slug)} target={'_blank'}>
                                    Podgląd
                                </a>
                            </Button>
                        </CardFooter>
                        {/*<div className={'flex flex-col justify-between'}>*/}
                        {/*    <div>*/}
                        {/*        <p className={'text-[12px]'}>{dayjs(post.created_at).format('DD-MM-YYYY HH:mm')}</p>*/}
                        {/*        <HeadingSmall title={post.title} description={post.short_desc} />*/}
                        {/*    </div>*/}
                        {/*    <div className={'mt-2 flex gap-2'}>*/}
                        {/*        <Link href={route('dashboard.blog.post.delete', post.id)}>Usuń</Link>*/}
                        {/*        <Link href={route('dashboard.blog.post.edit', post.id)}>Edytuj</Link>*/}
                        {/*        <Button>Podgląd</Button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </Card>
                ))}
            </div>
            <AppPagination currentPage={posts.current_page} lastPage={posts.last_page} url={'/dashboard/blog/post/get/all'} />
        </DashboardLayout>
    );
};

export default GetAllPosts;
// <Card className="@container/card gap-2">
//     <CardHeader>
//         <CardDescription className={'flex items-center justify-between'}>
//             Aktywni pacjenci
//             <Badge variant="secondary">
//                 <IoIosTrendingUp />
//                 {statistics.newActivePatientsCount}%
//             </Badge>
//         </CardDescription>
//         <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
//             {statistics.activePatientsCount}
//         </CardTitle>
//     </CardHeader>
//     <CardFooter className="flex-col items-start gap-1.5 text-sm">
//         <div className="line-clamp-1 flex gap-2 font-medium">W tym miesiącu zyskuje na popularności</div>
//         <div className="text-muted-foreground">Liczba aktywynch pacjentów z aktualnego miesiąca</div>
//     </CardFooter>
// </Card>
