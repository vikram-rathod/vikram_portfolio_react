import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <section id="experience" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="gradient-text">Professional Experience</h2>
                    <p>Driving mobile innovation at Comzent Technologies.</p>
                </div>

                <div className="bento-grid" style={{ gridTemplateColumns: '1fr' }}>
                    <motion.div
                        className="bento-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                            <div>
                                <h3 style={{ margin: 0, fontSize: '1.8rem' }}>Mobile Application Developer</h3>
                                <p style={{ color: 'var(--primary)', fontWeight: '600', marginTop: '0.4rem' }}>Comzent Technologies Pvt. Ltd</p>
                            </div>
                            <span style={{ background: 'rgba(255,255,255,0.05)', padding: '0.5rem 1rem', borderRadius: '2rem', fontSize: '0.85rem' }}>
                                Jan 2024 – Present
                            </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                                <p style={{ marginBottom: '1rem' }}>• Architected and led the development of 3+ enterprise-grade mobile applications using Kotlin Multiplatform and Jetpack Compose.</p>
                                <p style={{ marginBottom: '1rem' }}>• Engineered complex API integrations with advanced pagination and offline-first caching strategies using Room/Realm.</p>
                                <p>• Pioneered the transition from legacy architectures to MVVM/Clean Architecture, reducing bug reports by 40%.</p>
                            </div>
                            <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
                                <p style={{ marginBottom: '1rem' }}>• Collaborated with cross-functional teams to design UI/UX that increased user engagement across critical application modules.</p>
                                <p>• Mentor junior developers in best practices for Git workflow, CI/CD pipelines, and high-fidelity code reviews.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
