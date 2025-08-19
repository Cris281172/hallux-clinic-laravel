import { Link, router } from '@inertiajs/react';
import { Ban } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import AppPagination from '../../../components/app-pagination.jsx';
import DialogConfirmation from '../../../components/dashboard/dialog-confirmation.jsx';
import Heading from '../../../components/heading.js';
import { Alert, AlertTitle } from '../../../components/ui/alert.js';
import { Button } from '../../../components/ui/button.js';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select.js';
import { Switch } from '../../../components/ui/switch.js';
import usePermissions from '../../../hooks/usePermissions.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';
import formatDatePolish from '../../../utils/formatDatePolish.js';

const VoucherItem = ({ voucher, editVisible, updateStatusVisible, generateVoucherPDFVisible, deleteVoucherVisible }) => {
    const handleChangeUsed = async (value) => {
        await router.post(route('dashboard.voucher.used.update', voucher.id), { used: value });
    };

    return (
        <div className="flex flex-col gap-6" key={voucher.id}>
            <Card className="rounded-xl">
                <CardHeader className="pt-2">
                    <CardDescription>Dodany: {formatDatePolish(voucher.created_at)} </CardDescription>
                    <CardDescription>Ważny do: {formatDatePolish(voucher.valid_to)} </CardDescription>
                    <CardTitle className="text-xl">{voucher.full_name}</CardTitle>
                    <CardDescription>
                        <p>{voucher.price} zł</p>
                        <p>Nr: {voucher.code}</p>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className={'mb-5'}>{voucher.service ? voucher.service : 'Na wybrana usługę'}</p>
                    {updateStatusVisible && (
                        <div className={'flex items-center gap-1'}>
                            <Label htmlFor={`used-${voucher.id}`}>Voucher wykorzystany</Label>
                            <Switch onCheckedChange={(value) => handleChangeUsed(value)} id={`used-${voucher.id}`} checked={voucher.used} />
                        </div>
                    )}
                </CardContent>
                <CardFooter className={'mt-5 flex gap-2'}>
                    {editVisible && (
                        <Button asChild className={'flex-1'}>
                            <Link href={route('dashboard.voucher.edit.view', voucher.id)}>Edytuj</Link>
                        </Button>
                    )}
                    {deleteVoucherVisible && (
                        <DialogConfirmation
                            handleConfirmation={() => router.delete(route('dashboard.voucher.delete', voucher.id))}
                            title={'Potwierdź usunięcied vouchera'}
                            text={'Voucher zostatnie usunięty na stała bez możliwości przywrócenia!'}
                            confirmationAlert={'Voucher został usunięty'}
                        >
                            <Button variant="outline" className={'flex-1'}>
                                Usuń
                            </Button>
                        </DialogConfirmation>
                    )}
                    {generateVoucherPDFVisible && (
                        <Button variant="outline" asChild className={'flex-1'}>
                            <a href={route('dashboard.voucher.generate', voucher.id)} target={'_blank'}>
                                Generuj PDF
                            </a>
                        </Button>
                    )}
                </CardFooter>
            </Card>
        </div>
    );
};

const GetVouchers = ({ filters, vouchers }) => {
    const currentSort = filters?.sort || 'newest';
    const currentSearch = filters?.search || '';

    const [search, setSearch] = useState(currentSearch);

    const timeoutRef = useRef(null);

    const { checkUserHasPermission } = usePermissions();

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        if (key === 'sort' && value === 'newest') {
            delete newFilters.sort;
        }

        if (key === 'search' && value === '') {
            delete newFilters.search;
        }

        router.get(route('dashboard.voucher.get.all'), newFilters, {
            preserveScroll: true,
            preserveState: true,
            replace: true,
        });
    };

    useEffect(() => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            if (search !== currentSearch) {
                handleFilterChange('search', search);
            }
        }, 500);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [search, currentSearch]);

    const handleChangeSearch = (value) => {
        setSearch(value);
    };

    return (
        <DashboardLayout>
            <Heading title={'Wszystkie vouchery'} />
            <div className={'mb-4 flex items-center gap-4'}>
                <div className={'flex w-full flex-col gap-1.5'}>
                    <Label>Szukaj</Label>
                    <Input
                        type="text"
                        placeholder="Szukaj vouchera po imię nazwisko/nr"
                        value={search}
                        onChange={(e) => handleChangeSearch(e.target.value)}
                    />
                </div>
                <div className={'flex w-1/3 flex-col gap-1.5'}>
                    <Label>Sortowanie po dacie dodania</Label>
                    <Select defaultValue={currentSort} onValueChange={(value) => handleFilterChange('sort', value)}>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Wybierz sposób sortowania" /> {/* Poprawiono placeholder */}
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="newest">Najnowsze</SelectItem>
                                <SelectItem value="oldest">Najstarsze</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <div className={'mt-5'}>
                {vouchers && vouchers.data.length !== 0 ? (
                    <div className={'grid w-full grid-cols-4 gap-10'}>
                        {vouchers.data.map((voucher) => (
                            <VoucherItem
                                key={voucher.id}
                                voucher={voucher}
                                editVisible={checkUserHasPermission('edytowanie voucherów')}
                                updateStatusVisible={checkUserHasPermission('aktualizowanie statusu vouchera')}
                                generateVoucherPDFVisible={checkUserHasPermission('generowanie pdf vouchera')}
                                deleteVoucherVisible={checkUserHasPermission('usuwanie voucherów')}
                            />
                        ))}
                    </div>
                ) : (
                    <Alert>
                        <Ban />
                        <AlertTitle>Brak wyników!</AlertTitle>
                    </Alert>
                )}
            </div>
            <AppPagination
                currentPage={vouchers.current_page}
                lastPage={vouchers.last_page}
                url={'/dashboard/vouchers/get/all'}
                search={search}
                query={filters}
            />
        </DashboardLayout>
    );
};

export default GetVouchers;
