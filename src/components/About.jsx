import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                <div className="about-grid">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p>
                            I am a visionary <strong>Mobile Solutions Architect</strong> dedicated to pushing the boundaries of mobile technology at <strong>Comzent Technologies Pvt. Ltd</strong>.
                        </p>
                        <p>
                            With over <strong>2 years of professional experience</strong>, I specialize in engineering high-performance, scalable mobile ecosystems using <strong>Kotlin, Jetpack Compose, and Flutter</strong>. My core philosophy centers on <strong>SOLID principles</strong>, <strong>Domain-Driven Design</strong>, and crafting pixel-perfect user journeys that drive business value.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <h3>2+</h3>
                                <p>Years of Mastery</p>
                            </div>
                            <div className="stat-item">
                                <h3>25+</h3>
                                <p>APIs Orchestrated</p>
                            </div>
                            <div className="stat-item">
                                <h3>5+</h3>
                                <p>Strategic Deployments</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        className="education-card"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3><FaGraduationCap /> Education</h3>
                        <div className="edu-item">
                            <h4>Master of Computer Applications (MCA)</h4>
                            <p className="institution">Bhartiya Vidya Bhavans Sardar Patel Institute of Technology</p>
                            <p className="year">2020 – 2024</p>
                            <p className="grade">CGPA: 8.0/10</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
