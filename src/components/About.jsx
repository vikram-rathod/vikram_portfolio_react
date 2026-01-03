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
                            I am a passionate <strong>Mobile Application Developer</strong> currently working at <strong>Comzent Technologies Pvt. Ltd</strong> in Mumbai, India.
                        </p>
                        <p>
                            With over a year of specialized experience, I focus on building robust, scalable applications using <strong>Android (Kotlin)</strong> and <strong>Flutter</strong>. I'm deeply committed to writing clean code, following modern architecture patterns like <strong>MVVM</strong> and <strong>Clean Architecture</strong>, and delivering exceptional user experiences.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <h3>2+</h3>
                                <p>Years Exp</p>
                            </div>
                            <div className="stat-item">
                                <h3>20+</h3>
                                <p>APIs Integrated</p>
                            </div>
                            <div className="stat-item">
                                <h3>3+</h3>
                                <p>Major Projects</p>
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
