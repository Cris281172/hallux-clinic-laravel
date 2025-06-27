import { motion } from 'motion/react';
import { FaBuilding } from 'react-icons/fa';

const Timeline = () => {
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('pl-PL', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    };

    const timelineConfig = [
        {
            date: formatDate('2023-08-12'),
            icon: <FaBuilding className="text-white" />,
            title: 'Rozpoczęcia wykonywania działalności gospodarczej',
        },
        {
            date: formatDate('2024-06-15'),
            icon: <span className="text-xl text-white">🎉</span>,
            title: 'Rozpoczęcia współpracy z Salve',
        },
        {
            date: formatDate('2025-01-01'),
            icon: <span className="text-xl text-white">🏁</span>,
            title: 'Otwarcie gabinetu stacjonarnego',
        },
    ];

    return (
        <div className="flex justify-center py-10">
            <div className="relative w-full max-w-4xl">
                <div className="bg-dark-plum absolute top-0 left-1/2 h-full w-1 -translate-x-1/2"></div>

                {timelineConfig.map((item, index) => {
                    const isLeft = index % 2 === 0;
                    return (
                        <div key={index} className={`mt-20 mb-20 flex w-full items-center justify-between`}>
                            <motion.div
                                initial={{ opacity: 0, x: -25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true, amount: 0.5 }}
                                className={`w-5/12 ${isLeft ? 'text-right' : ''}`}
                            >
                                {isLeft && (
                                    <div>
                                        <p className="text-sm text-gray-500">{item.date}</p>
                                        <h5 className="text-dark-plum text-lg font-semibold">{item.title}</h5>
                                    </div>
                                )}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true, amount: 1 }}
                                className="bg-dark-plum relative z-10 flex h-10 w-10 items-center justify-center rounded-full shadow-md"
                            >
                                {item.icon}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 25 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                viewport={{ once: true, amount: 0.5 }}
                                className={`w-5/12 ${!isLeft ? 'text-left' : ''}`}
                            >
                                {!isLeft && (
                                    <div>
                                        <p className="text-sm text-gray-500">{item.date}</p>
                                        <h5 className="text-dark-plum text-lg font-semibold">{item.title}</h5>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
