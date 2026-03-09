import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS } from '../../../constants/data';
import { useScrollspy } from '../../../hooks/useScrollspy';
import { CodeView } from '../../ui';
import { FaCode } from 'react-icons/fa';

/* ── Theme toggle icon ──────────────────────────────────── */
function ThemeIcon({ theme }) {
    return theme === 'dark' ? (
        /* Sun */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
    ) : (
        /* Moon */
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    );
}

/* ── Animation variants ─────────────────────────────────── */
const navContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
};
const navItem = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1], duration: 0.5 } },
};

const SECTION_IDS = NAV_LINKS.map(l => l.id);

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [codeViewOpen, setCodeViewOpen] = useState(false);
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
    const activeId = useScrollspy(SECTION_IDS, 30);

    /* Scroll detection */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* Apply theme to document */
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -90, opacity: 0, x: '-50%' }}
            animate={{ y: 0, opacity: 1, x: '-50%' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
            {/* Logo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{ fontWeight: 800, fontSize: '1.25rem', fontFamily: 'var(--font-display)', flexShrink: 0 }}
            >
                VIKRAM<span style={{ color: 'var(--accent)' }}>.</span>
            </motion.div>

            {/* Desktop nav links — staggered */}
            <motion.div className="nav-links" variants={navContainer} initial="hidden" animate="show">
                {NAV_LINKS.map(({ label, href, id }) => (
                    <motion.a
                        key={label}
                        href={href}
                        className={`nav-link ${activeId === id ? 'nav-link--active' : ''}`}
                        variants={navItem}
                    >
                        {label}
                    </motion.a>
                ))}
            </motion.div>

            {/* Right side: theme toggle + hire-me CTA */}
            <motion.div
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* Theme toggle button */}
                <motion.button
                    id="theme-toggle"
                    onClick={toggleTheme}
                    className="theme-toggle-btn"
                    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={theme}
                            initial={{ rotate: -45, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 45, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            style={{ display: 'flex', alignItems: 'center' }}
                        >
                            <ThemeIcon theme={theme} />
                        </motion.span>
                    </AnimatePresence>
                </motion.button>

                {/* View as Code toggle */}
                <motion.button
                    onClick={() => setCodeViewOpen(true)}
                    className="theme-toggle-btn"
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                    title="View as Code"
                    style={{ background: 'transparent', borderColor: 'transparent' }}
                >
                    <FaCode size={18} />
                </motion.button>

                {/* Hire Me CTA */}
                <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.07, boxShadow: '0 0 20px rgba(56,189,248,.35)' }}
                    whileTap={{ scale: 0.95 }}
                    className="navbar-cta"
                >
                    Hire Me
                </motion.a>

                {/* Mobile hamburger */}
                <motion.button
                    className="navbar-hamburger"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                    whileTap={{ scale: 0.9 }}
                >
                    <span className={`hamburger-bar ${menuOpen ? 'open-1' : ''}`} />
                    <span className={`hamburger-bar ${menuOpen ? 'open-2' : ''}`} />
                    <span className={`hamburger-bar ${menuOpen ? 'open-3' : ''}`} />
                </motion.button>
            </motion.div>

            {/* Mobile dropdown menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -12, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -12, scale: 0.97 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {NAV_LINKS.map(({ label, href, id }) => (
                            <a
                                key={label}
                                href={href}
                                className={`mobile-menu-link ${activeId === id ? 'nav-link--active' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Code View Modal */}
            <CodeView isOpen={codeViewOpen} onClose={() => setCodeViewOpen(false)} />
        </motion.nav>
    );
}
