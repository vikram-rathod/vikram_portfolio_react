import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';
import { TESTIMONIALS } from '../../../constants/data';
import { FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

/* ── Animation Variants ──────────────────────── */
const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
        opacity: 1, y: 0, scale: 1,
        transition: { type: 'spring', stiffness: 80, damping: 20 }
    },
};

export default function Testimonials() {
    return (
        <section id="testimonials" className="section container">
            <SectionHeader
                title="Colleague Recommendations"
                subtitle="What the people I work with have to say about my engineering and collaboration skills."
                align="center"
            />

            <motion.div
                className="testimonials-grid"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
            >
                {TESTIMONIALS.map((t) => (
                    <motion.div key={t.id} className="testimonial-card bento-card" variants={cardVariant}>
                        <FaQuoteLeft className="testimonial-quote-icon" />
                        <p className="testimonial-text">
                            "{t.text}"
                        </p>
                        <div className="testimonial-author">
                            <img src={t.avatar} alt={t.name} className="testimonial-avatar" loading="lazy" />
                            <div className="testimonial-author-info">
                                <h4 className="testimonial-name">{t.name}</h4>
                                <span className="testimonial-role">{t.role}</span>
                                <span className="testimonial-company">@ {t.company}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
