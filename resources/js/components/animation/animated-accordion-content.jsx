import { AnimatePresence, motion } from 'framer-motion';

const AnimatedAccordionContent = ({ isOpen, children }) => {
    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    key="animated-accordion"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AnimatedAccordionContent;
