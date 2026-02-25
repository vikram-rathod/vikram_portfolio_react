import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { FaEnvelope, FaWhatsapp, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Contact.css';

/* ── Floating orb ─────────────────────────────── */
function Orb({ size, color, x, y, duration, delay }) {
    return (
        <motion.div
            className="contact-orb"
            animate={{ y: [0, -18, 0], scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
            style={{
                width: size,
                height: size,
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
                    <motion.p className="contact-eyebrow" variants={fadeUp}>
                        Get In Touch
                    </motion.p>

                    <motion.h2 className="contact-title" variants={fadeUp}>
                        Ready to <span className="gradient-text">Collaborate?</span>
                    </motion.h2>

                    <motion.p className="contact-desc" variants={fadeUp}>
                        I'm open to full-time roles, freelance projects, and technical collaborations.
                        Let's build something great together.
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div className="contact-cta-wrapper" variants={fadeUp}>
                        <Button href="mailto:rathodvikramk382@gmail.com" variant="primary" icon={<FaEnvelope />}>
                            Send Email
                        </Button>
                        <Button href="https://wa.me/919921120829" variant="outline" icon={<FaWhatsapp />}>
                            WhatsApp
                        </Button>
                    </motion.div>

                    {/* Divider */}
                    <motion.div className="contact-divider-container" variants={fadeUp}>
                        <p className="contact-social-label">
                            FIND ME ON
                        </p>
                        <div className="contact-social-links">
                            <SocialLink icon={<FaLinkedinIn />} href="https://www.linkedin.com/in/vikram-rathod-438442289/" label="LinkedIn" delay={0} />
                            <SocialLink icon={<FaGithub />} href="https://github.com/VikramRathodk" label="GitHub" delay={0.1} />
                            <SocialLink icon={<FaEnvelope />} href="mailto:rathodvikramk382@gmail.com" label="Email" delay={0.2} />
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
