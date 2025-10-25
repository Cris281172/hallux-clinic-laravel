import { Link, router, usePage } from '@inertiajs/react';
import { User } from 'lucide-react';
import logoImage from '../../assets/images/logo.webp';
import { Button } from '../ui/button.js';
import AuthDialog from './auth/auth-dialog.jsx';
import CartSheet from './cart/cart-sheet.jsx';
const StoreHeader = () => {
    const { url, props } = usePage();
    console.log(props);
    const params = new URLSearchParams(url.split('?')[1] || '');
    const openDialog = (type) => {
        params.set('auth', type);
        router.get(window.location.pathname + '?' + params.toString(), {}, { preserveScroll: true });
    };

    return (
        <header>
            <div className={'h-[84px] md:h-[94px]'}></div>
            <div className={'fixed top-0 z-50 w-full border-b-1 border-gray-50 shadow-xl'}>
                <div className="bg-dark-plum pt-3 pb-3">
                    <nav className="mx-4 flex items-center justify-between sm:container sm:mx-auto">
                        <Link href="/">
                            <img src={logoImage} alt="Logo" className="w-50 md:w-60" />
                        </Link>
                        <div className={'flex items-center gap-3'}>
                            {props.auth.user ? (
                                <Button variant={'ghost'} asChild>
                                    <Link href={'/profile'}>
                                        <User />
                                    </Link>
                                </Button>
                            ) : (
                                <Button variant={'ghost'} onClick={() => openDialog('logowanie')}>
                                    <User />
                                </Button>
                            )}
                            <CartSheet />
                        </div>
                    </nav>
                </div>
            </div>
            <AuthDialog />
        </header>
    );
};

export default StoreHeader;
