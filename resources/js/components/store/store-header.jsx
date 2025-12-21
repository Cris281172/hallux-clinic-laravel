import { Link, router, usePage } from '@inertiajs/react';
import { User } from 'lucide-react';
import { useEffect, useState } from 'react';
import logoImage from '../../assets/images/logo.webp';
import { Button } from '../ui/button.js';
import AuthDialog from './auth/auth-dialog.jsx';
import CartSheet from './cart/cart-sheet.jsx';
import SearchEngine from './search/search-engine.jsx';

const StoreHeader = () => {
    const { url, props } = usePage();
    const params = new URLSearchParams(url.split('?')[1] || '');
    const [isScrolled, setIsScrolled] = useState(false);

    const openDialog = (type) => {
        params.set('auth', type);
        router.get(window.location.pathname + '?' + params.toString(), {}, { preserveScroll: true });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <div
                className={`fixed top-0 z-50 w-full transition-all duration-300 ${
                    isScrolled
                        ? 'border-b border-white/10 bg-[#530236]/40 shadow-lg shadow-black/20 backdrop-blur-2xl'
                        : 'bg-dark-plum border-b border-transparent'
                }`}
            >
                <div className="pt-3 pb-3">
                    <nav className="mx-4 flex items-center justify-between sm:container sm:mx-auto">
                        <div className={'flex items-center gap-10'}>
                            <Link href="/">
                                <img src={logoImage} alt="Logo" className="w-40 md:w-50" />
                            </Link>
                            <SearchEngine />
                        </div>

                        <div className={'flex items-center gap-3'}>
                            <Link href={route('store.products')}>Odkryj produkty</Link>
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
