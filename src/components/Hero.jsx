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
        <header className="hero mesh-gradient" onMouseMove={handleMouseMove}>
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="hero-badge">
                        ✨ Redefining Mobile Excellence
                    </motion.div>
                    <motion.h1 variants={itemVariants}>
                        Crafting <span className="gradient-text">Premium</span><br />
                        Digital Ecosystems
                    </motion.h1>
                    <motion.div variants={itemVariants} className="typing-container">
                        <Typewriter
                            words={['Senior Android Solutions Architect', 'Lead Flutter Engineer', 'Clean Architecture Evangelist', 'High-Performance Specialist']}
                            loop={0}
                            cursor
                            cursorStyle='_'
                            typeSpeed={60}
                            deleteSpeed={30}
                            delaySpeed={2000}
                        />
                    </motion.div>
                    <motion.p variants={itemVariants} className="hero-description">
                        Expert Mobile Developer with <strong>2+ years of professional mastery</strong>. engineering high-fidelity, scalable applications by bridging the gap between complex business logic and exceptional user experiences.
                    </motion.p>
                    <motion.div variants={itemVariants} className="hero-btns">
                        <a href="#projects" className="btn-primary">Explore My Work</a>
                        <a href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view" target="_blank" className="btn-secondary">
                            Download Resume
                        </a>
                    </motion.div>
                    <motion.div variants={itemVariants} className="social-links">
                        <a href="https://github.com/VikramRathodk" target="_blank" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/vikram-rathod-438442289/" target="_blank" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="mailto:rathodvikramk382@gmail.com" aria-label="Email"><FaEnvelope /></a>
                    </motion.div>
                </motion.div>

                <div className="hero-visual-container">
                    <motion.div
                        className="architecture-stack"
                        initial={{ rotateY: -20, rotateX: 10, opacity: 0 }}
                        animate={{ rotateY: 0, rotateX: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        {/* Layer 3: Persistence Layer */}
                        <motion.div className="layer-card layer-3 glass-morphism" custom={3} whileHover="hover" variants={layerVariants}>
                            <h4 style={{ color: 'var(--accent-tertiary)', fontSize: '0.9rem' }}>Persistence & Sync</h4>
                            <div className="tech-tags" style={{ marginTop: '10px' }}>
                                <span>Room</span><span>WorkManager</span><span>Auth</span>
                            </div>
                        </motion.div>

                        {/* Layer 2: Business Domain */}
                        <motion.div className="layer-card layer-2 glass-morphism" custom={2} whileHover="hover" variants={layerVariants}>
                            <h4 style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>Domain & Networking</h4>
                            <div className="tech-tags" style={{ marginTop: '10px' }}>
                                <span>Retrofit</span><span>Coroutine</span><span>Clean Arch</span>
                            </div>
                        </motion.div>

                        {/* Layer 1: Presentation (Top) */}
                        <motion.div className="layer-card layer-1 glass-morphism glow-card" custom={1} whileHover="hover" variants={layerVariants}>
                            <div className="code-header">
                                <span className="dot red"></span><span className="dot yellow"></span><span className="dot green"></span>
                            </div>
                            <pre style={{ fontSize: '0.75rem', opacity: 0.9, lineHeight: '1.4' }}>
                                <span className="keyword">@Composable</span><br />
                                <span className="keyword">fun</span> <span className="function">AppLayout</span>() {'{'}<br />
                                &nbsp;&nbsp;<span className="class-name">Scaffold</span> {'{'}<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className="function">NavigationGraph</span>()<br />
                                &nbsp;&nbsp;{'}'}<br />
                                {'}'}
                            </pre>
                        </motion.div>
                    </motion.div>

                    <div className="floating-icon icon-android" style={{ top: '5%', right: '5%' }}><SiAndroid /></div>
                    <div className="floating-icon icon-flutter" style={{ bottom: '10%', left: '5%' }}><SiFlutter /></div>
                    <div className="floating-icon icon-kotlin" style={{ top: '45%', right: '-10px' }}><SiKotlin /></div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
