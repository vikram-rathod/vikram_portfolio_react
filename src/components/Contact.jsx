import React from 'react';
import { FaEnvelope, FaWhatsapp, FaLinkedinIn, FaGithub, FaGlobe } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    className="contact-box glass-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Ready to <span className="gradient-text">Scale?</span></h2>
                    <p>I'm currently available for strategic partnerships, high-impact consulting, and leadership roles in mobile engineering.</p>
                    <div className="contact-actions">
                        <a href="mailto:rathodvikramk382@gmail.com" className="btn-primary"><FaEnvelope /> Send Email</a>
                        <a href="https://wa.me/919921120829" className="btn-secondary"><FaWhatsapp /> WhatsApp</a>
                    </div>
                    <div className="social-footer">
                        <a href="https://www.linkedin.com/in/vikram-rathod-438442289/" target="_blank">LinkedIn</a>
                        <a href="https://github.com/VikramRathodk" target="_blank">GitHub</a>
                        <a href="https://vikramrathod.dev" target="_blank">Portfolio</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
