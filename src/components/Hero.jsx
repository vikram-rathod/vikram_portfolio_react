import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero container">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="hero-badge"
                    style={{
                        background: 'rgba(56, 189, 248, 0.1)',
                        padding: '0.5rem 1rem',
                        borderRadius: '9999px',
                        color: 'var(--accent)',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        marginBottom: '2rem',
                        display: 'inline-block'
                    }}
                >
                    Available for senior opportunities
                </motion.div>

                <h1 className="hero-h1">
                    <span className="gradient-text">Vikram Rathod</span> <br />
                    <span style={{ opacity: 0.5 }}>Architecting Mobile.</span>
                </h1>

                <p className="hero-p">
                    Senior Solutions Architect at Comzent Technologies, specializing in scaling mission-critical Android & Flutter ecosystems.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                    <Button
                        href="#projects"
                        variant="primary"
                        icon={<FaArrowRight />}
                    >
                        Explore Work
                    </Button>
                    <Button
                        href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view"
                        variant="outline"
                        target="_blank"
                        icon={<FaDownload />}
                    >
                        Review CV
                    </Button>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
