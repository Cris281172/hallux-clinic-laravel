import { useEffect, useRef, useState } from 'react';

const generateHours = (start = 8, end = 20, step = 30) => {
    const times = [];
    for (let hour = start; hour <= end; hour++) {
        for (let min = 0; min < 60; min += step) {
            const h = String(hour).padStart(2, '0');
            const m = String(min).padStart(2, '0');
            times.push(`${h}:${m}`);
        }
    }
    return times;
};

const TimePicker = ({ selectedTime, setSelectedTime }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    const handleClickOutside = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const times = generateHours();

    return (
        <div className="relative" ref={dropdownRef}>
            <input
                type="text"
                value={selectedTime}
                readOnly
                onClick={() => setOpen(!open)}
                className="ext-sm w-full cursor-pointer rounded-lg border pt-[5px] pr-[16px] pb-[5px] pl-[16px] shadow-sm focus:outline-none"
                placeholder="Wybierz godzinę"
            />
            {open && (
                <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border bg-black shadow-md">
                    {times.map((time) => (
                        <li
                            key={time}
                            onClick={() => {
                                setSelectedTime(time);
                                setOpen(false);
                            }}
                            className="cursor-pointer px-4 py-2 hover:bg-stone-900"
                        >
                            {time}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TimePicker;
