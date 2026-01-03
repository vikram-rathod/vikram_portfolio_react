import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-glow"></div>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="hero-badge">
                        <span>Available for Strategic Roles</span>
                    </div>
                    <h1>
                        <span className="gradient-text">Vikram Rathod.</span><br />
                        <span style={{ color: 'var(--text-secondary)' }}>Mobile Architect.</span>
                    </h1>
                    <p className="hero-description">
                        I engineer high-fidelity, scalable mobile ecosystems at the intersection of complex business logic and exceptional user experience.
                    </p>
                    <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                        <a href="#projects" className="btn btn-primary">
                            View Missions <FaArrowRight style={{ fontSize: '0.8rem' }} />
                        </a>
                        <a href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view" target="_blank" className="btn btn-secondary">
                            Get Resume <FaDownload style={{ fontSize: '0.8rem' }} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
