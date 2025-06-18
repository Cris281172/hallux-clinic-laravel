import { Link } from '@inertiajs/react';
import DashboardLayout from '../../../layouts/dashboard-layout.jsx';

const GetAllImages = ({ gallery }) => {
    return (
        <DashboardLayout>
            {gallery.map((image, index) => (
                <div>
                    <img src={`${import.meta.env.VITE_APP_URL}/storage/${image}`} key={index} className={'w-120'} />
                    <Link href={route('dashboard.gallery.delete.image', { image: image.split('/')[1] })}>Usuń</Link>
                </div>
            ))}
        </DashboardLayout>
    );
};

export default GetAllImages;
