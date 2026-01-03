import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { FaEnvelope, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SocialLink = ({ icon, href, label }) => (
    <motion.a
        href={href}
        target="_blank"
        whileHover={{ y: -5, color: 'var(--accent)' }}
        style={{ fontSize: '1.75rem', color: 'var(--text-dim)', transition: 'color 0.2s' }}
        aria-label={label}
    >
        {icon}
    </motion.a>
);

const Contact = () => {
    return (
        <section id="contact" className="section container">
            <div style={{
                background: 'linear-gradient(180deg, var(--surface) 0%, transparent 100%)',
                padding: '6rem 2rem',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontFamily: 'var(--font-display)', marginBottom: '1.5rem', lineHeight: 1 }}>
                        Ready to <span className="gradient-text">Scale?</span>
                    </h2>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.25rem', marginBottom: '3.5rem', maxWidth: '600px', margin: '0 auto 3.5rem' }}>
                        I'm currently scouting for high-impact mobile leadership roles and strategic engineering partnerships.
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                        <Button href="mailto:rathodvikramk382@gmail.com" variant="primary" icon={<FaEnvelope />}>
                            Draft Mission Brief
                        </Button>
                        <Button href="https://wa.me/919921120829" variant="outline" icon={<FaWhatsapp />}>
                            Secure WhatsApp
                        </Button>
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '3rem',
                        paddingTop: '3rem',
                        borderTop: '1px solid var(--border)'
                    }}>
                        <SocialLink icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/vikram-rathod-438442289/" label="LinkedIn" />
                        <SocialLink icon={<FaGithub />} href="https://github.com/VikramRathodk" label="GitHub" />
                        <SocialLink icon={<FaEnvelope />} href="mailto:rathodvikramk382@gmail.com" label="Email" />
                    </div>
                </motion.div>

                {/* Decorative Element */}
                <div style={{
                    position: 'absolute',
                    bottom: '-10rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '30rem',
                    height: '20rem',
                    background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                    zIndex: -1
                }} />
            </div>
        </section>
    );
};

export default Contact;
