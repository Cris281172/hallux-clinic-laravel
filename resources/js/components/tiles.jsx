import { Link } from '@inertiajs/react';
import { motion } from 'motion/react';

const Tiles = ({ config }) => {
    return (
        <div className={'relative mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-10'}>
            {config.map((treatment, index) => (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <Link
                        href={treatment.url}
                        className="group relative flex aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-lg"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-300 ease-in-out group-hover:scale-110"
                            style={{ backgroundImage: `url("${treatment.image}")` }}
                        ></div>

                        <div className="absolute top-0 left-0 h-full w-full rounded-lg bg-black opacity-45 transition group-hover:opacity-25"></div>

                        <div key={index} className="absolute max-w-10/12">
                            <h3 className="text-center text-2xl font-bold uppercase">{treatment.text}</h3>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default Tiles;
