import { useForm } from '@inertiajs/react';
import { pl } from 'date-fns/locale';
import DatePicker from 'react-datepicker';
import CategoriesSelect from '../../../../components/dashboard/store/categories/categories-select.jsx';
import ProductsSelect from '../../../../components/dashboard/store/products/products-select.jsx';
import UserSelect from '../../../../components/dashboard/store/users/user-select.jsx';
import FormError from '../../../../components/form-error.jsx';
import Heading from '../../../../components/heading.tsx';
import { Button } from '../../../../components/ui/button.tsx';
import { Checkbox } from '../../../../components/ui/checkbox.tsx';
import { InputGroup, InputGroupAddon, InputGroupInput } from '../../../../components/ui/input-group.tsx';
import { Input } from '../../../../components/ui/input.tsx';
import { Label } from '../../../../components/ui/label.tsx';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../../components/ui/select.tsx';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';
import formatToMySQLDateTime from '../../../../utils/formatToMySQLDateTime.js';

const CreatePromotion = () => {
    const { data, setData, errors, post } = useForm({
        promotion: {
            name: '',
            type: '',
            discountType: '',
            discountValue: '',
            startDate: '',
            endDate: '',
            minOrderValue: '',
            onlyOncePerUser: false,
        },
        userID: '',
        productID: '',
        categoryID: '',
    });

    const promotionTypes = [
        {
            name: 'Produkt',
            value: 'product',
        },
        {
            name: 'Kategoria',
            value: 'category',
        },
        {
            name: 'Koszyk',
            value: 'cart',
        },
        {
            name: 'Kod rabatowy',
            value: 'code',
        },
    ];

    const promotionVisibility = [
        {
            name: 'Wszyscy',
            value: 'all',
        },
        {
            name: 'Zalogowani',
            value: 'logged_in',
        },
        {
            name: 'Grupa użytkowników',
            value: 'specific_users',
        },
    ];

    const discountTypeConfig = [
        {
            name: 'Procentowa',
            value: 'percent',
        },
        {
            name: 'Kwota',
            value: 'fixed',
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('dashboard.promotion.create'));
    };

    return (
        <DashboardLayout>
            <Heading title={'Tworzenie promocji'} />
            <form onSubmit={handleSubmit}>
                <div className={'grid grid-cols-2 gap-4'}>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Nazwa promocji</Label>
                        <Input
                            value={data.promotion.name}
                            onChange={(e) => setData('promotion', { ...data.promotion, name: e.target.value })}
                            type="text"
                            id="name"
                            placeholder="Podaj nazwę kategorii"
                        />
                        <FormError id="fullName-error" message={errors.name} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Minimalna wartość zamówienia</Label>
                        <Input
                            value={data.promotion.minOrderValue}
                            onChange={(e) => setData('promotion', { ...data.promotion, minOrderValue: e.target.value })}
                            type="text"
                            id="name"
                            placeholder="Podaj minimalną wartość zamówienia"
                        />
                        <FormError id="fullName-error" message={errors.name} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="slug">Rodzaj zniżki</Label>
                        <Select
                            defaultValue={data.promotion.discountType}
                            onValueChange={(value) => setData('promotion', { ...data.promotion, discountType: value })}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Wybierz rodzaj promocji" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {discountTypeConfig.map((item, index) => (
                                        <SelectItem key={index} value={`${item.value}`}>
                                            {item.name}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <FormError id="phone-error" message={errors.slug} />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Kwota promocji</Label>
                        <InputGroup>
                            <InputGroupInput
                                value={data.promotion.discountValue}
                                onChange={(e) => setData('promotion', { ...data.promotion, discountValue: e.target.value })}
                                placeholder="Podaj kwotę promocji"
                            />
                            <InputGroupAddon align="inline-end">{data.promotion.discountType === 'percent' ? '%' : 'zł'}</InputGroupAddon>
                        </InputGroup>
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Rozpoczęcie promocji</Label>
                        <DatePicker
                            locale={pl}
                            id="date"
                            selected={data.promotion.startDate}
                            onChange={(value) => setData('promotion', { ...data.promotion, startDate: formatToMySQLDateTime(value) })}
                            dateFormat="dd/MM/yyyy"
                            className="border-input placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                            placeholderText={'Podaj datę rozpoczęcia promocji'}
                        />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Zakończenie promocji</Label>
                        <DatePicker
                            locale={pl}
                            id="date"
                            selected={data.promotion.endDate}
                            onChange={(value) => setData('promotion', { ...data.promotion, endDate: formatToMySQLDateTime(value) })}
                            dateFormat="dd/MM/yyyy"
                            className="border-input placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                            placeholderText={'Podaj datę zakończenia promocji'}
                        />
                    </div>
                </div>
                <div className={'mt-5'}>
                    <h3 className={'mb-2 text-lg font-bold underline'}>Typ promocji</h3>
                    <div className={'grid grid-cols-2 gap-4'}>
                        <div className="flex w-full flex-col gap-1.5">
                            <Label htmlFor="slug">Typ promocji</Label>
                            <Select
                                defaultValue={data.promotion.type}
                                onValueChange={(value) => setData('promotion', { ...data.promotion, type: value })}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Wybierz typ promocji" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {promotionTypes.map((item, index) => (
                                            <SelectItem key={index} value={`${item.value}`}>
                                                {item.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <FormError id="phone-error" message={errors.slug} />
                        </div>
                        {data.promotion.type === 'product' && (
                            <ProductsSelect productID={data.productID} onSelect={(value) => setData('productID', value)} />
                        )}
                        {data.promotion.type === 'category' && (
                            <CategoriesSelect categoryID={data.categoryID} onSelect={(value) => setData('categoryID', value)} />
                        )}
                    </div>
                </div>
                <div className={'mt-5'}>
                    <h3 className={'mb-2 text-lg font-bold underline'}>Widoczność</h3>
                    <div className={'grid grid-cols-2 gap-4'}>
                        <div className="flex w-full flex-col gap-1.5">
                            <Label htmlFor="slug">Widoczność promocji</Label>
                            <Select
                                defaultValue={data.promotion.visibility}
                                onValueChange={(value) => setData('promotion', { ...data.promotion, visibility: value })}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Wybierz typ promocji" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {promotionVisibility.map((item, index) => (
                                            <SelectItem key={index} value={`${item.value}`}>
                                                {item.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <FormError id="phone-error" message={errors.slug} />
                        </div>
                        {data.promotion.visibility === 'specific_users' && (
                            <>
                                <UserSelect userID={data.userID} onSelect={(value) => setData('userID', value)} />
                                <div className="flex items-center gap-3">
                                    <Checkbox
                                        onCheckedChange={(value) => setData('promotion', { ...data.promotion, onlyOncePerUser: value })}
                                        id="onlyOncePerUser"
                                    />
                                    <Label htmlFor="onlyOncePerUser">Jedna procmoja do wykorzystania przez użytkownika</Label>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <Button className={'mt-5'} type={'submit'}>
                    Dodaj
                </Button>
            </form>
        </DashboardLayout>
    );
};

export default CreatePromotion;
