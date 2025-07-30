import { Link } from '@inertiajs/react';
import { Button } from '../../../components/ui/button.js';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../../components/ui/card.js';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const GetAllImages = ({ gallery }) => {
    console.log(gallery);
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
                            <Button variant="outline" asChild className={'flex-1'}>
                                <Link href={route('dashboard.gallery.delete.image', image.id)}>Usuń zdjęcie</Link>
                            </Button>
                        </CardFooter>
                        {/*<Link href={route('dashboard.gallery.delete.image', { image: image.split('/')[1] })}>Usuń</Link>*/}
                    </Card>
                ))}
            </div>
        </DashboardLayout>
    );
};

export default GetAllImages;
