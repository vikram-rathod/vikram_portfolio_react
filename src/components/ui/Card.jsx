import React from 'react';
import { motion } from 'framer-motion';

/* Reusable Card — scroll-triggered fade-up, hover lift */
export default function Card({ children, className = '', delay = 0, style = {} }) {
    return (
        <motion.div
            className={`bento-card ${className}`}
            style={style}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
        >
            {children}
        </motion.div>
    );
}
