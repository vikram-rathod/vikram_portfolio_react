import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import { FaEnvelope, FaWhatsapp, FaLinkedinIn, FaGithub, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import { SOCIAL_LINKS } from '../../../constants/data';
import './Contact.css';

/* ── Floating orb ─────────────────────────────── */
function Orb({ size, color, x, y, duration, delay }) {
    return (
        <motion.div
            className="contact-orb"
            animate={{ y: [0, -18, 0], scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
                width: size, height: size,
                background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
                left: x, top: y,
            }}
        />
    );
}

/* ── Social icon link ────────────────────────── */
function SocialLink({ icon, href, label, delay = 0 }) {
    return (
        <motion.a
            className="contact-social-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, color: 'var(--accent)', scale: 1.15 }}
        >
            {icon}
        </motion.a>
    );
}

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

function ContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');
        const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`);
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        );
        window.open(`mailto:rathodvikramk382@gmail.com?subject=${subject}&body=${body}`);
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
    };

    if (status === 'success') {
        return (
            <motion.div
                className="contact-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
            >
                <FaCheckCircle className="contact-success-icon" />
                <p className="contact-success-title">Message sent!</p>
                <p className="contact-success-sub">I'll get back to you within 24 hours.</p>
                <button className="contact-success-reset" onClick={() => setStatus('idle')}>Send another</button>
            </motion.div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-row">
                <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="cf-name">Name</label>
                    <input
                        id="cf-name"
                        className="contact-form-input"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="contact-form-group">
                    <label className="contact-form-label" htmlFor="cf-email">Email</label>
                    <input
                        id="cf-email"
                        className="contact-form-input"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="contact-form-group">
                <label className="contact-form-label" htmlFor="cf-message">Message</label>
                <textarea
                    id="cf-message"
                    className="contact-form-input contact-form-textarea"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                />
            </div>
            {status === 'error' && (
                <p className="contact-form-error">Something went wrong. Please try again or email me directly.</p>
            )}
            <motion.button
                type="submit"
                className="contact-form-submit"
                disabled={status === 'sending'}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
            >
                <FaPaperPlane />
                {status === 'sending' ? 'Sending…' : 'Send Message'}
            </motion.button>
        </form>
    );
}

export default function Contact() {
    return (
        <section id="contact" className="section container">
            <div className="contact-wrapper">

                {/* Animated background orbs */}
                <Orb size="280px" color="rgba(56,189,248,.12)" x="50%" y="60%" duration={6} delay={0} />
                <Orb size="180px" color="rgba(192,132,252,.1)" x="10%" y="10%" duration={7} delay={1} />
                <Orb size="150px" color="rgba(129,140,248,.1)" x="80%" y="5%" duration={5.5} delay={0.5} />

                {/* Content */}
                <motion.div
                    className="contact-content"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    <motion.p className="contact-eyebrow" variants={fadeUp}>Get In Touch</motion.p>

                    <motion.h2 className="contact-title" variants={fadeUp}>
                        Ready to <span className="gradient-text">Collaborate?</span>
                    </motion.h2>

                    <motion.p className="contact-desc" variants={fadeUp}>
                        I'm open to full-time roles, freelance projects, and technical collaborations.
                        Let's build something great together.
                    </motion.p>

                    {/* Contact form */}
                    <motion.div variants={fadeUp}>
                        <ContactForm />
                    </motion.div>

                    {/* Quick-reach CTA buttons */}
                    <motion.div className="contact-cta-wrapper" variants={fadeUp} style={{ marginTop: '2rem' }}>
                        <Button href={SOCIAL_LINKS.email} variant="outline" icon={<FaEnvelope />}>Send Email</Button>
                        <Button href={SOCIAL_LINKS.whatsapp} variant="outline" icon={<FaWhatsapp />}>WhatsApp</Button>
                    </motion.div>

                    {/* Social links */}
                    <motion.div className="contact-divider-container" variants={fadeUp}>
                        <p className="contact-social-label">FIND ME ON</p>
                        <div className="contact-social-links">
                            <SocialLink icon={<FaLinkedinIn />} href={SOCIAL_LINKS.linkedin} label="LinkedIn" delay={0} />
                            <SocialLink icon={<FaGithub />} href={SOCIAL_LINKS.github} label="GitHub" delay={0.1} />
                            <SocialLink icon={<FaEnvelope />} href={SOCIAL_LINKS.email} label="Email" delay={0.2} />
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
