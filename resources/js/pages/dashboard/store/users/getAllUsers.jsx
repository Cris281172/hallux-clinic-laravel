import { Link, usePage } from '@inertiajs/react';
import { Settings, Trash } from 'lucide-react';
import AppPagination from '../../../../components/app-pagination.jsx';
import ConfirmationDialog from '../../../../components/confirmation-dialog.jsx';
import Heading from '../../../../components/heading.tsx';
import { Card, CardDescription, CardHeader, CardTitle } from '../../../../components/ui/card.tsx';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../../components/ui/dropdown-menu.tsx';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';
import formatDatePolish from '../../../../utils/formatDatePolish.js';

const GetAllUsers = ({ users }) => {
    const { props } = usePage();

    return (
        <DashboardLayout>
            <Heading title={'Użytkownicy'} />
            <div className={'grid grid-cols-3 gap-15'}>
                {users.data.map((user, index) => (
                    <Card className="@container/card relative gap-2" key={index}>
                        <div className={'absolute top-0 right-0 m-2 flex gap-2'}>
                            <DropdownMenu>
                                <DropdownMenuTrigger className={'cursor-pointer'}>
                                    <Settings />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <Link href={route('dashboard.user.details', { id: user.id })}>Szczegóły</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <ConfirmationDialog
                                routeName="dashboard.user.delete"
                                params={user.id}
                                title="Usuń użytkownika?"
                                desc={`Czy na pewno chcesz trwale usunąć produkt "${user.name}"?`}
                            >
                                <Trash className="cursor-pointer text-red-600" />
                            </ConfirmationDialog>
                        </div>
                        <CardHeader>
                            <CardTitle className={'mb-1'}>{user.name}</CardTitle>
                            <CardDescription>Email: {user.email}</CardDescription>
                            <CardDescription>
                                Zweryfikowany: {user.email_verified_at ? formatDatePolish(user.email_verified_at) : 'Nie zwerfyikowany'}
                            </CardDescription>
                            <CardDescription>Utwórzony: {formatDatePolish(user.created_at)}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
            <AppPagination currentPage={users.current_page} lastPage={users.last_page} url={props.ziggy.location.split(props.ziggy.url)[1]} />
        </DashboardLayout>
    );
};

export default GetAllUsers;
