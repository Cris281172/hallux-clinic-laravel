import { Inertia } from '@inertiajs/inertia';
import { usePage } from '@inertiajs/react';
import _ from 'lodash';
import { LoaderCircle, Search, XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { callToApi } from '../../../utils/api/callToApi.js';
import getR2Url from '../../../utils/getR2Url.js';
import getMainProductImage from '../../../utils/store/getMainProductImage.js';
import { Button } from '../../ui/button.tsx';
import { Input } from '../../ui/input.tsx';

const SearchEngine = () => {
    const { props } = usePage();
    const initialQuery = props.searchQuery || '';

    const [query, setQuery] = useState(initialQuery);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [open, setOpen] = useState(false);
    const [userTyped, setUserTyped] = useState(false);
    const [loading, setLoading] = useState(false);

    const wrapperRef = useRef(null);
    const timer = useRef(null);

    const fetchSuggestions = _.debounce(async () => {
        if (query.length < 2) {
            setProducts([]);
            setOpen(false);
            setLoading(false);
            return;
        }

        const response = await callToApi({
            url: route('store.search.suggestions', { q: query }),
        });
        setProducts(response.products);
        setCategories(response.categories);

        if (userTyped) {
            setOpen(true);
        }
        setLoading(false);
    }, 250);

    useEffect(() => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(fetchSuggestions, 500);
    }, [query]);

    const handleChange = (e) => {
        setLoading(true);
        const value = e.target.value;
        setQuery(value);
        setUserTyped(true);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleKeyDown = (e) => {
        if (e.keyCode === 13) {
            Inertia.get(route('store.products', { q: e.target.value }));
        }
    };

    const handleSearch = () => {
        Inertia.get(route('store.products', { q: query }));
    };

    const handleResetSearch = () => {
        setQuery('');
        setOpen(false);
        Inertia.get(route('store.products'));
    };

    return (
        <div className="relative w-128" ref={wrapperRef}>
            <div className={'flex gap-2'}>
                <div className={'relative w-full'}>
                    <Input
                        onFocus={() => setOpen(true)}
                        value={query}
                        onChange={handleChange}
                        placeholder="Szukaj produktu..."
                        onKeyDown={handleKeyDown}
                    />
                    {query && <XIcon className={'absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer'} size={20} onClick={handleResetSearch} />}
                </div>
                <Button onClick={handleSearch}>
                    <Search />
                </Button>
            </div>
            {loading ? (
                <div className="absolute right-0 left-0 z-10 mt-1 flex justify-center rounded-md border bg-white p-12">
                    <LoaderCircle className="h-12 w-12 animate-spin text-black" />
                </div>
            ) : (
                <>
                    {open && (products.length > 0 || categories.length > 0) ? (
                        <div className="absolute right-0 left-0 z-40 mt-1 rounded-md border bg-white p-2">
                            {products.length > 0 && (
                                <div>
                                    <p className={'text-dark-plum ml-2 font-bold'}>Produkty</p>
                                    {products.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => Inertia.get(route('store.products', { q: item.name }))}
                                            className="flex cursor-pointer gap-2 px-3 py-2 text-sm text-black"
                                        >
                                            <img
                                                className="aspect-square max-w-20 rounded-t-2xl object-fill"
                                                src={getR2Url(getMainProductImage(item.images))}
                                            />
                                            {item.name}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {categories.length > 0 && (
                                <div>
                                    <p className={'text-dark-plum ml-2 font-bold'}>Kategorie</p>
                                    {categories.map((item) => (
                                        <div
                                            key={item.slug}
                                            onClick={() => Inertia.get(route('store.category.products', { slug: item.slug }))}
                                            className="flex cursor-pointer gap-2 px-3 py-1 text-sm text-black"
                                        >
                                            {item.name} <span className={'text-sm text-gray-400'}>({item.products_count})</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            {open && (
                                <div className="absolute right-0 left-0 z-40 mt-1 rounded-md border bg-white p-4">
                                    <p className={'text-md text-center font-medium text-black'}>Brak podpowiedzi!</p>
                                    <p className={'text-sm font-light text-gray-900'}>Wciśnij Enter lub wybierz ikonę lupy obok pola wyszukiwania.</p>
                                </div>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default SearchEngine;
