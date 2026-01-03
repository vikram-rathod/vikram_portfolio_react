import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', delay = 0, style = {} }) => {
    return (
        <motion.div
            className={`bento-card ${className}`}
            style={style}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
        >
            {children}
        </motion.div>
    );
};

export default Card;
