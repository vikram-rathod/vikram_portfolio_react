import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaComments, FaTasks, FaHamburger, FaProjectDiagram } from 'react-icons/fa';

const ProjectCard = ({ title, icon, desc, tags, github, live, featured, index }) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.1
            }
        }
    };

    return (
        <motion.div
            className={`bento-card project-card ${featured ? 'featured' : ''}`}
            style={{
                gridColumn: featured ? 'span 8' : 'span 4',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ y: -12, scale: 1.01 }}
        >
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <motion.div
                        whileHover={{ rotate: 15 }}
                        style={{
                            width: '40px',
                            height: '40px',
                            background: 'rgba(99, 102, 241, 0.1)',
                            borderRadius: '0.75rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary)',
                            fontSize: '1.25rem'
                        }}
                    >
                        {icon}
                    </motion.div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <motion.a
                            whileHover={{ color: 'var(--text-primary)', scale: 1.2 }}
                            href={github}
                            className="project-link"
                            style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </motion.a>
                        {live && (
                            <motion.a
                                whileHover={{ color: 'var(--text-primary)', scale: 1.2 }}
                                href={live}
                                className="project-link"
                                style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}
                                aria-label="Live Demo"
                            >
                                <FaExternalLinkAlt />
                            </motion.a>
                        )}
                    </div>
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '2rem' }}>{desc}</p>
            </div>

            <div className="tags">
                {tags.map((tag, i) => (
                    <span key={i} className="tag-chip" style={{ background: 'rgba(99, 102, 241, 0.05)', color: 'var(--primary)', border: 'none' }}>{tag}</span>
                ))}
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title gradient-text">Featured Missions</h2>
                    <p className="section-subtitle">A portfolio of high-impact mobile solutions architectural achievements.</p>
                </motion.div>

                <div className="bento-grid">
                    <ProjectCard
                        featured
                        index={0}
                        title="ProChat Alpha"
                        icon={<FaComments />}
                        desc="Architected a high-concurrency real-time messaging ecosystem for corporate teams. Features end-to-end encrypted tunnels, automated thread management, and optimized WebSocket performance for sub-100ms latency. Implemented a custom persistence layer to handle offline bursts."
                        tags={['Kotlin', 'Coroutines', 'Firebase SDK', 'Custom Socket.io']}
                        github="https://github.com/VikramRathodk"
                    />

                    <ProjectCard
                        index={1}
                        title="Steveo Enterprise"
                        icon={<FaTasks />}
                        desc="Engineered an enterprise-grade resource management suite with sophisticated bottleneck analytics and deadline optimization logic. Solved the 'Offline-Sync Problem' using advanced Room triggers."
                        tags={['Jetpack Compose', 'MVVM', 'Room DB']}
                        github="https://github.com/VikramRathodk"
                    />

                    <ProjectCard
                        index={2}
                        title="Global Gourmet"
                        icon={<FaHamburger />}
                        desc="Developed a high-performance cross-platform delivery engine. Integrated real-time logistics tracking via Google Maps SDK and secure multi-currency payment orchestration."
                        tags={['Flutter', 'Dart', 'Stripe API']}
                        github="https://github.com/VikramRathodk"
                    />

                    <ProjectCard
                        featured
                        index={3}
                        title="Modular Architecture Baseline"
                        icon={<FaProjectDiagram />}
                        desc="Created a standardized mobile architecture template for enterprise applications. This baseline project enforces strict modularization and reduces the initial 'time-to-first-feature' by 35% through pre-configured DI and networking layers."
                        tags={['Hilt', 'Clean Arch', 'KMP', 'Modularization']}
                        github="https://github.com/VikramRathodk"
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
