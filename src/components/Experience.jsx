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
                                <li>Worked with 2+ enterprise-grade Android applications using Kotlin and Jetpack Compose.</li>
                                <li>Seamlessly integrated 20+ REST APIs with proper error handling and caching.</li>
                                <li>Implemented MVVM and Clean Architecture for maintainable code.</li>
                                <li>Optimized app performance and reduced memory leaks.</li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
