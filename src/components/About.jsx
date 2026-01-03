import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="about" className="section" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title gradient-text">About Me</h2>
                    <p className="section-subtitle">A Senior Solutions Architect dedicated to pushing the boundaries of mobile technology.</p>
                </motion.div>

                <motion.div
                    className="bento-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div className="bento-card" style={{ gridColumn: 'span 8', gridRow: 'span 2' }} variants={itemVariants}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Strategic Vision</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.7' }}>
                            Currently based in Mumbai and architecting at <strong>Comzent Technologies</strong>, I bridge the gap between complex engineering and human-centric design. With a focus on <strong>Kotlin, Jetpack Compose, and Flutter</strong>, I build ecosystems that are not just applications, but robust business assets.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem', fontSize: '1.125rem', lineHeight: '1.7' }}>
                            My engineering philosophy is simple: write code that is as maintainable as it is performant. I strictly adhere to <strong>Clean Architecture</strong> and <strong>SOLID principles</strong> to ensure every project clears the highest technical hurdles.
                        </p>
                    </motion.div>

                    <motion.div className="bento-card" style={{ gridColumn: 'span 4' }} variants={itemVariants}>
                        <h3 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '0.25rem' }}>2+</h3>
                        <p style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Years of Mastery</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Deep specialization in Android & Flutter architecture.</p>
                    </motion.div>

                    <motion.div className="bento-card" style={{ gridColumn: 'span 4' }} variants={itemVariants}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Core Strengths</h3>
                        <div className="tags">
                            {['System Architecture', 'Clean Code', 'MVVM', 'API Orchestration', 'Leadership', 'Unit Testing'].map((tag, i) => (
                                <span key={i} className="tag-chip">{tag}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="bento-card" style={{ gridColumn: 'span 12' }} variants={itemVariants}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Academic Foundation</h3>
                                <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Master of Computer Applications (MCA)</p>
                                <p style={{ color: 'var(--text-secondary)' }}>Sardar Patel Institute of Technology</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <p style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.5rem' }}>8.0 CGPA</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Class of 2024</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
