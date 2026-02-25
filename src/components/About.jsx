import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import './About.css';

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
                    <h3 className="about-card-title">
                        The Technical Core
                    </h3>
                    <p className="about-card-text">
                        Based in Mumbai and architecting at <strong className="about-card-text-strong">Comzent Technologies</strong>,
                        I bridge the gap between complex enterprise requirements and fluid human interaction.
                    </p>
                    <p className="about-card-text" style={{ marginBottom: 0 }}>
                        My focus lies in building highly resilient, modular applications using{' '}
                        <strong className="about-card-text-accent">Jetpack Compose</strong> and{' '}
                        <strong className="about-card-text-accent">Flutter</strong>. I advocate for SOLID principles,
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
                    <h4 className="about-stat-title accent">
                        <Counter target={2} suffix="+" />
                    </h4>
                    <span className="about-stat-label">
                        Years Experience
                    </span>
                    <p className="about-stat-desc">
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
                    <h4 className="about-stat-title secondary">
                        <Counter target={20} suffix="+" />
                    </h4>
                    <span className="about-stat-label">
                        REST APIs Integrated
                    </span>
                    <p className="about-stat-desc">
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
                    <div className="about-edu-container">
                        <div>
                            <h3 className="about-edu-title">
                                Education
                            </h3>
                            <p className="about-edu-degree">
                                Master of Computer Applications (MCA)
                            </p>
                            <p className="about-edu-school">
                                Sardar Patel Institute of Technology · Andheri, Mumbai · 2020 – 2024
                            </p>
                        </div>
                        <div className="about-edu-cgpa-container">
                            <motion.p
                                className="about-edu-cgpa"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                8.0 CGPA
                            </motion.p>
                            <p className="about-edu-year">
                                Class of 2024
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
