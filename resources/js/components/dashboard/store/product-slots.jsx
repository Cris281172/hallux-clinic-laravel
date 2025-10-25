import { Check, ChevronsUpDown, Trash } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../../lib/utils.js';
import { makeID } from '../../../utils/makeID.js';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../..//ui/command.js';
import { Popover, PopoverContent, PopoverTrigger } from '../..//ui/popover.js';
import { Button } from '../../ui/button.js';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card.js';

const ProductSlots = ({ dataKey, items, setData, initialSlots = [], fetchItems, searchable = false }) => {
    const [slots, setSlots] = useState([]);
    const [openSlot, setOpenSlot] = useState(null);
    const [searchInput, setSearchInput] = useState('');
    const [availableItems, setAvailableItems] = useState(items);
    const timer = useRef(null);

    const syncData = (newSlots) => {
        setData(
            dataKey,
            newSlots.map((s) => s.value ?? ''),
        );
    };

    const addSlot = () => {
        const id = makeID();
        const newSlots = [...slots, { id, value: '' }];
        setSlots(newSlots);
        syncData(newSlots);
    };

    const removeSlot = (slotId) => {
        const newSlots = slots.filter((s) => s.id !== slotId);
        setSlots(newSlots);
        syncData(newSlots);
        if (openSlot === slotId) setOpenSlot(null);
    };

    const updateSlotValue = (slotId, value) => {
        const newSlots = slots.map((s) => (s.id === slotId ? { ...s, value } : s));
        setSlots(newSlots);
        syncData(newSlots);
        setOpenSlot(null);
    };

    const isTakenByOther = (id, currentSlotId) => slots.some((s) => s.value === `${id}` && s.id !== currentSlotId);

    const fetchData = async () => {
        if (fetchItems) {
            const response = await fetchItems(searchInput);
            if (response) setAvailableItems(response);
        }
    };

    useEffect(() => {
        if (!searchable) return;

        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(fetchData, 500);
    }, [searchInput]);

    useEffect(() => {
        if (initialSlots.length && availableItems?.length && slots.length === 0) {
            const data = initialSlots.map((slot) => {
                const item = availableItems.find((i) => i.id === slot.id);
                return {
                    id: makeID(),
                    name: item?.name || slot.name,
                    value: item?.id?.toString() || '',
                };
            });
            setSlots(data);
            syncData(data);
        }
    }, [initialSlots, availableItems]);

    const handleChangeSearchValue = (value) => setSearchInput(value);

    return (
        <div className="flex flex-col gap-1.5">
            <Button type="button" onClick={addSlot}>
                Dodaj {dataKey === 'attributes' ? 'atrybut' : 'wariant'}
            </Button>

            <div className="max-h-100 overflow-y-scroll">
                {slots.map((slot, idx) => {
                    const selected = availableItems.find((i) => `${i.id}` === slot.value);

                    return (
                        <Card key={slot.id}>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <CardTitle>
                                    {dataKey === 'attributes' ? `Atrybut` : `Wariant`} {idx + 1}
                                </CardTitle>
                                <Button size="icon" type="button" variant="destructive" onClick={() => removeSlot(slot.id)}>
                                    <Trash />
                                </Button>
                            </CardHeader>

                            <CardContent>
                                <Popover open={openSlot === slot.id} onOpenChange={(isOpen) => setOpenSlot(isOpen ? slot.id : null)}>
                                    <PopoverTrigger className="w-full">
                                        <Button variant="outline" role="combobox" className="w-full justify-between" type="button">
                                            {selected ? `${selected.name} ${selected.value}` : 'Wybierz...'}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>

                                    <PopoverContent>
                                        <Command>
                                            {searchable && <CommandInput onValueChange={handleChangeSearchValue} placeholder="Szukaj..." />}
                                            <CommandEmpty>Nie znaleziono.</CommandEmpty>
                                            <CommandList>
                                                <CommandGroup>
                                                    {availableItems.map((item) => (
                                                        <CommandItem
                                                            key={item.id}
                                                            value={`${item.name} ${item.value}`}
                                                            disabled={isTakenByOther(item.id, slot.id)}
                                                            onSelect={() => updateSlotValue(slot.id, item.id.toString())}
                                                        >
                                                            <Check
                                                                className={cn(
                                                                    'mr-2 h-4 w-4',
                                                                    slot.value === `${item.id}` ? 'opacity-100' : 'opacity-0',
                                                                )}
                                                            />
                                                            {item.name} {item.value}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </CardContent>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductSlots;
