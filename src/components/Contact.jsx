import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <div style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    textAlign: 'center',
                    background: 'radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.08), transparent 70%)',
                    padding: '6rem 2rem',
                    borderRadius: '2rem',
                    border: '1px solid var(--border)'
                }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="section-title gradient-text" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Ready to Scale?</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '3.5rem', maxWidth: '500px', margin: '0 auto 3.5rem' }}>
                            I'm currently scouting for strategic partnerships and high-impact mobile leadership roles.
                        </p>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                            <a href="mailto:rathodvikramk382@gmail.com" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                                <FaEnvelope /> Send Mission Brief
                            </a>
                            <a href="https://wa.me/919921120829" className="btn btn-secondary" style={{ padding: '1rem 2.5rem' }}>
                                <FaWhatsapp /> Quick Sync
                            </a>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', borderTop: '1px solid var(--border)', paddingTop: '3rem' }}>
                            <a href="https://www.linkedin.com/in/vikram-rathod-438442289/" target="_blank" className="social-link" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.2s' }} aria-label="LinkedIn"><FaLinkedinIn /></a>
                            <a href="https://github.com/VikramRathodk" target="_blank" className="social-link" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.2s' }} aria-label="GitHub"><FaGithub /></a>
                            <a href="mailto:rathodvikramk382@gmail.com" className="social-link" style={{ color: 'var(--text-secondary)', fontSize: '1.5rem', transition: 'color 0.2s' }} aria-label="Email"><FaEnvelope /></a>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '2rem' }}>rathodvikramk382@gmail.com</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
