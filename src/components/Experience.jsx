import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';

const Experience = () => {
    return (
        <section id="experience" className="section container">
            <SectionHeader
                title="Professional Path"
                subtitle="A chronological record of technical leadership and architectural innovation."
            />

            <div className="timeline-container">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <Card style={{ marginBottom: '4rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.75rem', fontFamily: 'var(--font-display)' }}>Mobile Application Developer</h3>
                                <p style={{ color: 'var(--accent)', fontWeight: '700', marginTop: '0.25rem' }}>Comzent Technologies Pvt. Ltd</p>
                            </div>
                            <span style={{
                                color: 'var(--text-dim)',
                                fontSize: '0.9rem',
                                fontWeight: 700,
                                background: 'rgba(255,255,255,0.05)',
                                padding: '0.4rem 1rem',
                                borderRadius: '9999px'
                            }}>
                                Jan 2024 – Present
                            </span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: 1.8 }}>
                                <p style={{ marginBottom: '1rem' }}>• Architected and led the development of 3+ enterprise-grade mobile applications using Kotlin Multiplatform and Jetpack Compose.</p>
                                <p>• Engineered complex API integrations with advanced pagination and offline-first caching strategies using Room/Realm.</p>
                            </div>
                            <div style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: 1.8 }}>
                                <p style={{ marginBottom: '1rem' }}>• Pioneered the transition to MVVM/Clean Architecture, resulting in a 40% reduction in production bug reports.</p>
                                <p>• Mentoring junior developers in best practices for Git workflow and high-fidelity code reviews.</p>
                            </div>
                        </div>
                    </Card>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Card>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>Strategic Deployments</h3>
                            <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>2020 – 2024</span>
                        </div>
                        <p style={{ color: 'var(--text-dim)' }}>Successfully deployed 5+ strategic mobile applications to market, bridging the gap between MVP and scaled production.</p>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
