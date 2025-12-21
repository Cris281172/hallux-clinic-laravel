// components/form-error.jsx
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const FormError = ({ id, message }) => {
    if (!message) return null;

    return (
        <motion.div
            id={id}
            className="mt-1 flex items-center gap-2 text-sm text-red-600"
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <AlertCircle className="h-4 w-4 shrink-0" />
            <span>{message}</span>
        </motion.div>
    );
};

export default FormError;
