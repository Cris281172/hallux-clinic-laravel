import { useForm } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { toast } from 'sonner';
import CategoryProductsCommand from '../../../../components/dashboard/store/products/category-products-command.jsx';
import FormError from '../../../../components/form-error.jsx';
import Heading from '../../../../components/heading.js';
import { Button } from '../../../../components/ui/button.js';
import { CommandItem } from '../../../../components/ui/command.js';
import { Input } from '../../../../components/ui/input.js';
import { Label } from '../../../../components/ui/label.js';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';
import toSlug from '../../../../utils/toSlug.js';

const CreateCategory = ({ categories }) => {
    const { data, setData, errors, processing, post } = useForm({
        name: '',
        slug: '',
        description: '',
        parentID: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.category.create'), {
            onSuccess: () => {
                toast.success('Kategoria została dodana.');
            },
            onError: (err) => {
                toast.error('Błąd podczas dodawania kategorii');
            },
        });
    };

    const renderTree = (nodes, level = 0, selected, onSelect) => {
        return nodes.map((node) => (
            <div key={node.id}>
                <CommandItem
                    value={String(node.id)}
                    onSelect={() => onSelect(node.id)}
                    className={`pl-${level * 4} ${selected === node.id ? 'bg-green-800' : ''} flex items-center justify-between`}
                >
                    <span>{node.name}</span>
                    {selected === node.id && <Check className="h-4 w-4" />}
                </CommandItem>
                {node.children && renderTree(node.children, level + 1, selected, onSelect)}
            </div>
        ));
    };

    return (
        <DashboardLayout>
            <Heading title={'Dodawanie kategorii do sklepu'} />
            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Nazwa kategorii</Label>
                        <Input
                            value={data.name}
                            onChange={(e) => {
                                setData('name', e.target.value);
                                setData('slug', toSlug(e.target.value.replace(' ', '-')));
                            }}
                            type="text"
                            id="name"
                            placeholder="Podaj nazwę kategorii"
                        />
                        <FormError id="fullName-error" message={errors.name} />
                    </div>

                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="slug">Slug kategorii</Label>
                        <Input
                            value={data.slug}
                            onChange={(e) => setData('slug', e.target.value)}
                            type="text"
                            id="slug"
                            placeholder="Podaj slug kategorii"
                        />
                        <FormError id="phone-error" message={errors.slug} />
                    </div>

                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="price">Cena produktu</Label>
                        <CategoryProductsCommand name={'parentID'} categories={categories} setData={setData} data={data} />
                    </div>
                </div>
                <Button type="submit" disabled={processing}>
                    Dodaj kategorie
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default CreateCategory;
