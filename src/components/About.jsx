import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';

/* ── Animated counter ─────────────────────────── */
function Counter({ target, suffix = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });
    const raw = useMotionValue(0);
    const smooth = useSpring(raw, { stiffness: 60, damping: 18 });
    const [display, setDisplay] = React.useState(0);

    useEffect(() => {
        const unsub = smooth.on('change', v => setDisplay(Math.round(v)));
        return unsub;
    }, [smooth]);

    useEffect(() => {
        if (inView) raw.set(target);
    }, [inView, target, raw]);

    return (
        <span ref={ref} style={{ fontFamily: 'var(--font-display)' }}>
            {display}{suffix}
        </span>
    );
}

/* ── Shared variant for scroll-triggered cards ── */
const cardVariant = (delay = 0) => ({
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] } },
});

export default function About() {
    return (
        <section id="about" className="section container">
            <SectionHeader
                title="Strategy &amp; Vision"
                subtitle="Engineering the future of mobile through disciplined architecture and user-obsessed design."
            />

            <div className="bento-grid">

                {/* ── Main bio card ── */}
                <motion.div
                    className="bento-card"
                    style={{ gridColumn: 'span 8', gridRow: 'span 2' }}
                    variants={cardVariant(0)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    whileHover={{ y: -4 }}
                >
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>
                        The Technical Core
                    </h3>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                        Based in Mumbai and architecting at <strong style={{ color: 'var(--text-strong)' }}>Comzent Technologies</strong>,
                        I bridge the gap between complex enterprise requirements and fluid human interaction.
                    </p>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem', lineHeight: 1.8 }}>
                        My focus lies in building highly resilient, modular applications using{' '}
                        <strong style={{ color: 'var(--accent)' }}>Jetpack Compose</strong> and{' '}
                        <strong style={{ color: 'var(--accent)' }}>Flutter</strong>. I advocate for SOLID principles,
                        Clean Architecture, and performance-first design.
                    </p>
                </motion.div>

                {/* ── Stat: Experience ── */}
                <motion.div
                    className="bento-card"
                    style={{ gridColumn: 'span 4' }}
                    variants={cardVariant(0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    whileHover={{ y: -4 }}
                >
                    <h4 style={{ color: 'var(--accent)', fontSize: '3.75rem', fontWeight: 800, lineHeight: 1 }}>
                        <Counter target={2} suffix="+" />
                    </h4>
                    <span style={{ fontWeight: 600, display: 'block', marginTop: '0.6rem', fontSize: '1rem' }}>
                        Years Experience
                    </span>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
                        Building high-impact mobile solutions in production.
                    </p>
                </motion.div>

                {/* ── Stat: APIs ── */}
                <motion.div
                    className="bento-card"
                    style={{ gridColumn: 'span 4' }}
                    variants={cardVariant(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    whileHover={{ y: -4 }}
                >
                    <h4 style={{ color: 'var(--secondary)', fontSize: '3.75rem', fontWeight: 800, lineHeight: 1 }}>
                        <Counter target={20} suffix="+" />
                    </h4>
                    <span style={{ fontWeight: 600, display: 'block', marginTop: '0.6rem', fontSize: '1rem' }}>
                        REST APIs Integrated
                    </span>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '0.75rem' }}>
                        Seamlessly wired across 2+ enterprise apps.
                    </p>
                </motion.div>

                {/* ── Education card ── */}
                <motion.div
                    className="bento-card"
                    style={{ gridColumn: 'span 12' }}
                    variants={cardVariant(0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-60px' }}
                    whileHover={{ y: -4 }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>
                                Education
                            </h3>
                            <p style={{ color: 'var(--text-strong)', fontWeight: 600, marginBottom: '0.25rem' }}>
                                Master of Computer Applications (MCA)
                            </p>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                                Sardar Patel Institute of Technology · Andheri, Mumbai · 2020 – 2024
                            </p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <motion.p
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{ color: 'var(--accent)', fontSize: '2.25rem', fontWeight: 800, lineHeight: 1 }}
                            >
                                8.0 CGPA
                            </motion.p>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.88rem', marginTop: '0.35rem' }}>
                                Class of 2024
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
