import { Inertia } from '@inertiajs/inertia';
import { useEffect, useRef, useState } from 'react';
import { Input } from '../../../ui/input.js';

const PriceFilter = () => {
    const searchParams = new URLSearchParams(window.location.search);

    const initialMin = Number(searchParams.get('min_price') ?? 25);
    const initialMax = Number(searchParams.get('max_price') ?? 75);

    const [value, setValue] = useState([initialMin, initialMax]);

    const timer = useRef();
    const isFirst = useRef(true);

    const setPrice = () => {
        Inertia.get(
            route('store.products'),
            { min_price: value[0], max_price: value[1] },
            { preserveState: true, preserveScroll: true, only: ['products'] },
        );
    };

    useEffect(() => {
        if (isFirst.current) {
            isFirst.current = false;
            return;
        }

        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(setPrice, 1000);

        return () => clearTimeout(timer.current);
    }, [value]);

    return (
        <div className="mt-5 flex gap-2">
            <Input value={value[0]} onChange={(e) => setValue([Number(e.target.value), value[1]])} />
            <Input value={value[1]} onChange={(e) => setValue([value[0], Number(e.target.value)])} />
        </div>
    );
};

export default PriceFilter;
