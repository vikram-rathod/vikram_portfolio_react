import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import './Experience.css';

const BULLETS = [
    'Worked on 2+ enterprise-grade Android applications for B2B clients.',
    'Integrated 20+ REST APIs with Retrofit, including pagination and offline-first caching using Room.',
    'Implemented MVVM + Clean Architecture across all modules, reducing bug reports significantly.',
    'Optimized app performance — cold start, list rendering, and memory management.',
    'Delivered projects ahead of deadlines while collaborating with cross-functional teams.',
    'Used Git workflows (branching, PRs, code reviews) for team-based development.',
];

/* ── Stagger variants ─────────────────────────── */
const listContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const listItem = {
    hidden: { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
    return (
        <section id="experience" className="section container">
            <SectionHeader
                title="Professional Path"
                subtitle="A chronological record of production work, architectural leadership, and shipping to real users."
            />

            <div className="timeline-track">

                {/* ── Role card ── */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative', marginBottom: '3.5rem' }}
                >
                    {/* Timeline dot with ping animation */}
                    <motion.span className="experience-timeline-dot-wrapper">
                        {/* Ping ring */}
                        <motion.span
                            className="experience-timeline-ping"
                            animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                        />
                    </motion.span>

                    <motion.div className="bento-card" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                        {/* Header */}
                        <div className="experience-card-header">
                            <div>
                                <h3 className="experience-role-title">
                                    Mobile Application Developer
                                </h3>
                                <p className="experience-company">
                                    Comzent Technologies Pvt. Ltd — Mumbai, India
                                </p>
                            </div>
                            <motion.span
                                className="experience-date-badge"
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                Jan 2024 – Present
                            </motion.span>
                        </div>

                        {/* Staggered bullet list */}
                        <motion.ul
                            className="experience-bullet-list"
                            variants={listContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {BULLETS.map((b, i) => (
                                <motion.li key={i} className="experience-bullet-item" variants={listItem}>
                                    <motion.span className="experience-bullet-dot" />
                                    {b}
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Tech badges */}
                        <div className="experience-tech-container">
                            {['Kotlin', 'Jetpack Compose', 'Hilt', 'MVVM', 'Room', 'Retrofit', 'Firebase', 'Git'].map(tag => (
                                <span key={tag} className="experience-tech-badge">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── Education timeline entry ── */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative' }}
                >
                    <span className="experience-timeline-dot-wrapper secondary" />

                    <motion.div className="bento-card" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 className="experience-role-title" style={{ fontSize: '1.4rem' }}>
                                    Master of Computer Applications (MCA)
                                </h3>
                                <p className="experience-company secondary" style={{ fontWeight: 600 }}>
                                    Sardar Patel Institute of Technology · Mumbai
                                </p>
                            </div>
                            <span className="experience-date-badge secondary">
                                2020 – 2024 · 8.0 CGPA
                            </span>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
