import { router } from '@inertiajs/react';
import DialogConfirmation from '../../../components/dashboard/dialog-confirmation.jsx';
import { Button } from '../../../components/ui/button.js';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const GetAllImages = ({ gallery }) => {
    return (
        <DashboardLayout>
            <div className={'grid grid-cols-4 gap-5'}>
                {gallery.map((image, index) => (
                    <Card>
                        <CardHeader>
                            <CardTitle className={'flex flex-col gap-2'}>
                                <p>Zdjęcie: {image.filename}</p>
                                <p>Typ: {image.type}</p>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img
                                src={`${import.meta.env.VITE_R2_PUBLIC_URL}/${image.filename}`}
                                key={index}
                                className={'aspect-square w-full object-cover'}
                            />
                        </CardContent>
                        <CardFooter>
                            <DialogConfirmation
                                title={'Potwierdź usunięcie zdjęcia'}
                                text={'Po usunięciu zdjęcia nie będzie możliwości przywrócenia go!'}
                                confirmationAlert={'Zdjęcie zostało usunięte'}
                                handleConfirmation={() => router.delete(route('dashboard.gallery.delete.image', image.id))}
                            >
                                <Button variant="outline" className={'flex-1'}>
                                    Usuń zdjęcie
                                </Button>
                            </DialogConfirmation>
                        </CardFooter>
                        {/*<Link href={route('dashboard.gallery.delete.image', { image: image.split('/')[1] })}>Usuń</Link>*/}
                    </Card>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default GetAllImages;
