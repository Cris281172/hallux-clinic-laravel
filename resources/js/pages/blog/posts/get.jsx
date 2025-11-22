import headerBackground from '../../../assets/images/header.webp';
import PostItem from '../../../components/blog/PostItem.jsx';
import EditorRenderer from '../../../components/editor-renderer.jsx';
import ContactSection from '../../../components/page/contact-section.jsx';
import SEO from '../../../components/page/SEO.jsx';
import SubpageHeader from '../../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../../components/subpage-layout-container.jsx';
import AppLayout from '../../../layouts/app-layout.jsx';
import getR2Url from '../../../utils/getR2Url.js';

const GetPost = ({ post, similar }) => {
    return (
        <AppLayout>
            <SEO title={post.title} description={post.short_desc} url={`/${post.slug}`} />
            <SubpageHeader title={post.title} background={headerBackground} />
            <SubpageLayoutContainer>
                <img src={getR2Url(post.image)} alt={post.title} className="mb-8 max-h-[400px] w-full rounded-2xl object-cover" />
                <EditorRenderer blocks={JSON.parse(post.desc)} />
                <div className={'mt-10'}>
                    <h3 className={'text-dark-plum mb-3 text-xl font-bold'}>Zobacz więcej</h3>
                    <div>
                        {similar.map((item, index) => (
                            <PostItem item={item} index={index} />
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className={'text-dark-plum mb-3 text-xl font-bold'}>Umów wizyte już teraz</h3>
                    <ContactSection />
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default GetPost;
