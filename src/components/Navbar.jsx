import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="logo" style={{ fontWeight: '800', fontSize: '1.2rem', letterSpacing: '-0.05em' }}>
                    VIKRAM<span style={{ color: 'var(--primary)' }}>.</span>
                </div>
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Work</a>
                    <a href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view" target="_blank">CV</a>
                    <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.2rem', marginLeft: '1rem' }}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
