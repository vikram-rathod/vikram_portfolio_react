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
                        title="ProChat Alpha"
                        icon={<FaComments />}
                        desc="Architected a high-concurrency real-time messaging ecosystem for corporate teams. Features end-to-end encryption, automated thread management, and optimized WebSocket communication."
                        tags={['Kotlin', 'Coroutines', 'Firebase', 'Clean Architecture']}
                    />

                    <ProjectCard
                        title="Steveo Enterprise"
                        icon={<FaTasks />}
                        desc="Engineered an enterprise-grade resource management suite with sophisticated analytics, deadline optimization, and offline-first synchronization using Room and WorkManager."
                        tags={['Jetpack Compose', 'MVVM', 'Room', 'Analytics']}
                    />

                    <ProjectCard
                        title="Global Gourmet"
                        icon={<FaHamburger />}
                        desc="Developed a high-performance cross-platform food delivery engine. Implemented real-time logistics tracking, secure multi-currency payment gateways, and high-fidelity animations."
                        tags={['Flutter', 'Dart', 'Stripe API', 'Google Maps']}
                    />

                </div>
            </div>
        </section>
    );
};

export default Projects;
