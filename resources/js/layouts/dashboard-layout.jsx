import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { usePage } from '@inertiajs/react';
import DashboardSidebar from '../components/dashboard/dashboard-sidebar.jsx';
import SetPasswordDialog from '../components/dashboard/password/set-password-dialog.jsx';
import { Toaster } from '../components/ui/sonner.js';
const DashboardLayout = ({ children }) => {
    const { props } = usePage();
    const isPasswordChanged = props.auth.user.password_changed;

    return (
        <div>
            <SetPasswordDialog isPasswordChanged={isPasswordChanged} />
            <Toaster position="top-center" />
            <SidebarProvider>
                <DashboardSidebar />
                <main>
                    <SidebarTrigger />
                </main>
                <div className={'m-5 w-full'}>{children}</div>
            </SidebarProvider>
        </div>
    );
};

export default DashboardLayout;
