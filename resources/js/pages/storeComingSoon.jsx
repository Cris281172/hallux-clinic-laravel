import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import underConstructionImage from '../assets/images/store/under-construction.png';
import SEO from '../components/page/SEO.jsx';
import { Button } from '../components/ui/button.tsx';
import AppLayout from '../layouts/app-layout.jsx';
const StoreComingSoon = () => {
    return (
        <AppLayout>
            <SEO title="Sklep w trakcie budowy" description="Nasz sklep jest obecnie w trakcie budowy. Wróć wkrótce, aby zobaczyć pełną ofertę!" />

            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6 text-center">
                <motion.img
                    src={underConstructionImage}
                    alt="Sklep w trakcie budowy"
                    className="mb-8 max-w-xs sm:max-w-sm md:max-w-sm"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                />

                <motion.h1
                    className="text-dark-plum mb-4 text-3xl font-bold sm:text-4xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    Sklep w trakcie budowy
                </motion.h1>

                <motion.p
                    className="mb-6 max-w-md text-gray-700 sm:text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Pracujemy nad naszym sklepem internetowym, aby wkrótce zaoferować Ci najlepsze produkty.
                </motion.p>

                <Button size="lg" variant="darkPlum" asChild>
                    <Link href="/">Powrót na stronę główną</Link>
                </Button>
            </div>
        </AppLayout>
    );
};

export default StoreComingSoon;
