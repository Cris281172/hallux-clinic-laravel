import { ChevronsUpDown, Circle, CircleCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { callToApi } from '../../../../utils/api/callToApi.js';
import { Button } from '../../../ui/button.tsx';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../../../ui/command.tsx';
import { Label } from '../../../ui/label.tsx';
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover.tsx';

const ProductsSelect = ({ productID, onSelect }) => {
    const timer = useRef(null);
    const [searchInput, setSearchInput] = useState('');
    const [products, setProducts] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState(productID ? productID : null);

    const fetchProducts = async () => {
        const response = await callToApi({ url: route('api.dashboard.store.products.get.all', { searchInput }) });
        setProducts(response.products || []);
    };

    useEffect(() => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(fetchProducts, 500);
    }, [searchInput]);

    const handleSelect = (product) => {
        setSelectedProducts(product);
        onSelect(product.id);
    };

    return (
        <Popover>
            <PopoverTrigger className="w-full">
                <div className={'flex flex-col gap-1'}>
                    <Label requiredStar={true}>Produkt do promocji</Label>
                    <Button variant="outline" role="combobox" className="w-full justify-between bg-transparent" type="button">
                        {selectedProducts ? `${selectedProducts.name} ` : 'Wybierz produkt do promocji...'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </div>
            </PopoverTrigger>

            <PopoverContent>
                <Command>
                    <CommandInput
                        value={searchInput}
                        onValueChange={(value) => setSearchInput(value)}
                        placeholder="Szukaj po: imię nazwisko, nr telefonu."
                    />
                    <CommandEmpty>Nie znaleziono.</CommandEmpty>
                    <CommandList filter={false}>
                        <CommandGroup>
                            {products.map((item) => (
                                <CommandItem className={'text-nowrap'} key={item.id} value={`${item.name}`} onSelect={() => handleSelect(item)}>
                                    {productID === item.id ? <CircleCheck className={'mr-2 h-4 w-4'} /> : <Circle className={'mr-2 h-4 w-4'} />}
                                    {item.name}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default ProductsSelect;
