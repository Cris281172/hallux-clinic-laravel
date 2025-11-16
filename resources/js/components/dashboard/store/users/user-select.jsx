import { ChevronsUpDown, Circle, CircleCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../../../ui/button.tsx';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../../../ui/command.tsx';
import { Label } from '../../../ui/label.tsx';
import { Popover, PopoverContent, PopoverTrigger } from '../../../ui/popover.tsx';

const UserSelect = ({ onSelect, userID }) => {
    const timer = useRef(null);
    const [searchInput, setSearchInput] = useState('');
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(userID ? userID : null);

    const fetchData = async () => {
        const response = await fetch(route('api.dashboard.store.users.get.search', { q: searchInput }));
        const data = await response.json();
        console.log(data);
        if (data.success) {
            setUsers(data.data);
        }
    };

    useEffect(() => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(fetchData, 500);
    }, [searchInput]);

    const handleSelect = (user) => {
        setSelectedUser(user);
        onSelect(user.id);
    };

    return (
        <Popover>
            <PopoverTrigger className="w-full">
                <div className={'flex flex-col gap-1'}>
                    <Label requiredStar={true}>Użytkownik do promocji</Label>
                    <Button variant="outline" role="combobox" className="w-full justify-between bg-transparent" type="button">
                        {selectedUser ? `${selectedUser.name} ${selectedUser.email} ` : 'Wybierz użytkownik do promocji...'}
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
                            {users.map((item) => (
                                <CommandItem
                                    className={'text-nowrap'}
                                    key={item.id}
                                    value={`${item.name} (${item.email})`}
                                    onSelect={() => handleSelect(item)}
                                >
                                    {userID === item.id ? <CircleCheck className={'mr-2 h-4 w-4'} /> : <Circle className={'mr-2 h-4 w-4'} />}
                                    {item.name} {item.email}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default UserSelect;
