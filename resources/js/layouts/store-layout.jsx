import StoreHeader from '../components/store/store-header.jsx';
import { Toaster } from '../components/ui/sonner.js';

const StoreLayout = ({ children }) => {
    return (
        <>
            <Toaster richColors />
            <StoreHeader />
            {children}
        </>
    );
};

export default StoreLayout;
