import headerBackground from '../../../assets/images/header.webp';
import EditorRenderer from '../../../components/editor-renderer.jsx';
import SubpageHeader from '../../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../../components/subpage-layout-container.jsx';
import AppLayout from '../../../layouts/app-layout.jsx';
import getR2Url from '../../../utils/getR2Url.js';

const GetPost = ({ post, comments }) => {
    console.log(post);
    return (
        <AppLayout>
            <SubpageHeader title={post.title} text={post.short_desc} background={headerBackground} />
            <SubpageLayoutContainer>
                <img src={getR2Url(post.image)} alt={post.title} className="mb-8 max-h-[400px] w-full rounded-2xl object-cover" />
                <EditorRenderer blocks={JSON.parse(post.desc)} />
                {/*<div className={'container mx-auto'}>*/}
                {/*    <CommentAdd postID={post.id} type={'parent'} />*/}
                {/*    <CommentAll postID={post.id} comments={comments} />*/}
                {/*</div>*/}
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default GetPost;
