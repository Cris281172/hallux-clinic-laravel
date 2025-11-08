import { useForm } from '@inertiajs/react';
import { Check } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import ProductSlots from '../../../../components/dashboard/store/product-slots.jsx';
import CategoryProductsCommand from '../../../../components/dashboard/store/products/category-products-command.jsx';
import SortableGallery from '../../../../components/dashboard/store/products/SortableGallery.jsx';
import EditorJSComponent from '../../../../components/editor-js-component.jsx';
import FormError from '../../../../components/form-error.jsx';
import Heading from '../../../../components/heading.tsx';
import { Button } from '../../../../components/ui/button.tsx';
import { Checkbox } from '../../../../components/ui/checkbox.tsx';
import { CommandItem } from '../../../../components/ui/command.js';
import { Input } from '../../../../components/ui/input.tsx';
import { Label } from '../../../../components/ui/label.tsx';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../../components/ui/select.tsx';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';
import { callToApi } from '../../../../utils/api/callToApi.js';
import toSlug from '../../../../utils/toSlug.js';

const CreateProduct = ({ categories }) => {
    const { data, setData, errors, processing, post } = useForm({
        name: '',
        slug: '',
        description: '',
        price: '',
        type: '',
        isActive: true,
        categoryID: '',
        images: [],
        attributes: [],
        variants: [],
        similar: [],
    });

    const types = [
        {
            name: 'Vouchery',
            id: 'voucher',
        },
        {
            name: 'Obuwie',
            id: 'shoe',
        },
        {
            name: 'Wkładki',
            id: 'insert',
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.product.create'), {
            onSuccess: () => {
                toast.success('Produkt został dodany.');
            },
            onError: (err) => {
                toast.error('Błąd podczas dodawania produktu');
            },
        });
    };

    const renderTree = (nodes, level = 0, selected, onSelect) => {
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
    const handleSelect = (id) => {
        if (id === data.categoryID) {
            setData('categoryID', '');
        } else {
            setData('categoryID', id);
        }
    };

    const setImages = (images) => {
        setData('images', images);
    };
    const ejInstance = useRef(null);
    const [editorData, setEditorData] = useState(null);

    const handleEditorChange = (data) => {
        setEditorData(data);
        setData('description', JSON.stringify(data.blocks));
    };

    const fetchAttributes = async (search) => {
        const response = await callToApi({ url: route('api.dashboard.store.attributes.get.all', { search }) });
        return response.attributes || [];
    };

    const fetchVariants = async (search) => {
        const response = await callToApi({ url: route('api.dashboard.store.variants.get.all', { search }) });
        return response.variants || [];
    };

    const fetchProducts = async (search) => {
        const response = await callToApi({ url: route('api.dashboard.store.products.get.all', { search }) });
        return response.products || [];
    };

    return (
        <DashboardLayout>
            <Heading title={'Dodawanie produktu do sklepu'} />
            <form className="space-y-8" onSubmit={handleSubmit}>
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Nazwa produktu</Label>
                        <Input
                            value={data.name}
                            onChange={(e) => {
                                setData('name', e.target.value);
                                setData('slug', toSlug(e.target.value.replace(' ', '-')));
                            }}
                            type="text"
                            id="name"
                            placeholder="Podaj nazwę produktu"
                        />
                        <FormError id="fullName-error" message={errors.name} />
                    </div>

                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="slug">Slug produktu</Label>
                        <Input
                            value={data.slug}
                            onChange={(e) => setData('slug', e.target.value)}
                            type="text"
                            id="slug"
                            placeholder="Podaj slug produktu"
                        />
                        <FormError id="phone-error" message={errors.slug} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="price">Cena produktu</Label>
                        <Input
                            value={data.email}
                            onChange={(e) => setData('price', e.target.value)}
                            type="text"
                            id="price"
                            placeholder="Podaj cene produktu"
                        />
                        <FormError id="email-error" message={errors.price} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label>Typ produktu</Label>
                        <Select onValueChange={(value) => setData('type', value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Wybierz typ produktu" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {types.map((item, index) => (
                                        <SelectItem key={index} value={`${item.id}`}>
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <FormError message={errors.type} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="price">Kategoria produktu</Label>
                        <CategoryProductsCommand categories={categories} setData={setData} data={data} />
                    </div>
                    <ProductSlots dataKey="attributes" setData={setData} fetchItems={fetchAttributes} searchable={true} />
                    <ProductSlots dataKey="variants" setData={setData} fetchItems={fetchVariants} searchable={true} />
                    <ProductSlots dataKey="similar" setData={setData} fetchItems={fetchProducts} searchable={true} />
                </div>
                <div>
                    <Label>Treść posta</Label>
                    <EditorJSComponent data={editorData} onChange={handleEditorChange} ejInstance={ejInstance} />
                </div>
                <SortableGallery images={data.images} setImages={setImages} />
                <div className="flex items-center gap-3">
                    <Checkbox defaultChecked={data.isActive} onCheckedChange={(value) => setData('isActive', value)} id="isActive" />
                    <Label htmlFor="isActive">Produkt aktywny</Label>
                </div>
                <Button type="submit" disabled={processing}>
                    Dodaj produkt
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default CreateProduct;
