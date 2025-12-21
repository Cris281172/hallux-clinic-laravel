import { Link, usePage } from '@inertiajs/react';
import { Settings } from 'lucide-react';
import { useEffect } from 'react';
import AppPagination from '../../../../components/app-pagination.jsx';
import Heading from '../../../../components/heading.tsx';
import { Card, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card.tsx';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../../components/ui/dropdown-menu.tsx';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';

const GetAllChats = ({ chats }) => {
    const { props } = usePage();

    useEffect(() => {
        const channel = window.Echo.private(`support.admin`);
        channel.listen('.MessageSent', (e) => {
            console.log(e);
        });
        return () => window.Echo.leave(`support.admin`);
    }, []);

    return (
        <DashboardLayout>
            <Heading title={'Wszyscy czaty'} />
            <div className={'grid grid-cols-3 gap-15'}>
                {chats.data.map((chat, index) => (
                    <Card className="@container/card relative gap-2" key={index}>
                        <div className={'absolute top-0 right-0 m-2 flex gap-2'}>
                            <DropdownMenu>
                                <DropdownMenuTrigger className={'cursor-pointer'}>
                                    <Settings />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild>
                                        <Link className={'cursor-pointer'} href={route('dashboard.chat.get', { id: chat.id })}>
                                            Szczegóły
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            {/*<ConfirmationDialog*/}
                            {/*    routeName="dashboard.user.delete"*/}
                            {/*    params={chat.id}*/}
                            {/*    title="Usuń użytkownika?"*/}
                            {/*    desc={`Czy na pewno chcesz trwale usunąć produkt "${user.name}"?`}*/}
                            {/*>*/}
                            {/*    <Trash className="cursor-pointer text-red-600" />*/}
                            {/*</ConfirmationDialog>*/}
                        </div>
                        <CardHeader>
                            <CardTitle className={'mb-1'}>Użytkownik: {chat.user?.name || 'Brak'}</CardTitle>
                            <CardDescription>Status: TODO</CardDescription>
                            <CardDescription>Email: {chat.user?.email || 'Brak'}</CardDescription>
                            {/*<CardDescription>*/}
                            {/*    Zweryfikowany: {user.email_verified_at ? formatDatePolish(user.email_verified_at) : 'Nie zwerfyikowany'}*/}
                            {/*</CardDescription>*/}
                            {/*<CardDescription>Utwórzony: {formatDatePolish(user.created_at)}</CardDescription>*/}
                        </CardHeader>
                    </Card>
                ))}
            </div>
            <AppPagination currentPage={chats.current_page} lastPage={chats.last_page} url={props.ziggy.location.split(props.ziggy.url)[1]} />
        </DashboardLayout>
    );
};

export default GetAllChats;
