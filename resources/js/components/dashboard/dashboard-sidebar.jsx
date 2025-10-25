import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import sidebarItemsConfig from '../../config/dashboard/sidebar-items-config.js';
import { Button } from '../ui/button.js';
import { SidebarFooter, SidebarMenuSub, SidebarMenuSubItem } from '../ui/sidebar.js';

const DashboardSidebar = () => {
    const { props } = usePage();
    const permissions = props.userPermissions;
    const user = props.auth.user;
    const location = props.ziggy.location;

    const renderSubItems = (items) => (
        <SidebarMenuSub>
            {items
                .filter((child) => permissions.find((el) => el.name === child.permission) || user.is_super_admin)
                .map((child) =>
                    child.children ? (
                        <Collapsible defaultOpen className="group/collapsible" key={child.title}>
                            <SidebarMenuSubItem>
                                <CollapsibleTrigger asChild>
                                    <Link className={'flex'} href={route(child.url, child.params)}>
                                        {child.title}
                                    </Link>
                                </CollapsibleTrigger>
                                <CollapsibleContent>{renderSubItems(child.children)}</CollapsibleContent>
                            </SidebarMenuSubItem>
                        </Collapsible>
                    ) : (
                        <SidebarMenuSubItem
                            key={child.title}
                            className={`pt-0.5 pb-0.5 pl-2 ${route(child.url, child.params) === location ? 'bg-sidebar-accent rounded-md' : ''}`}
                        >
                            <Link className={'flex'} href={route(child.url, child.params)}>
                                {child.title}
                            </Link>
                        </SidebarMenuSubItem>
                    ),
                )}
        </SidebarMenuSub>
    );

    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Panel Hallux Clinic</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {sidebarItemsConfig.map((item) => (
                                <>
                                    {(user.is_super_admin ||
                                        !item.permissions ||
                                        (item.permissions &&
                                            item.permissions.some((el) => permissions.some((permission) => permission.name === el)))) && (
                                        <>
                                            {item.children ? (
                                                <Collapsible defaultOpen className="group/collapsible">
                                                    <SidebarMenuItem key={item.title}>
                                                        <CollapsibleTrigger asChild>
                                                            <SidebarMenuButton isActive={route(item.url) === location} asChild>
                                                                <a href={route(item.url)}>
                                                                    <item.icon />
                                                                    <span>{item.title}</span>
                                                                </a>
                                                            </SidebarMenuButton>
                                                        </CollapsibleTrigger>
                                                        <CollapsibleContent>{item.children && renderSubItems(item.children)}</CollapsibleContent>
                                                    </SidebarMenuItem>
                                                </Collapsible>
                                            ) : (
                                                <SidebarMenuItem key={item.title}>
                                                    <SidebarMenuButton asChild>
                                                        <a href={route(item.url)}>
                                                            <item.icon />
                                                            <span>{item.title}</span>
                                                        </a>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            )}
                                        </>
                                    )}
                                </>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="flex flex-col gap-2 border-t p-4">
                <p className={'text-sm text-gray-400'}>Zalogowano: {user.name}</p>
                <Button asChild variant="outline" className="flex-1">
                    <Link href={route('logout')}>Wyloguj się</Link>
                </Button>
            </SidebarFooter>
        </Sidebar>
    );
};

export default DashboardSidebar;
