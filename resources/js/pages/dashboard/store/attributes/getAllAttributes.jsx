import { Link, usePage } from '@inertiajs/react';
import { Settings, Trash } from 'lucide-react';
import AppPagination from '../../../../components/app-pagination.jsx';
import ConfirmationDialog from '../../../../components/confirmation-dialog.jsx';
import Heading from '../../../../components/heading.js';
import { Card, CardHeader, CardTitle } from '../../../../components/ui/card.js';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../../components/ui/dropdown-menu.js';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';

const GetAllAttributes = ({ attributes }) => {
    const { props } = usePage();
    return (
        <DashboardLayout>
            <Heading title={'Wszystkie atrybuty'} />
            <div className={'grid grid-cols-4 gap-5'}>
                {attributes.data.map((attribute, index) => (
                    <Card className="@container/card relative gap-2" key={index}>
                        <div className={'absolute top-0 right-0 m-2 flex gap-2'}>
                            <DropdownMenu>
                                <DropdownMenuTrigger className={'cursor-pointer'}>
                                    <Settings />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                        <Link href={route('dashboard.attribute.edit.view', { id: attribute.id })}>Edytuj wariant</Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <ConfirmationDialog
                                routeName="dashboard.attribute.delete"
                                params={attribute.id}
                                title="Usuń atrybut?"
                                desc={`Czy na pewno chcesz trwale usunąć atrybut "${attribute.name} ${attribute.value}"?`}
                            >
                                <Trash className="cursor-pointer text-red-600" />
                            </ConfirmationDialog>
                        </div>
                        <CardHeader>
                            <CardTitle>Nazwa: {attribute.name}</CardTitle>
                            <CardTitle>Wartość: {attribute.value}</CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
            <AppPagination
                currentPage={attributes.current_page}
                lastPage={attributes.last_page}
                url={props.ziggy.location.split(props.ziggy.url)[1]}
            />
        </DashboardLayout>
    );
};

export default GetAllAttributes;
