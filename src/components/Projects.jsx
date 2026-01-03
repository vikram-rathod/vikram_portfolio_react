import React from 'react';
import { FaGithub, FaComments, FaTasks, FaHamburger } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, icon, desc, tags }) => (
    <motion.div
        className="project-card glass-card"
        whileHover={{ y: -10 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <div className="project-content">
            <div className="project-header">
                <h3>{icon} {title}</h3>
                <div className="project-links">
                    <a href="#" title="View Code"><FaGithub /></a>
                </div>
            </div>
            <p className="project-desc">{desc}</p>
            <div className="tech-tags">
                {tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                ))}
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                <div className="projects-grid">

                    <ProjectCard
                        title="ProChat"
                        icon={<FaComments />}
                        desc="Real-time messaging platform designed for professional team communication with advanced group management."
                        tags={['Kotlin', 'Jetpack Compose', 'Firebase', 'Hilt']}
                    />

                    <ProjectCard
                        title="Steveo"
                        icon={<FaTasks />}
                        desc="Smart task management solution with deadline tracking, calendar integration, and offline-first architecture."
                        tags={['Kotlin', 'Room', 'WorkManager', 'Compose']}
                    />

                    <ProjectCard
                        title="Food Delivery App"
                        icon={<FaHamburger />}
                        desc="Cross-platform food delivery solution for Android & iOS with real-time tracking and payment integration."
                        tags={['Flutter', 'Dart', 'Firebase', 'Stripe']}
                    />

                </div>
            </div>
        </section>
    );
};

export default Projects;
