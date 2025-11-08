import { Ban, ShoppingCart, User } from 'lucide-react';
import ConfirmationDialog from '../../../../components/confirmation-dialog.jsx';
import Heading from '../../../../components/heading.tsx';
import { Alert, AlertTitle } from '../../../../components/ui/alert.tsx';
import { Button } from '../../../../components/ui/button.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '../../../../components/ui/card.tsx';
import DashboardLayout from '../../../../layouts/dashboard-layout.jsx';
import formatDatePolish from '../../../../utils/formatDatePolish.js';
import getR2Url from '../../../../utils/getR2Url.js';
import getMainProductImage from '../../../../utils/store/getMainProductImage.js';

const GetUserDetails = ({ user }) => {
    return (
        <DashboardLayout>
            <Heading title={`Użytkownik ${user.name}, ID: ${user.id}`} />
            <div className={'grid grid-cols-3 gap-5'}>
                <Card>
                    <CardHeader>
                        <CardTitle className={'flex items-center gap-2'}>
                            <User size={20} /> Użytkownik: {user.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Email: {user.email}</p>
                        <p>ID: {user.id}</p>
                        <p>Zweryfikowany: {user.email_verified_at ? formatDatePolish(user.email_verified_at) : 'Nie zwerfyikowany'}</p>
                        <p>Utwórzony: {formatDatePolish(user.created_at)}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle className={'flex items-center gap-2'}>
                            <ShoppingCart size={20} /> Aktualny koszyk ID: {user.cart.id}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className={'flex flex-col gap-10'}>
                            {user.cart.cart_items && user.cart.cart_items.length !== 0 ? (
                                <>
                                    {user.cart.cart_items
                                        .filter((el) => el.product)
                                        .map((item, index) => (
                                            <>
                                                <div key={index} className={'flex gap-5'}>
                                                    <img className={'w-30 object-fill'} src={getR2Url(getMainProductImage(item.product.images))} />
                                                    <div>
                                                        <h3>{item.product.name}</h3>
                                                        <p>Ilość: {item.quantity}</p>
                                                        <p className={'text-md'}>{item.product.price * item.quantity} zł</p>
                                                        {item.quantity > 1 && <p className={'text-sm'}>za sztukę {item.product.price} zł</p>}

                                                        {item.variant && <p className={'text-sm'}>Rozmiar: {item.variant.value}</p>}
                                                    </div>
                                                </div>
                                                <div className={'flex gap-5'}>
                                                    <Button asChild className={'flex-1'}>
                                                        <a href={`/sklep/produkty/${item.product.slug}`} target={'_blank'}>
                                                            Podgląd produktu
                                                        </a>
                                                    </Button>
                                                    <ConfirmationDialog
                                                        routeName="dashboard.cart-item.delete"
                                                        params={item.id}
                                                        title="Usuń użytkownika?"
                                                        desc={`Czy na pewno chcesz trwale usunąć produkt "${item.product.name}"?`}
                                                    >
                                                        <Button variant={'secondary'} className={'flex-1'}>
                                                            Usuń produkt z koszyka
                                                        </Button>
                                                    </ConfirmationDialog>
                                                </div>
                                            </>
                                        ))}
                                </>
                            ) : (
                                <Alert>
                                    <Ban />
                                    <AlertTitle>Koszyk jest pusty!</AlertTitle>
                                </Alert>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </DashboardLayout>
    );
};

export default GetUserDetails;
