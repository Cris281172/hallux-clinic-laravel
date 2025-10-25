import { Link } from '@inertiajs/react';
import { Settings, Trash } from 'lucide-react';
import ConfirmationDialog from '../../../../components/confirmation-dialog.jsx';
import Heading from '../../../../components/heading.js';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../../../components/ui/card.js';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../../../../components/ui/dropdown-menu.js';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';
import getR2Url from '../../../../utils/getR2Url.js';

const GetAllProducts = ({ products }) => {
    console.log(products);
    return (
        <DashboardLayout>
            <Heading title={'Wszystkie produkty'} />
            <div className={'grid grid-cols-3 gap-15'}>
                {products.map((product, index) => (
                    <Card className="@container/card relative gap-2" key={index}>
                        <div className={'absolute top-0 right-0 m-2 flex gap-2'}>
                            <DropdownMenu>
                                <DropdownMenuTrigger className={'cursor-pointer'}>
                                    <Settings />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href={route('dashboard.product.active.toggle', {
                                                id: product.id,
                                                status: product.is_active ? 'unActive' : 'active',
                                            })}
                                        >
                                            {product.is_active ? 'Ukryj' : 'Pokaż'}
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link href={route('dashboard.product.edit.view', { id: product.id })}>Edytuj produkt</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <a target={'_blank'} href={`/sklep/produkty/${product.slug}`}>
                                            Podgląd
                                        </a>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <ConfirmationDialog
                                routeName="dashboard.product.delete"
                                params={product.id}
                                title="Usuń produkt?"
                                desc={`Czy na pewno chcesz trwale usunąć produkt "${product.name}"?`}
                            >
                                <Trash className="cursor-pointer text-red-600" />
                            </ConfirmationDialog>
                        </div>
                        <CardHeader>
                            <CardDescription className={product.is_active ? 'text-green-600' : 'text-red-600'}>
                                {product.is_active ? 'Aktywny' : 'Nieaktywny'}
                            </CardDescription>
                            <CardTitle>{product.name}</CardTitle>
                            <CardDescription>Cena: {product.price} zł</CardDescription>
                            <CardDescription>Slug: {product.slug}</CardDescription>
                            <CardDescription>Kategoria: {product.categories[0].name}</CardDescription>
                            {/*<img src={getR2Url(post.image)} className={'mt-2 object-cover'} style={{ aspectRatio: '1 / 1', maxWidth: '250px' }} />*/}
                        </CardHeader>
                        <CardContent>
                            <img
                                className={'aspect-square object-cover'}
                                src={getR2Url(product.images.filter((el) => +el.order === 0)[0].filename)}
                            />
                        </CardContent>
                        <CardFooter className="mt-5 flex items-start gap-1.5 text-sm"></CardFooter>
                    </Card>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default GetAllProducts;
