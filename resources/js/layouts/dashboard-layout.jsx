import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';
import logoHalluxClinic from '../assets/images/logo.webp';
import DashboardSidebar from '../components/dashboard/dashboard-sidebar.jsx';
import SetPasswordDialog from '../components/dashboard/password/set-password-dialog.jsx';
import { Avatar, AvatarFallback } from '../components/ui/avatar.tsx';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../components/ui/dropdown-menu.tsx';
import { Toaster } from '../components/ui/sonner.js';
const DashboardLayout = ({ children }) => {
    const { props } = usePage();
    const user = props.auth.user;
    const isPasswordChanged = user.password_changed;

    return (
        <div className={'bg-black pt-20'}>
            <div className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b-2 bg-[#171717] px-7 py-4">
                <div className="flex h-full items-center">
                    <img className="w-40" src={logoHalluxClinic} alt="Logo" />
                </div>
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger>
                        <Avatar>
                            <AvatarFallback>
                                {user.name
                                    .split(' ')
                                    .map((el) => el.slice(0, 1))
                                    .join('')}
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="z-[9999] w-56 rounded-md border border-gray-700 bg-[#171717] text-white shadow-lg" align="start">
                        <DropdownMenuLabel className={'flex items-center gap-3'}>
                            <Avatar>
                                <AvatarFallback>
                                    {user.name
                                        .split(' ')
                                        .map((el) => el.slice(0, 1))
                                        .join('')}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <div className={'mb-1 w-max rounded-sm bg-green-700 pt-0.5 pr-3 pb-0.5 pl-3 text-xs'}>{user.roles[0].name}</div>

                                <p className={'text-md'}>{user.name}</p>
                            </div>
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem asChild>
                            <Link href={route('logout')}>Wyloguj się</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <SetPasswordDialog isPasswordChanged={isPasswordChanged} />
            <Toaster position="top-center" />
            <SidebarProvider>
                <DashboardSidebar />
                <main>
                    <SidebarTrigger className={'fixed z-10 cursor-pointer border-r-2 border-b-2 bg-[#171717]'} />
                </main>
                <div className={'mx-10 my-8 w-full'}>{children}</div>
            </SidebarProvider>
        </div>
    );
};

export default DashboardLayout;
