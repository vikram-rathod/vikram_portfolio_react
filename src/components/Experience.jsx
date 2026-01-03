import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="section" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-header" style={{ marginBottom: '6rem' }}>
                    <h2 className="section-title gradient-text">Professional Path</h2>
                    <p className="section-subtitle">A track record of driving technical excellence and high-impact deployments.</p>
                </div>

                <div className="timeline-container">
                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Mobile Application Developer</h3>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                                <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.1rem' }}>Comzent Technologies Pvt. Ltd</span>
                                <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: '500' }}>Jan 2024 – Present</span>
                            </div>
                        </div>
                        <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.8' }}>
                            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>•</span>
                                Architecting and leading the development of enterprise-grade mobile applications using <strong>Kotlin Multiplatform</strong> and <strong>Jetpack Compose</strong>.
                            </li>
                            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>•</span>
                                Engineered complex API integrations with advanced pagination and <strong>offline-first</strong> sync strategies.
                            </li>
                            <li style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>•</span>
                                Pioneered technical transitions to <strong>Clean Architecture</strong>, resulting in a 40% reduction in bug reports.
                            </li>
                            <li style={{ paddingLeft: '1.5rem', position: 'relative' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>•</span>
                                Mentoring junior developers in high-fidelity code reviews and strategic Git workflows.
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
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
