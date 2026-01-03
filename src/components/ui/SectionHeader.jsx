import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, align = 'left' }) => {
    return (
        <motion.div
            className="section-header"
            style={{ textAlign: align }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="section-title gradient-text">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </motion.div>
    );
};

export default SectionHeader;
