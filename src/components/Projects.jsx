import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import { FaGithub, FaExternalLinkAlt, FaComments, FaTasks, FaHamburger, FaCheckCircle } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiFirebase, SiDart } from 'react-icons/si';

const projectsData = [
    {
        id: 0,
        title: 'ProChat',
        subtitle: 'Professional Communication Platform',
        icon: <FaComments />,
        iconColor: '#38bdf8',
        desc: 'A high-concurrency real-time messaging ecosystem built for professional teams. Features role-based group management, sub-100ms message latency via WebSockets, read receipts, push notifications, offline sync, and secure file sharing.',
        tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'WebSocket', 'Hilt', 'Material Design 3'],
        github: 'https://github.com/VikramRathodk',
        features: [
            'Real-time messaging via WebSocket',
            'Role-based group management',
            'Material Design 3 UI',
            'Read receipts & Push notifications',
            'Offline sync & File sharing',
        ],
        featured: true,
        accentColor: '#38bdf8',
        langIcons: [
            <SiKotlin style={{ color: '#7F52FF' }} />,
            <SiFirebase style={{ color: '#FFCA28' }} />,
        ],
    },
    {
        id: 1,
        title: 'Steveo',
        subtitle: 'Smart Task Management',
        icon: <FaTasks />,
        iconColor: '#a78bfa',
        desc: 'An intelligent task manager with calendar integration, productivity analytics, and offline-first architecture. Supports dark/light theming and complex sync orchestration using WorkManager and Room DB triggers.',
        tags: ['Kotlin', 'Jetpack Compose', 'Room DB', 'WorkManager', 'MVVM'],
        github: 'https://github.com/VikramRathodk',
        features: [
            'Task management & Calendar integration',
            'Productivity analytics dashboard',
            'Dark / Light mode support',
            'Offline-first architecture',
            'WorkManager background sync',
        ],
        featured: false,
        accentColor: '#a78bfa',
        langIcons: [
            <SiKotlin style={{ color: '#7F52FF' }} />,
        ],
    },
    {
        id: 2,
        title: 'Food Delivery App',
        subtitle: 'Cross-Platform Delivery Engine',
        icon: <FaHamburger />,
        iconColor: '#fb923c',
        desc: 'A cross-platform (Android & iOS) food delivery application with real-time logistics tracking, RazorPay payment integration, and a responsive UI. Built with Flutter for maximum platform coverage.',
        tags: ['Flutter', 'Dart', 'Firebase', 'Google Maps API', 'RazorPay'],
        github: 'https://github.com/VikramRathodk',
        features: [
            'Cross-platform (Android & iOS)',
            'Real-time GPS order tracking',
            'CRUD operations & menu management',
            'RazorPay payment integration',
            'Responsive adaptive UI',
        ],
        featured: false,
        accentColor: '#fb923c',
        langIcons: [
            <SiFlutter style={{ color: '#02569B' }} />,
            <SiDart style={{ color: '#0175C2' }} />,
            <SiFirebase style={{ color: '#FFCA28' }} />,
        ],
    },
];

