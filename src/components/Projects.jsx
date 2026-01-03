import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, desc, tags, className }) => (
    <motion.div
        className={`bento-item project-card ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ transform: "scale(1.01)" }}
    >
        <div className="project-header">
            <h3>{title}</h3>
            <div className="project-links" style={{ display: 'flex', gap: '1rem' }}>
                <a href="#"><FaGithub style={{ fontSize: '1.2rem' }} /></a>
                <a href="#"><FaExternalLinkAlt style={{ fontSize: '1rem' }} /></a>
            </div>
        </div>
        <p>{desc}</p>
        <div className="project-tags">
            {tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
            ))}
        </div>
    </motion.div>
);

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="gradient-text">Featured Projects</h2>
                    <p>Selection of high-impact mobile solutions and ecosystems.</p>
                </div>

                <div className="bento-grid">
                    <ProjectCard
                        className="col-span-2"
                        title="ProChat Alpha"
                        desc="Architected a high-concurrency real-time messaging ecosystem for corporate teams. Features end-to-end encryption, automated thread management, and optimized WebSocket communication for seamless professional collaboration."
                        tags={['Kotlin', 'Coroutines', 'Firebase', 'MVVM']}
                    />
                    <ProjectCard
                        title="Steveo Enterprise"
                        desc="Engineered an enterprise-grade resource management suite with sophisticated analytics and offline-first synchronization."
                        tags={['Jetpack Compose', 'Room', 'WorkManager']}
                    />
                    <ProjectCard
                        title="Global Gourmet"
                        desc="Developed a high-performance cross-platform food delivery engine with real-time logistics tracking and secure payment gateways."
                        tags={['Flutter', 'Dart', 'Stripe API']}
                    />
                    <ProjectCard
                        className="col-span-2"
                        title="Architecture Baseline"
                        desc="Created a standardized mobile architecture template for enterprise apps, reducing boilerplate by 30% and enforcing strict Clean Architecture standards."
                        tags={['Clean Architecture', 'SOLID', 'Modularization']}
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
