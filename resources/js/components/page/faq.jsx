import { Accordion, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { motion } from 'motion/react';
import { useState } from 'react';
import AnimatedAccordionContent from '../animation/animated-accordion-content.jsx';

export const FAQ = ({ data, variant = 'default' }) => {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleIndex = (index) => {
        setOpenIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
    };

    return (
        <div className="relative flex flex-col gap-2 overflow-hidden">
            {data.map((item, index) => {
                const isOpen = openIndexes.includes(index);

                return (
                    <div
                        key={index}
                        className={`${
                            variant === 'default' ? 'text-dark-plum bg-gray-200' : 'bg-dark-plum'
                        } flex flex-col items-center overflow-hidden rounded-md pt-3 pb-3 sm:flex-row`}
                    >
                        <motion.div
                            className={`${variant === 'default' ? 'bg-dark-plum' : 'bg-gray-200'} absolute top-0 left-full z-10 h-full w-full`}
                            initial={{ left: '0' }}
                            whileInView={{ left: '100%' }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true, amount: 0.1 }}
                        />
                        <Accordion
                            type="multiple"
                            className={`w-full p-0 pt-1 pr-3 pb-1 pl-3 sm:border-r-2`}
                            value={isOpen ? [`item-${index}`] : []}
                            onValueChange={() => toggleIndex(index)}
                        >
                            <AccordionItem value={`item-${index}`} className={'relative'}>
                                <AccordionTrigger className={'cursor-pointer'}>{item.value}</AccordionTrigger>
                                <AnimatedAccordionContent isOpen={isOpen}>
                                    <div className="relative px-4 py-2">
                                        <p className="mb-1">{item.desc}</p>
                                    </div>
                                </AnimatedAccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                );
            })}
        </div>
    );
};
