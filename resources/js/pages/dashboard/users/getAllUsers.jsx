import { Link, router } from '@inertiajs/react';
import DialogConfirmation from '../../../components/dashboard/dialog-confirmation.jsx';
import Heading from '../../../components/heading.js';
import { Button } from '../../../components/ui/button.js';
import usePermissions from '../../../hooks/usePermissions.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const GetAllUsers = ({ users }) => {
    const { checkUserHasPermission } = usePermissions();

    return (
        <DashboardLayout>
            <Heading title={'Wszyscy użytkownicy'} />
            <div className={'grid grid-cols-4 gap-5'}>
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
                            {checkUserHasPermission('edytowanie użytkowników') && (
                                <Button asChild className="flex-1">
                                    <Link href={route('dashboard.user.edit.view', user.id)}>Edytuj użytkownika</Link>
                                </Button>
                            )}
                            {checkUserHasPermission('usuwanie użytkowników') && (
                                <DialogConfirmation
                                    title={'Potwierdź usunięcie użytkownika'}
                                    text={'Po usunięciu użytkowika nie będzie możliwości przywrócenia go spowrotem!'}
                                    confirmationAlert={'Użytkownik został usunięty'}
                                    handleConfirmation={() => router.delete(route('dashboard.user.delete', user.id))}
                                >
                                    <Button variant="outline" className="flex-1">
                                        Usuń
                                    </Button>
                                </DialogConfirmation>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default GetAllUsers;
