import subpageHeader4 from '../../../assets/images/subpage-header/subpage-header-4.jpg';
import AppPagination from '../../../components/app-pagination.jsx';
import PostItem from '../../../components/blog/PostItem.jsx';
import SEO from '../../../components/page/SEO.jsx';
import SubpageHeader from '../../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../../components/subpage-layout-container.jsx';
import AppLayout from '../../../layouts/app-layout.jsx';

const GetAll = ({ posts }) => {
    return (
        <AppLayout>
            <SEO
                title={`Blog o Zdrowiu Stóp - Porady Podologa`}
                description={
                    'Czytaj profesjonalne porady podologiczne na blogu Hallux Clinic. Dowiedz się, jak dbać o stopy, leczyć schorzenia i zapobiegać problemom.'
                }
                url={'/blog'}
            />
            <SubpageHeader
                title={'Blog'}
                background={subpageHeader4}
                text={'Praktyczne porady, nowinki i ekspercka wiedza ze świata podologii. Sprawdź nasze artykuły o zdrowiu stóp!'}
            />

            <SubpageLayoutContainer>
                {posts.data.length === 0 ? (
                    <></>
                ) : (
                    <div className={'pt-15'}>
                        <div className={'container mx-auto'}>
                            {posts.data.map((item, index) => (
                                <PostItem item={item} index={index} />
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
