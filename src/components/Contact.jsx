import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    className="contact-box"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Let's Build the Future.</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>
                        I'm currently available for strategic partnerships, leadership roles, and high-impact mobile consulting.
                    </p>

                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="mailto:rathodvikramk382@gmail.com" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaEnvelope /> Email Me
                        </a>
                        <a href="https://wa.me/919921120829" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaWhatsapp /> WhatsApp
                        </a>
                        <a href="https://www.linkedin.com/in/vikram-rathod-438442289/" target="_blank" className="btn btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                            <FaLinkedinIn /> LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
