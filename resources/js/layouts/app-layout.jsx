import Footer from '@/components/footer.jsx';
import MenuBar from '@/components/menu-bar.jsx';
import { Toaster } from '@/components/ui/sonner';
import { MotionConfig } from 'framer-motion';

const AppLayout = ({ children }) => {
    return (
        <MotionConfig reducedMotion="user">
            <div className={'overflow-hidden'}>
                <Toaster />
                <MenuBar />
                {children}
                <Footer />
            </div>
        </MotionConfig>
    );
};

export default AppLayout;
