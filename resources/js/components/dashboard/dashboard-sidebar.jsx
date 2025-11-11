import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { Link, usePage } from '@inertiajs/react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible';
import sidebarItemsConfig from '../../config/dashboard/sidebar-items-config.js';
import { SidebarFooter, SidebarMenuSub, SidebarMenuSubItem } from '../ui/sidebar.js';

const DashboardSidebar = () => {
    const { props } = usePage();
    const permissions = props.userPermissions;
    const user = props.auth.user;
    const location = props.ziggy.location;

    return (
        <Sidebar>
            <SidebarContent className={'border-r-2 pt-20'}>
                <SidebarGroup>
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
                                                        <CollapsibleContent>
                                                            <SidebarMenuSub>
                                                                {item.children.map((childrenItem) => (
                                                                    <>
                                                                        {permissions.find((el) => el.name === childrenItem.permission) ||
                                                                        user.is_super_admin ? (
                                                                            <SidebarMenuSubItem
                                                                                className={`pt-0.5 pb-0.5 pl-2 ${route(childrenItem.url, childrenItem.params) === location ? 'bg-sidebar-accent rounded-md' : ''}`}
                                                                            >
                                                                                <Link
                                                                                    className={'flex'}
                                                                                    href={route(childrenItem.url, childrenItem.params)}
                                                                                >
                                                                                    {childrenItem.title}
                                                                                </Link>
                                                                            </SidebarMenuSubItem>
                                                                        ) : (
                                                                            <></>
                                                                        )}
                                                                    </>
                                                                ))}
                                                            </SidebarMenuSub>
                                                        </CollapsibleContent>
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
            <SidebarFooter className="flex flex-col gap-2 border-t-2 border-r-2 p-4">
                <p className={'text-sm text-gray-400'}>Wersja: v.1.0.0</p>
                <p className={'text-sm text-gray-400'}>Created By Krzysztof Juczyński</p>
            </SidebarFooter>
        </Sidebar>
    );
};

export default DashboardSidebar;
