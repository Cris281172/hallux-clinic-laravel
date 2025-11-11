import { renderTree } from '../../../../components/dashboard/store/products/category-products-command.jsx';
import Heading from '../../../../components/heading.js';
import { Command, CommandGroup, CommandList } from '../../../../components/ui/command.js';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';

const GetAllCategories = ({ categories }) => {
    return (
        <DashboardLayout>
            <Heading title={'Wszystkie kategorie'} />
            <div className={'grid grid-cols-3 gap-15'}>
                <Command>
                    <CommandList>
                        <CommandGroup heading="Kategorie">{renderTree(categories, 0, +data.categoryID, handleSelect)}</CommandGroup>
                    </CommandList>
                </Command>
            </div>
        </DashboardLayout>
    );
};

export default GetAllCategories;
