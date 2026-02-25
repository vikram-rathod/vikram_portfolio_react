import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Stack', href: '#skills' },
    { label: 'Works', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

/* Stagger container for nav items */
const navContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
};
const navItem = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 } },
};

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            /* Slide-down entrance */
            initial={{ y: -90, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{ fontWeight: 800, fontSize: '1.25rem', fontFamily: 'var(--font-display)' }}
            >
                VIKRAM<span style={{ color: 'var(--accent)' }}>.</span>
            </motion.div>

            {/* Nav links — staggered */}
            <motion.div className="nav-links" variants={navContainer} initial="hidden" animate="show">
                {NAV_LINKS.map(({ label, href }) => (
                    <motion.a key={label} href={href} className="nav-link" variants={navItem}>
                        {label}
                    </motion.a>
                ))}
            </motion.div>

            {/* CTA button */}
            <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.07, boxShadow: '0 0 20px rgba(56,189,248,.35)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                    padding: '0.6rem 1.4rem',
                    background: 'var(--accent)',
                    color: 'var(--canvas)',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-block',
                }}
            >
                Hire Me
            </motion.a>
        </motion.nav>
    );
}
