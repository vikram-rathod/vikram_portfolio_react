import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100, x: '-50%' }}
            animate={{ y: 0, x: '-50%' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="logo" style={{ fontWeight: 800, fontSize: '1.25rem', fontFamily: 'var(--font-display)' }}>
                VIKRAM<span style={{ color: 'var(--accent)' }}>.</span>
            </div>

            <div className="nav-links">
                <a href="#about" className="nav-link">About</a>
                <a href="#skills" className="nav-link">Stack</a>
                <a href="#projects" className="nav-link">Works</a>
                <a href="#contact" className="nav-link">Contact</a>
            </div>

            <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                    padding: '0.6rem 1.25rem',
                    background: 'var(--accent)',
                    color: 'var(--canvas)',
                    borderRadius: '9999px',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textDecoration: 'none'
                }}
            >
                Hire Me
            </motion.a>
        </motion.nav>
    );
};

export default Navbar;
