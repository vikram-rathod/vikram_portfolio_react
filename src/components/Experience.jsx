import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';

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
                    <motion.span
                        style={{
                            position: 'absolute',
                            left: '-2.6rem',
                            top: '1.8rem',
                            width: 13,
                            height: 13,
                            borderRadius: '50%',
                            background: 'var(--accent)',
                            boxShadow: '0 0 10px rgba(56,189,248,.6)',
                            display: 'block',
                        }}
                    >
                        {/* Ping ring */}
                        <motion.span
                            animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                            style={{
                                position: 'absolute',
                                inset: -3,
                                borderRadius: '50%',
                                border: '1px solid rgba(56,189,248,.5)',
                                display: 'block',
                            }}
                        />
                    </motion.span>

                    <motion.div
                        className="bento-card"
                        whileHover={{ y: -4 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            flexWrap: 'wrap',
                            gap: '1rem',
                            marginBottom: '2rem',
                        }}>
                            <div>
                                <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-display)', marginBottom: '0.35rem' }}>
                                    Mobile Application Developer
                                </h3>
                                <p style={{ color: 'var(--accent)', fontWeight: 700 }}>
                                    Comzent Technologies Pvt. Ltd — Mumbai, India
                                </p>
                            </div>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                style={{
                                    padding: '0.4rem 1.1rem',
                                    background: 'rgba(56,189,248,.08)',
                                    border: '1px solid rgba(56,189,248,.2)',
                                    borderRadius: '9999px',
                                    color: 'var(--accent)',
                                    fontSize: '0.82rem',
                                    fontWeight: 700,
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                Jan 2024 – Present
                            </motion.span>
                        </div>

                        {/* Staggered bullet list */}
                        <motion.ul
                            variants={listContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}
                        >
                            {BULLETS.map((b, i) => (
                                <motion.li key={i} variants={listItem}
                                    style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: 1.7 }}
                                >
                                    <motion.span
                                        style={{
                                            width: 6, height: 6, borderRadius: '50%',
                                            background: 'var(--accent)',
                                            flexShrink: 0, marginTop: '0.55rem',
                                        }}
                                    />
                                    {b}
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Tech badges */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)' }}>
                            {['Kotlin', 'Jetpack Compose', 'Hilt', 'MVVM', 'Room', 'Retrofit', 'Firebase', 'Git'].map(tag => (
                                <span key={tag} style={{
                                    fontSize: '0.75rem',
                                    padding: '0.25rem 0.75rem',
                                    background: 'rgba(56,189,248,.07)',
                                    border: '1px solid rgba(56,189,248,.15)',
                                    borderRadius: '9999px',
                                    color: 'var(--accent)',
                                    fontWeight: 600,
                                }}>
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
                    <span style={{
                        position: 'absolute',
                        left: '-2.6rem',
                        top: '1.8rem',
                        width: 13, height: 13,
                        borderRadius: '50%',
                        background: 'var(--secondary)',
                        boxShadow: '0 0 10px rgba(192,132,252,.5)',
                        display: 'block',
                    }} />

                    <motion.div className="bento-card" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-display)', marginBottom: '0.35rem' }}>
                                    Master of Computer Applications (MCA)
                                </h3>
                                <p style={{ color: 'var(--secondary)', fontWeight: 600 }}>
                                    Sardar Patel Institute of Technology · Mumbai
                                </p>
                            </div>
                            <span style={{
                                padding: '0.4rem 1.1rem',
                                background: 'rgba(192,132,252,.08)',
                                border: '1px solid rgba(192,132,252,.2)',
                                borderRadius: '9999px',
                                color: 'var(--secondary)',
                                fontSize: '0.82rem',
                                fontWeight: 700,
                            }}>
                                2020 – 2024 · 8.0 CGPA
                            </span>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
