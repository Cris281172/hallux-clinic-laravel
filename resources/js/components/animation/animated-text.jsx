import { motion } from 'framer-motion';

const AnimatedText = ({ text, as = 'h1', className = '', spanClassName = '', staggerChildren = 0.06 }) => {
    const MotionTag = motion[as];

    const words = text.split(' ');

    return (
        <MotionTag
            className={`text-center ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
                visible: { transition: { staggerChildren: staggerChildren } },
                hidden: {},
            }}
        >
            {words.map((word, wordIndex) => (
                <motion.span key={wordIndex} className={`inline-flex ${spanClassName}`}>
                    {word.split('').map((char, charIndex) => (
                        <motion.span
                            key={charIndex}
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 10 },
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.span>
            ))}
        </MotionTag>
    );
};

export default AnimatedText;
