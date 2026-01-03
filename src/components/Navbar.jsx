import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="logo">
                    VIKRAM<span style={{ color: 'var(--primary)' }}>.</span>
                </div>
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#skills">Tech Stack</a>
                    <a href="#projects">Missions</a>
                    <a href="#experience">Path</a>
                    <a href="#contact" className="btn btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem' }}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
