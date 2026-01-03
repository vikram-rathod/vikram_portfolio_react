import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-container">
                <div className="logo" style={{ fontWeight: '900', fontSize: '1.3rem', letterSpacing: '-0.05em' }}>
                    VIKRAM<span style={{ color: 'var(--primary)' }}>.</span>
                </div>
                <div className="nav-links">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Work</a>
                    <a href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view" target="_blank">CV</a>
                    <a href="#contact" className="btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
