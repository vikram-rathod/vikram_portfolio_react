import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', icon, ...props }) {
    return (
        <motion.a
            className={`btn btn-${variant}`}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            {...props}
        >
            {children}
            {icon && <span style={{ display: 'inline-flex', alignItems: 'center' }}>{icon}</span>}
        </motion.a>
    );
}
