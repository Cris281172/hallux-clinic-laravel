import { useForm } from '@inertiajs/react';
import { useRef, useState } from 'react';
import ProductSlots from '../../../../components/dashboard/store/product-slots.jsx';
import CategoryProductsCommand from '../../../../components/dashboard/store/products/category-products-command.jsx';
import SortableGallery from '../../../../components/dashboard/store/products/SortableGallery.jsx';
import EditorJSComponent from '../../../../components/editor-js-component.jsx';
import FormError from '../../../../components/form-error.jsx';
import Heading from '../../../../components/heading.js';
import { Button } from '../../../../components/ui/button.js';
import { Checkbox } from '../../../../components/ui/checkbox.js';
import { Input } from '../../../../components/ui/input.js';
import { Label } from '../../../../components/ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../../components/ui/select.js';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';
import { callToApi } from '../../../../utils/api/callToApi.js';
import toSlug from '../../../../utils/toSlug.js';

const EditProduct = ({ product, categories }) => {
    const { data, setData, errors, processing, post } = useForm({
        name: product.name || '',
        slug: product.slug || '',
        description: product.description || '',
        price: product.price || '',
        type: product.type || '',
        isActive: product.is_active,
        categoryID: product.categories[0].id,
        images: product.images,
        attributes: product.attributes,
        variants: product.variants,
        similar: product.similar_products,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.product.edit', { id: product.id }));
    };
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
    const [editorData, setEditorData] = useState(
        product?.description ? { time: Date.now(), blocks: JSON.parse(product.description), version: '2.26.5' } : null,
    );

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
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            type="text"
                            id="price"
                            placeholder="Podaj cene produktu"
                        />
                        <FormError id="email-error" message={errors.price} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label>Typ produktu</Label>
                        <Select defaultValue={data.type} onValueChange={(value) => setData('type', value)}>
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
                    <ProductSlots
                        dataKey="attributes"
                        initialSlots={data.attributes}
                        setData={setData}
                        fetchItems={fetchAttributes}
                        searchable={true}
                    />
                    <ProductSlots dataKey="variants" initialSlots={data.variants} setData={setData} fetchItems={fetchVariants} searchable={true} />
                    <ProductSlots dataKey="similar" initialSlots={data.similar} setData={setData} fetchItems={fetchProducts} searchable={true} />
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

export default EditProduct;