const FeaturedProjectCard = ({ project, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            style={{ gridColumn: 'span 12' }}
        >
            <div style={{
                background: 'rgba(15, 20, 40, 0.6)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 'var(--radius)',
                padding: '2.5rem',
                backdropFilter: 'blur(20px)',
                position: 'relative',
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '3rem',
                alignItems: 'center',
            }}>
                {/* Accent glow */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '300px', height: '300px',
                    background: `radial-gradient(circle, ${project.accentColor}18, transparent 70%)`,
                    borderRadius: '50%',
                    pointerEvents: 'none',
                }} />

                {/* Left: Info */}
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{
                            width: '3.5rem', height: '3.5rem',
                            background: `${project.accentColor}18`,
                            borderRadius: 'var(--radius-sm)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: project.accentColor,
                            fontSize: '1.5rem',
                            flexShrink: 0,
                        }}>
                            {project.icon}
                        </div>
                        <span style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            color: project.accentColor,
                            background: `${project.accentColor}15`,
                            padding: '0.3rem 0.9rem',
                            borderRadius: '9999px',
                            border: `1px solid ${project.accentColor}30`,
                        }}>
                            ★ Featured Project
                        </span>
                    </div>

                    <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', marginBottom: '0.4rem' }}>
                        {project.title}
                    </h3>
                    <p style={{ color: project.accentColor, fontWeight: 600, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                        {project.subtitle}
                    </p>
                    <p style={{ color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
                        {project.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                        {project.tags.map((tag, i) => (
                            <span key={i} style={{
                                fontSize: '0.75rem',
                                padding: '0.3rem 0.75rem',
                                background: 'rgba(255,255,255,0.04)',
                                borderRadius: '9999px',
                                color: project.accentColor,
                                fontWeight: 600,
                                border: '1px solid var(--border)',
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div style={{ display: 'flex', gap: '1.25rem' }}>
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -2, color: project.accentColor }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                color: 'var(--text-dim)', fontSize: '0.9rem', fontWeight: 600,
                                textDecoration: 'none',
                            }}
                        >
                            <FaGithub /> GitHub
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ y: -2, color: project.accentColor }}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '0.5rem',
                                color: 'var(--text-dim)', fontSize: '0.9rem', fontWeight: 600,
                                textDecoration: 'none',
                            }}
                        >
                            <FaExternalLinkAlt /> Live Demo
                        </motion.a>
                    </div>
                </div>

                {/* Right: Feature list */}
                <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border)',
                    padding: '2rem',
                }}>
                    <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-dim)', marginBottom: '1.5rem' }}>
                        Key Features
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {project.features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                            >
                                <FaCheckCircle style={{ color: project.accentColor, flexShrink: 0, fontSize: '0.9rem' }} />
                                <span style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>{f}</span>
                            </motion.div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>Tech:</span>
                        {project.langIcons.map((icon, i) => (
                            <span key={i} style={{ fontSize: '1.3rem' }}>{icon}</span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

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
        >
            <motion.div
                animate={{ borderColor: hovered ? `${project.accentColor}50` : 'rgba(255,255,255,0.08)' }}
                style={{
                    background: 'rgba(15, 20, 40, 0.6)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 'var(--radius)',
                    padding: '2.25rem',
                    backdropFilter: 'blur(20px)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'default',
                }}
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            style={{
                                position: 'absolute',
                                top: 0, left: 0,
                                width: '200px', height: '200px',
                                background: `radial-gradient(circle, ${project.accentColor}12, transparent 70%)`,
                                borderRadius: '50%',
                                pointerEvents: 'none',
                            }}
                        />
                    )}
                </AnimatePresence>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                    <div style={{
                        width: '3.25rem', height: '3.25rem',
                        background: `${project.accentColor}15`,
                        borderRadius: 'var(--radius-sm)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: project.accentColor,
                        fontSize: '1.4rem',
                    }}>
                        {project.icon}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <motion.a
                            whileHover={{ color: project.accentColor, y: -2 }}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
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

                <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-display)', marginBottom: '0.4rem' }}>
                    {project.title}
                </h3>
                <p style={{ color: project.accentColor, fontWeight: 600, fontSize: '0.85rem', marginBottom: '1rem' }}>
                    {project.subtitle}
                </p>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.93rem', lineHeight: 1.75, marginBottom: '1.5rem', flex: 1 }}>
                    {project.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.75rem' }}>
                    {project.features.slice(0, 4).map((f, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                            <FaCheckCircle style={{ color: project.accentColor, flexShrink: 0, fontSize: '0.75rem' }} />
                            <span style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>{f}</span>
                        </div>
                    ))}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                    {project.tags.map((tag, i) => (
                        <span key={i} style={{
                            fontSize: '0.72rem',
                            padding: '0.25rem 0.7rem',
                            background: 'rgba(255,255,255,0.04)',
                            borderRadius: '9999px',
                            color: project.accentColor,
                            fontWeight: 600,
                            border: '1px solid var(--border)',
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

const Projects = () => {
    const featured = projectsData[0];
    const others = projectsData.slice(1);

    return (
        <section id="projects" className="section container">
            <SectionHeader
                title="Featured Projects"
                subtitle="Real-world mobile applications built with clean architecture, modern patterns, and production-grade standards."
            />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '1.5rem',
            }}>
                {/* Featured Card */}
                <FeaturedProjectCard project={featured} delay={0} />

                {/* Smaller Cards */}
                {others.map((p, i) => (
                    <SmallProjectCard key={p.id} project={p} delay={0.1 * (i + 1)} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
