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
                    <a href="#skills">Stack</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
