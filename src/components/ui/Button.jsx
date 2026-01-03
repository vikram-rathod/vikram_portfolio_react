import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', icon, ...props }) => {
    return (
        <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`btn btn-${variant}`}
            {...props}
        >
            {children}
            {icon && <span className="btn-icon">{icon}</span>}
        </motion.a>
    );
};

export default Button;
