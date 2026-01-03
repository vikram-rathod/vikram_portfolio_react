import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar" style={{ borderBottom: '1px solid var(--hud-border)', background: 'rgba(3,3,11,0.8)' }}>
            <div className="container nav-container">
                <div className="logo" style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: '900',
                    fontSize: '1.4rem',
                    letterSpacing: '2px',
                    color: '#fff',
                    textShadow: '0 0 10px var(--hud-cyan)'
                }}>
                    [ VIKRAM<span style={{ color: 'var(--hud-cyan)' }}>.OS</span> ]
                </div>
                <div className="nav-links">
                    <a href="#about" style={{ fontSize: '0.8rem' }}>PROFILE</a>
                    <a href="#skills" style={{ fontSize: '0.8rem' }}>ABILITIES</a>
                    <a href="#projects" style={{ fontSize: '0.8rem' }}>MISSIONS</a>
                    <a href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view" target="_blank" style={{ fontSize: '0.8rem' }}>INTEL</a>
                    <a href="#contact" className="btn-primary" style={{ padding: '0.5rem 1.5rem', marginLeft: '1.5rem', fontSize: '0.8rem' }}>COMM LINK</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
