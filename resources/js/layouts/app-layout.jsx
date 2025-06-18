import Footer from '@/components/footer.jsx';
import MenuBar from '@/components/menu-bar.jsx';
import { Toaster } from '@/components/ui/sonner';

const AppLayout = ({ children }) => {
    return (
        <div className={'overflow-hidden'}>
            <Toaster />
            <MenuBar />
            {children}
            <Footer />
        </div>
    );
};

export default AppLayout;
