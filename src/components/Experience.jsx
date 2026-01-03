import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
                <div className="timeline">
                    <motion.div
                        className="timeline-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="timeline-dot"></div>
                        <div className="timeline-content glass-card">
                            <span className="date">Jan 2024 – Present</span>
                            <h3>Mobile Application Developer</h3>
                            <h4>Comzent Technologies Pvt. Ltd</h4>
                            <p className="location"><FaMapMarkerAlt /> Mumbai, India</p>
                            <ul className="job-highlights">
                                <li>Architected and led the development of 3+ enterprise-grade mobile applications using Kotlin Multiplatform and Jetpack Compose.</li>
                                <li>Engineered complex API integrations with advanced pagination, offline-first caching strategies using Room/Realm, and robust error handling.</li>
                                <li>Pioneered the transition from MVC to MVVM/Clean Architecture, resulting in a 40% reduction in bug reports and significantly improved code maintainability.</li>
                                <li>Collaborated with cross-functional teams to design UI/UX that increased user engagement across critical application modules.</li>
                                <li>Mentor junior developers in best practices for Git workflow, CI/CD pipelines, and code reviews.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
