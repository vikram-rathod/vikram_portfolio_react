import React from 'react';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiAndroid } from 'react-icons/si';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero mesh-gradient">
            <div className="container hero-container" style={{ position: 'relative' }}>
                <motion.div
                    className="hero-content hud-panel"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div style={{ marginBottom: '1rem', fontFamily: 'var(--font-heading)', color: 'var(--hud-cyan)', fontSize: '0.8rem', letterSpacing: '2px' }}>
                        [ STATUS: ONLINE ] [ XP: 2+ YEARS ] [ CLASS: ARCHITECT ]
                    </div>
                    <h1 style={{ fontSize: '4.5rem', fontWeight: '900', lineHeight: '1', margin: '1rem 0', fontFamily: 'var(--font-heading)', color: '#fff', textShadow: '0 0 20px rgba(0,243,255,0.3)' }}>
                        VIKRAM <span style={{ color: 'var(--hud-magenta)', textShadow: '0 0 20px rgba(255,0,255,0.3)' }}>RATHOD</span>
                    </h1>
                    <div style={{ borderLeft: '3px solid var(--hud-magenta)', paddingLeft: '1.5rem', margin: '2rem 0' }}>
                        <h2 style={{ fontSize: '1.5rem', color: 'var(--hud-cyan)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>ROLE: SENIOR MOBILE ENGINEER</h2>
                        <p style={{ color: 'var(--text-dim)', fontSize: '1rem', lineHeight: '1.6' }}>
                            Specializing in High-Concurrency Mobile Systems & Clean Architecture.
                            Clearing enterprise-level quests with pixel-perfect precision and scalable logic.
                        </p>
                    </div>

                    <div className="stats-container" style={{ margin: '2.5rem 0' }}>
                        <div className="stat-row" style={{ marginBottom: '1.2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--hud-cyan)' }}>
                                <span>ANDROID/KOTLIN MASTERY</span>
                                <span>95%</span>
                            </div>
                            <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '95%' }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    style={{ height: '100%', background: 'linear-gradient(90deg, var(--hud-cyan), #fff)', boxShadow: '0 0 10px var(--hud-cyan)' }}
                                />
                            </div>
                        </div>
                        <div className="stat-row">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--hud-magenta)' }}>
                                <span>FLUTTER/DART MASTERY</span>
                                <span>90%</span>
                            </div>
                            <div style={{ height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '90%' }}
                                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                                    style={{ height: '100%', background: 'linear-gradient(90deg, var(--hud-magenta), #fff)', boxShadow: '0 0 10px var(--hud-magenta)' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="hero-btns" style={{ display: 'flex', gap: '1.5rem' }}>
                        <a href="#projects" className="btn-primary">START MISSION</a>
                        <a href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view" target="_blank" className="btn-secondary">PLAYER INTEL</a>
                    </div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <div style={{
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <div style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            border: '1px solid var(--hud-cyan)',
                            borderRadius: '50%',
                            opacity: 0.2,
                        }} />
                        <div style={{
                            position: 'absolute',
                            width: '90%',
                            height: '90%',
                            border: '2px dashed var(--hud-cyan)',
                            borderRadius: '50%',
                            opacity: 0.4,
                            animation: 'rotate-hero 20s linear infinite'
                        }} />
                        <div style={{
                            position: 'absolute',
                            width: '80%',
                            height: '80%',
                            border: '1px solid var(--hud-magenta)',
                            borderRadius: '50%',
                            opacity: 0.3,
                            animation: 'rotate-hero-reverse 15s linear infinite'
                        }} />
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            style={{ fontSize: '10rem', color: 'var(--hud-cyan)', filter: 'drop-shadow(0 0 20px var(--hud-cyan))' }}
                        >
                            <SiAndroid />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <style>
                {`
                    @keyframes rotate-hero { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
                    @keyframes rotate-hero-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
                    .hud-panel {
                        padding: 3rem;
                        background: rgba(0, 0, 0, 0.4);
                        border: 1px solid var(--hud-border);
                        position: relative;
                        backdrop-filter: blur(10px);
                    }
                    .hud-panel::before {
                        content: '';
                        position: absolute;
                        top: 0; left: 0;
                        width: 30px; height: 30px;
                        border-top: 4px solid var(--hud-cyan);
                        border-left: 4px solid var(--hud-cyan);
                    }
                    .hud-panel::after {
                        content: '';
                        position: absolute;
                        bottom: 0; right: 0;
                        width: 30px; height: 30px;
                        border-bottom: 4px solid var(--hud-cyan);
                        border-right: 4px solid var(--hud-cyan);
                    }
                `}
            </style>
        </section>
    );
};

export default Hero;
