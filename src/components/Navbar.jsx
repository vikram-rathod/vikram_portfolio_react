import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            className="navbar"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div className="container nav-container">
                <div className="logo">
                    VIKRAM<span style={{ color: 'var(--primary)' }}>.</span>
                </div>
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#skills">Tech Stack</a>
                    <a href="#projects">Missions</a>
                    <a href="#experience">Path</a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="#contact"
                        className="btn btn-primary"
                        style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem' }}
                    >
                        Contact
                    </motion.a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
