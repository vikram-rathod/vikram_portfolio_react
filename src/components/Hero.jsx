import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section className="hero">
            <div className="hero-glow"></div>
            <div className="container">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className="hero-badge">
                        <span>Available for Strategic Roles</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants}>
                        <span className="gradient-text">Vikram Rathod.</span><br />
                        <span style={{ color: 'var(--text-secondary)' }}>Mobile Architect.</span>
                    </motion.h1>

                    <motion.p variants={itemVariants} className="hero-description">
                        I engineer high-fidelity, scalable mobile ecosystems at the intersection of complex business logic and exceptional user experience.
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary">
                            View Missions <FaArrowRight style={{ fontSize: '0.8rem' }} />
                        </a>
                        <a href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view" target="_blank" className="btn btn-secondary">
                            Get Resume <FaDownload style={{ fontSize: '0.8rem' }} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
