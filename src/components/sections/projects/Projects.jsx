import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Card from '../../ui/Card';
import SectionHeader from '../../ui/SectionHeader';
import { PROJECTS } from '../../../constants/data';
import {
    FaGithub, FaExternalLinkAlt, FaComments,
    FaTasks, FaHamburger, FaCheckCircle,
} from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiFirebase, SiDart } from 'react-icons/si';
import './Projects.css';

/* ── Icon registry ───────────────────────────── */
const ICON_MAP = {
    FaComments, FaTasks, FaHamburger, FaCheckCircle,
    SiKotlin, SiFlutter, SiFirebase, SiDart,
};

const ICON_COLORS = {
    SiKotlin: '#7F52FF',
    SiFirebase: '#FFCA28',
    SiFlutter: '#02569B',
    SiDart: '#0175C2',
};

/* ── Resolve icon key → element ─────────────── */
function resolveIcon(key, style = {}) {
    const Comp = ICON_MAP[key];
    return Comp ? <Comp style={style} /> : null;
}

const FeaturedProjectCard = ({ project, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ gridColumn: 'span 12' }}
    >
        <Tilt
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor={project.accentColor}
            glarePosition="all"
            scale={1.01}
            transitionSpeed={800}
            className="featured-project-card"
        >
            {/* Accent glow */}
            <div
                className="featured-project-glow"
                style={{ background: `radial-gradient(circle, ${project.accentColor}18, transparent 70%)` }}
            />

            {/* Left: Info */}
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div
                        className="project-icon-container"
                        style={{ background: `${project.accentColor}18`, color: project.accentColor }}
                    >
                        {resolveIcon(project.iconKey)}
                    </div>
                    <span
                        className="featured-badge"
                        style={{
                            color: project.accentColor,
                            background: `${project.accentColor}15`,
                            border: `1px solid ${project.accentColor}30`,
                        }}
                    >
                        ★ Featured Project
                    </span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle" style={{ color: project.accentColor }}>{project.subtitle}</p>
                <p className="project-desc">{project.desc}</p>

                <div className="project-tags-container">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="project-tag" style={{ color: project.accentColor }}>{tag}</span>
                    ))}
                </div>

                <div className="project-links">
                    <motion.a
                        href={project.github} target="_blank" rel="noopener noreferrer"
                        whileHover={{ y: -2, color: project.accentColor }}
                        className="project-link"
                    >
                        <FaGithub /> GitHub
                    </motion.a>
                    <motion.a href="#" whileHover={{ y: -2, color: project.accentColor }} className="project-link">
                        <FaExternalLinkAlt /> Live Demo
                    </motion.a>
                </div>
            </div>

            {/* Right: Feature list */}
            <div className="project-features-panel">
                <h4 className="project-features-title">Key Features</h4>
                <div className="project-features-list">
                    {project.features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * i }}
                            className="project-feature-item"
                        >
                            <FaCheckCircle style={{ color: project.accentColor, flexShrink: 0, fontSize: '0.9rem' }} />
                            <span className="project-feature-text">{f}</span>
                        </motion.div>
                    ))}
                </div>
                <div className="project-tech-icons-container">
                    <span className="project-tech-label">Tech:</span>
                    {project.langIconKeys.map((key, i) => (
                        <span key={i} style={{ fontSize: '1.3rem' }}>
                            {resolveIcon(key, { color: ICON_COLORS[key] })}
                        </span>
                    ))}
                </div>
            </div>
        </Tilt>
    </motion.div>
);

const SmallProjectCard = ({ project, delay = 0 }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            style={{ gridColumn: 'span 6' }}
            className="bento-grid-item"
        >
            <Tilt
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                glareEnable={true}
                glareMaxOpacity={0.12}
                glareColor={project.accentColor}
                glarePosition="all"
                transitionSpeed={800}
                style={{ height: '100%' }}
            >
                <motion.div
                    animate={{ borderColor: hovered ? `${project.accentColor}50` : 'rgba(255,255,255,0.08)' }}
                    className="small-project-card-container"
                    style={{ height: '100%' }}
                >
                    <AnimatePresence>
                        {hovered && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="small-project-glow"
                                style={{ background: `radial-gradient(circle, ${project.accentColor}12, transparent 70%)` }}
                            />
                        )}
                    </AnimatePresence>

                    <div className="small-project-header">
                        <div
                            className="small-project-icon-container"
                            style={{ background: `${project.accentColor}15`, color: project.accentColor }}
                        >
                            {resolveIcon(project.iconKey)}
                        </div>
                        <div className="small-project-links">
                            <motion.a
                                whileHover={{ color: project.accentColor, y: -2 }}
                                href={project.github} target="_blank" rel="noopener noreferrer"
                                style={{ color: 'var(--text-dim)', fontSize: '1.25rem' }}
                            >
                                <FaGithub />
                            </motion.a>
                            <motion.a
                                whileHover={{ color: project.accentColor, y: -2 }}
                                href="#"
                                style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}
                            >
                                <FaExternalLinkAlt />
                            </motion.a>
                        </div>
                    </div>

                    <h3 className="small-project-title">{project.title}</h3>
                    <p className="small-project-subtitle" style={{ color: project.accentColor }}>{project.subtitle}</p>
                    <p className="small-project-desc">{project.desc}</p>

                    <div className="small-project-features-list">
                        {project.features.slice(0, 4).map((f, i) => (
                            <div key={i} className="small-project-feature-item">
                                <FaCheckCircle style={{ color: project.accentColor, flexShrink: 0, fontSize: '0.75rem' }} />
                                <span className="small-project-feature-text">{f}</span>
                            </div>
                        ))}
                    </div>

                    <div className="small-project-tags-container">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="small-project-tag" style={{ color: project.accentColor }}>{tag}</span>
                        ))}
                    </div>
                </motion.div>
            </Tilt>
        </motion.div>
    );
};

const Projects = () => {
    const featured = PROJECTS.find(p => p.featured);
    const others = PROJECTS.filter(p => !p.featured);

    return (
        <section id="projects" className="section container">
            <SectionHeader
                title="Featured Projects"
                subtitle="Real-world mobile applications built with clean architecture, modern patterns, and production-grade standards."
            />

            <div className="projects-grid">
                <FeaturedProjectCard project={featured} delay={0} />
                {others.map((p, i) => (
                    <SmallProjectCard key={p.id} project={p} delay={0.1 * (i + 1)} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
