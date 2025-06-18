import { usePage } from '@inertiajs/react';
import Heading from '../../components/heading.js';
import DashboardLayout from '../../layouts/dashboard-layout.jsx';

const Dashboard = () => {
    const { props } = usePage();
    const permissions = props.permissions;
    const user = props.auth.user;
    return (
        <DashboardLayout>
            <Heading title={'Strona główna'} />
            <div className={'flex items-center justify-between'}>
                <div className="flex items-center bg-gradient-to-tr">
                    <div className="flex w-max">
                        <h1 className="typing-once inline-block pt-1 pr-5 pb-1 text-5xl font-bold text-white">Witaj {user.name}!</h1>
                    </div>
                </div>
                <div className={'mb-1 w-max rounded-sm bg-green-700 pt-1 pr-3 pb-1 pl-3 text-sm'}>{user.roles[0].name}</div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
