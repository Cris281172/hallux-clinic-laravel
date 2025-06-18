import { Link } from '@inertiajs/react';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const GetAllUsers = ({ users }) => {
    return (
        <DashboardLayout>
            <Heading title={'Wszyscy użytkownicy'} />
            <div className={'grid grid-cols-3 gap-5'}>
                {users.map((user, index) => (
                    <div key={index} className={'rounded-2xl border-1 p-5'}>
                        <div className={'flex items-center justify-between'}>
                            <p>{user.name}</p>
                            <div className={`rounded-sm ${user.role[0] ? 'bg-green-700' : 'bg-gray-700'} pt-1 pr-3 pb-1 pl-3 text-sm`}>
                                {user.role[0] ? user.role[0] : 'Brak roli'}
                            </div>
                        </div>
                        <p className={'font-bold'}>{user.email}</p>
                        <div className={'mt-5 flex gap-5'}>
                            <Button asChild className="flex-1">
                                <Link href={route('dashboard.user.edit.view', user.id)}>Edytuj użytkownika</Link>
                            </Button>
                            <Button asChild variant="outline" className="flex-1">
                                <Link href={route('dashboard.user.delete', user.id)}>Usuń użytkownika</Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default GetAllUsers;
