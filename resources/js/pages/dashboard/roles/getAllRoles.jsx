import { Link } from '@inertiajs/react';
import Heading from '../../../components/heading.tsx';
import { Button } from '../../../components/ui/button.tsx';
import usePermissions from '../../../hooks/usePermissions.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const GetAllRoles = ({ roles }) => {
    const { checkUserHasPermission } = usePermissions();

    return (
        <DashboardLayout>
            <Heading title={'Wszystkie role'} />
            <div className={'grid grid-cols-4 gap-5'}>
                {roles.map((role, index) => (
                    <div key={index} className={'rounded-2xl border-1 p-5'}>
                        <p className={'text-xl underline'}>{role.name}</p>
                        <p>Liczba permisji: {role.permissions_count}</p>
                        <div className={'mt-5 flex gap-5'}>
                            {checkUserHasPermission('edytowanie ról') && (
                                <Button asChild className="flex-1">
                                    <Link href={route('dashboard.role.edit.view', role.id)}>Edytuj role</Link>
                                </Button>
                            )}
                            {checkUserHasPermission('usuwanie ról') && (
                                <Button asChild className="flex-1" variant={'outline'}>
                                    <Link href={route('dashboard.role.delete', role.id)}>Usuń role</Link>
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default GetAllRoles;
