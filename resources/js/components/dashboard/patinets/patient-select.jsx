import { ChevronsUpDown, Circle, CircleCheck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../../ui/button.tsx';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../../ui/command.tsx';
import { Label } from '../../ui/label.tsx';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover.tsx';

const PatientSelect = ({ onSelect, patientID, visit }) => {
    const timer = useRef(null);
    const [searchInput, setSearchInput] = useState('');
    const [patients, setPatients] = useState([]);
    const [selectedPatient, setSelectedPatient] = useState(patientID ? visit?.patient : null);

    const fetchData = async () => {
        const response = await fetch(route('api.dashboard.patients.get.search', { q: searchInput }));
        const data = await response.json();
        console.log(data);
        if (data.success) {
            setPatients(data.data);
        }
    };

    useEffect(() => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(fetchData, 500);
    }, [searchInput]);

    const handleSelect = (patient) => {
        setSelectedPatient(patient);
        onSelect(patient.id);
    };

    return (
        <Popover>
            <PopoverTrigger className="w-full">
                <div className={'flex flex-col gap-1'}>
                    <Label requiredStar={true}>Wybierz pacjenta do wizyty</Label>
                    <Button variant="outline" role="combobox" className="w-full justify-between bg-transparent" type="button">
                        {selectedPatient
                            ? `${selectedPatient.full_name} ${selectedPatient.phone ? `(${selectedPatient.phone})` : ''} `
                            : 'Wybierz pacjenta...'}
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
                            {patients.map((item) => (
                                <CommandItem
                                    className={'text-nowrap'}
                                    key={item.id}
                                    value={`${item.full_name} (${item.phone})`}
                                    onSelect={() => handleSelect(item)}
                                >
                                    {patientID === item.id ? <CircleCheck className={'mr-2 h-4 w-4'} /> : <Circle className={'mr-2 h-4 w-4'} />}
                                    {item.full_name} {item.phone ? `(${item.phone})` : ''}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default PatientSelect;
