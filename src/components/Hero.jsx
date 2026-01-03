import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiAndroid } from 'react-icons/si';
import { motion } from 'framer-motion';

const Hero = () => {
    const handleMouseMove = (e) => {
        const { currentTarget: target, clientX: x, clientY: y } = e;
        const { left, top } = target.getBoundingClientRect();
        target.style.setProperty("--mouse-x", `${x - left}px`);
        target.style.setProperty("--mouse-y", `${y - top}px`);
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const layerVariants = {
        hover: (i) => ({
            scale: 1.05,
            x: i * 15,
            y: i * -15,
            rotateZ: i * 2,
            transition: { type: "spring", stiffness: 300, damping: 20 }
        })
    };

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
                        padding: '0.5rem 1rem',
                        borderRadius: '2rem',
                        fontSize: '0.8rem',
                        background: 'rgba(255,255,255,0.02)'
                    }}>
                        Mobile Solutions Architect • 2+ Years Exp
                    </span>
                    <h1 className="gradient-text" style={{ fontSize: '4.5rem', fontWeight: '800', lineHeight: '1.1', margin: '2rem 0' }}>
                        Architecting <br /> High-Performance <br /> Mobile Ecosystems.
                    </h1>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.2rem', maxWidth: '30rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
                        I build scalable, enterprise-grade Android & Flutter applications that bridge complex business logic with exceptional user experiences.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn-primary">View Portfolio</a>
                        <a href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view" target="_blank" className="btn-secondary">Get Resume</a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual glass-morphism"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="architecture-stack">
                        <div className="layer-card">
                            <span style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em' }}>01. PRESENTATION</span>
                            <h3 style={{ marginTop: '0.5rem', fontSize: '1.25rem' }}>Declarative UI</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>Jetpack Compose & Flutter with rich, fluid animations.</p>
                        </div>
                        <div className="layer-card">
                            <span style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em' }}>02. DOMAIN</span>
                            <h3 style={{ marginTop: '0.5rem', fontSize: '1.25rem' }}>Clean Architecture</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>MVVM, SOLID principles, and robust business logic.</p>
                        </div>
                        <div className="layer-card">
                            <span style={{ color: '#f59e0b', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '0.1em' }}>03. INFRASTRUCTURE</span>
                            <h3 style={{ marginTop: '0.5rem', fontSize: '1.25rem' }}>Scalable Data</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', marginTop: '0.5rem' }}>Offline-first syncing, Room, and complex API orchestrations.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
