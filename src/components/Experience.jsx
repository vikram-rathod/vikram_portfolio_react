import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="section" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    className="section-header"
                    style={{ marginBottom: '6rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title gradient-text">Professional Path</h2>
                    <p className="section-subtitle">A track record of driving technical excellence and high-impact deployments.</p>
                </motion.div>

                <div className="timeline-container">
                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div style={{ marginBottom: '1.5rem' }}>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Mobile Application Developer</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                                <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.1rem' }}>Comzent Technologies Pvt. Ltd</span>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Jan 2024 – Present</span>
                            </div>
                        </div>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8' }}>
                            {[
                                "Architecting and leading the development of enterprise-grade mobile applications using Kotlin Multiplatform and Jetpack Compose.",
                                "Engineered complex API integrations with advanced pagination and offline-first sync strategies.",
                                "Pioneered technical transitions to Clean Architecture, resulting in a 40% reduction in bug reports.",
                                "Mentoring junior developers in high-fidelity code reviews and strategic Git workflows."
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}
                                >
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>•</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    >
                        <div style={{ marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>Previous Career Highlight</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                                <span style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Strategic Deployments</span>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>2020 – 2024</span>
                            </div>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                            Successfully deployed 5+ strategic mobile applications to market, handling everything from architectural design to final App Store / Play Store orchestration.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
