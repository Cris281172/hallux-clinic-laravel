import headerBackground from '../../../assets/images/header.webp';
import CommentAdd from '../../../components/comment/comment-add.jsx';
import CommentAll from '../../../components/comment/comment-all.jsx';
import SubpageHeader from '../../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../../components/subpage-layout-container.jsx';
import AppLayout from '../../../layouts/app-layout.jsx';

const GetPost = ({ post, comments }) => {
    return (
        <AppLayout>
            <SubpageHeader title={post.title} text={post.short_desc} background={headerBackground} />
            <SubpageLayoutContainer>
                <div dangerouslySetInnerHTML={{ __html: post.desc }}></div>
                <div className={'container mx-auto'}>
                    <CommentAdd postID={post.id} type={'parent'} />
                    <CommentAll postID={post.id} comments={comments} />
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default GetPost;
