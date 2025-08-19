import headerBackground from '../../../assets/images/header.webp';
import EditorRenderer from '../../../components/editor-renderer.jsx';
import ContactSection from '../../../components/page/contact-section.jsx';
import SubpageHeader from '../../../components/subpage-header.jsx';
import SubpageLayoutContainer from '../../../components/subpage-layout-container.jsx';
import AppLayout from '../../../layouts/app-layout.jsx';
import getR2Url from '../../../utils/getR2Url.js';

const GetPost = ({ post, comments }) => {
    console.log(JSON.parse(post.desc));
    return (
        <AppLayout>
            <SubpageHeader title={post.title} text={post.short_desc} background={headerBackground} />
            <SubpageLayoutContainer>
                <img src={getR2Url(post.image)} alt={post.title} className="mb-8 max-h-[400px] w-full rounded-2xl object-cover" />
                <EditorRenderer blocks={JSON.parse(post.desc)} />
                <div>
                    <h3 className={'text-dark-plum mb-3 text-xl font-bold'}>Umów wizyte już teraz</h3>
                    <ContactSection />
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default GetPost;
