import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero mesh-gradient">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span style={{
                        color: 'var(--text-dim)',
                        border: '1px solid var(--border)',
                        padding: '0.5rem 1.25rem',
                        borderRadius: '2rem',
                        fontSize: '0.85rem',
                        background: 'rgba(255,255,255,0.02)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: '500'
                    }}>
                        Mobile Solutions Architect • 2+ Years Exp
                    </span>
                    <h1 className="gradient-text" style={{ fontSize: '4.8rem', fontWeight: '800', lineHeight: '1', margin: '2rem 0', letterSpacing: '-0.04em' }}>
                        Architecting <br /> High-Performance <br /> Mobile Ecosystems.
                    </h1>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.25rem', maxWidth: '32rem', marginBottom: '3rem', lineHeight: '1.6' }}>
                        I build scalable, enterprise-grade Android & Flutter applications that bridge complex business logic with exceptional user experiences.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view" target="_blank" className="btn-secondary">Get Resume</a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual glass-morphism"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="architecture-stack">
                        <div className="layer-card">
                            <span style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em' }}>01. PRESENTATION</span>
                            <h3 style={{ marginTop: '0.5rem', fontSize: '1.4rem', fontWeight: '700' }}>Declarative UI</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', marginTop: '0.6rem', lineHeight: '1.5' }}>Next-gen interfaces built with Jetpack Compose & Flutter for fluid, native performance.</p>
                        </div>
                        <div className="layer-card">
                            <span style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em' }}>02. DOMAIN</span>
                            <h3 style={{ marginTop: '0.5rem', fontSize: '1.4rem', fontWeight: '700' }}>Clean Architecture</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', marginTop: '0.6rem', lineHeight: '1.5' }}>Strict adherence to SOLID principles and MVVM patterns for maintainable codebases.</p>
                        </div>
                        <div className="layer-card">
                            <span style={{ color: '#f59e0b', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em' }}>03. INFRASTRUCTURE</span>
                            <h3 style={{ marginTop: '0.5rem', fontSize: '1.4rem', fontWeight: '700' }}>Scalable Data</h3>
                            <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', marginTop: '0.6rem', lineHeight: '1.5' }}>Offline-first synchronization with Room, Realm, and complex API orchestration.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
