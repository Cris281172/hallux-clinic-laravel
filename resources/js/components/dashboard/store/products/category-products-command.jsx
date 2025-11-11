import { Check } from 'lucide-react';
import { Command, CommandGroup, CommandItem, CommandList } from '../../../ui/command.js';

export const renderTree = (nodes, level = 0, selected, onSelect) => {
    return nodes.map((node) => {
        const children = node.children || node.children_recursive;
        return (
            <div key={node.id}>
                <CommandItem
                    value={String(node.id)}
                    onSelect={() => onSelect(node.id)}
                    className={`pl-${level * 4} ${selected === node.id ? 'bg-green-800 text-white' : ''} flex items-center justify-between`}
                >
                    <span>
                        {node.name} ({node.products_count})
                    </span>
                    {selected === node.id && <Check className="h-4 w-4" />}
                </CommandItem>

                {children?.length > 0 && renderTree(children, level + 1, selected, onSelect)}
            </div>
        );
    });
};

const CategoryProductsCommand = ({ setData, categories, data, name = 'categoryID' }) => {
    const handleSelect = (id) => {
        if (id === data[name]) {
            setData(name, '');
        } else {
            setData(name, id);
        }
    };
    return (
        <Command>
            <CommandList>
                <CommandGroup heading="Kategorie">{renderTree(categories, 0, +data[name], handleSelect)}</CommandGroup>
            </CommandList>
        </Command>
    );
};
export default CategoryProductsCommand;
