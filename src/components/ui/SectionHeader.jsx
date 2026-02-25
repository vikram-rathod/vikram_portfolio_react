import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ title, subtitle, align = 'left' }) {
    return (
        <div className="section-header" style={{ textAlign: align }}>
            <motion.h2
                className="section-title gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    className="section-subtitle"
                    style={{ margin: align === 'center' ? '0 auto' : undefined }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
