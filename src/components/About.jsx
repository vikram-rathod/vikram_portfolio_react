import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaUsers } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="gradient-text">About Me</h2>
                    <p>Merging complex business logic with exceptional user experience.</p>
                </div>

                <div className="bento-grid">
                    {/* Main Bio Card */}
                    <motion.div
                        className="bento-item col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h3>Strategic Vision</h3>
                        <p>
                            With over 2 years of professional mastery at Comzent Technologies, I engineer high-fidelity mobile ecosystems that define the gold standard for technical excellence. My philosophy is rooted in SOLID principles and Domain-Driven Design.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--primary)', fontSize: '2rem' }}>2+</h4>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Years Mastery</span>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--primary)', fontSize: '2rem' }}>25+</h4>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>APIs Launched</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Card */}
                    <motion.div
                        className="bento-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <FaGraduationCap style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1.5rem' }} />
                        <h3>Education</h3>
                        <p style={{ fontSize: '1.1rem', color: '#fff' }}>MCA</p>
                        <p>Sardar Patel Institute of Technology</p>
                        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>CGPA: 8.0/10</p>
                    </motion.div>

                    {/* Philosophy Cards */}
                    <motion.div
                        className="bento-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <FaCode style={{ marginBottom: '1rem', color: 'var(--primary)' }} />
                        <h3>Clean Code</h3>
                        <p>Adherence to MVVM and Clean Architecture patterns for maximum scalability.</p>
                    </motion.div>

                    <motion.div
                        className="bento-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <FaRocket style={{ marginBottom: '1rem', color: 'var(--primary)' }} />
                        <h3>Performance</h3>
                        <p>Optimizing for high-concurrency and offline-first synchronization.</p>
                    </motion.div>

                    <motion.div
                        className="bento-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <FaUsers style={{ marginBottom: '1rem', color: 'var(--primary)' }} />
                        <h3>Leadership</h3>
                        <p>Mentoring developers and pioneering strategic technology transitions.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
