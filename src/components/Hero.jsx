import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="hero-badge">Architecting Mobile Excellence</span>
                    <h1 className="gradient-text">
                        Building Scalable <br /> Mobile Ecosystems.
                    </h1>
                    <p className="hero-description">
                        Senior Mobile Solutions Architect specializing in high-performance Android & Flutter applications with a focus on Clean Architecture and scalable engineering.
                    </p>
                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">Featured Work</a>
                        <a href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view" target="_blank" className="btn btn-secondary">Download CV</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
