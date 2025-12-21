import { Link } from '@inertiajs/react';
import SEO from '../components/page/SEO.jsx';
import SubpageHeader from '../components/subpage-header.jsx';
import SubpageLayoutContainer from '../components/subpage-layout-container.jsx';
import { Button } from '../components/ui/button.tsx';
import AppLayout from '../layouts/app-layout.jsx';

const NotFound = () => {
    return (
        <AppLayout>
            <SEO title="404 - Strona nie istnieje" description="Ta strona nie została odnaleziona." robots="noindex, nofollow" />
            <SubpageHeader title={'Ups...'} text={'Strona nie znaleziona'} />
            <SubpageLayoutContainer>
                <p className="text-dark-plum text-center text-lg">Wygląda na to, że ta strona nie istnieje.</p>
                <div className={'flex justify-center'}>
                    <Button variant={'darkPlum'} className={'mt-3'} asChild>
                        <Link href={route('home')}>Wróć na strone główna</Link>
                    </Button>
                </div>
            </SubpageLayoutContainer>
        </AppLayout>
    );
};

export default NotFound;
