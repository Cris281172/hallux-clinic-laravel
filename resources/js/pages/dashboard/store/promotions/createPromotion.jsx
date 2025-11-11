import { useForm } from '@inertiajs/react';
import { pl } from 'date-fns/locale';
import { ChevronsUpDown } from 'lucide-react';
import DatePicker from 'react-datepicker';
import FormError from '../../../../components/form-error.jsx';
import Heading from '../../../../components/heading.tsx';
import { Button } from '../../../../components/ui/button.tsx';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandList } from '../../../../components/ui/command.tsx';
import { InputGroup, InputGroupAddon, InputGroupInput } from '../../../../components/ui/input-group.tsx';
import { Input } from '../../../../components/ui/input.tsx';
import { Label } from '../../../../components/ui/label.tsx';
import { Popover, PopoverContent, PopoverTrigger } from '../../../../components/ui/popover.tsx';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../../components/ui/select.tsx';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';

const CreatePromotion = () => {
    const { data, setData, errors } = useForm({
        promotion: {
            name: '',
            type: '',
            discountType: '',
            discountValue: '',
            startAt: '',
            endAt: '',
        },
    });

    const promotionTypes = [
        {
            name: 'Wszyscy użytkownicy',
            value: 'all_users',
        },
        {
            name: 'Określeni użytkownicy',
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

    const handleChangeSearchValue = () => {};

    return (
        <DashboardLayout>
            <Heading title={'Tworzenie promocji'} />
            <form>
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
                            selected={data.promotion.startAt}
                            onChange={(value) => setData('promotion', { ...data.promotion, startAt: value })}
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
                            selected={data.promotion.endAt}
                            onChange={(value) => setData('promotion', { ...data.promotion, endAt: value })}
                            dateFormat="dd/MM/yyyy"
                            className="border-input placeholder:text-muted-foreground focus-visible:ring-ring w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                            placeholderText={'Podaj datę zakończenia promocji'}
                        />
                    </div>
                    <div className="flex w-full flex-col gap-1.5">
                        <Label htmlFor="name">Zakończenie promocji</Label>
                        <Popover>
                            <PopoverTrigger className="w-full">
                                <Button variant="outline" role="combobox" className="w-full justify-between" type="button">
                                    Wybierz...
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent>
                                <Command>
                                    <CommandInput onValueChange={handleChangeSearchValue} placeholder="Szukaj..." />
                                    <CommandEmpty>Nie znaleziono.</CommandEmpty>
                                    <CommandList>
                                        <CommandGroup>
                                            {/*{availableItems.map((item) => (*/}
                                            {/*    <CommandItem*/}
                                            {/*        key={item.id}*/}
                                            {/*        value={`${item.name} ${item.value}`}*/}
                                            {/*        disabled={isTakenByOther(item.id, slot.id)}*/}
                                            {/*        onSelect={() => updateSlotValue(slot.id, item.id.toString())}*/}
                                            {/*    >*/}
                                            {/*        <Check*/}
                                            {/*            className={cn('mr-2 h-4 w-4', slot.value === `${item.id}` ? 'opacity-100' : 'opacity-0')}*/}
                                            {/*        />*/}
                                            {/*        {item.name} {item.value}*/}
                                            {/*    </CommandItem>*/}
                                            {/*))}*/}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
            </form>
        </DashboardLayout>
    );
};

export default CreatePromotion;
