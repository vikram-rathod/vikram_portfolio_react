import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import { FaGithub, FaExternalLinkAlt, FaComments, FaTasks, FaHamburger } from 'react-icons/fa';

const ProjectCard = ({ title, icon, desc, tags, github, featured = false, delay = 0 }) => (
    <Card
        style={{ gridColumn: featured ? 'span 8' : 'span 4', display: 'flex', flexDirection: 'column' }}
        delay={delay}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
            <div style={{
                width: '3.5rem',
                height: '3.5rem',
                background: 'rgba(56, 189, 248, 0.1)',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                fontSize: '1.5rem'
            }}>
                {icon}
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <motion.a whileHover={{ color: 'var(--accent)', y: -2 }} href={github} target="_blank" style={{ color: 'var(--text-dim)', fontSize: '1.25rem' }}><FaGithub /></motion.a>
                <motion.a whileHover={{ color: 'var(--accent)', y: -2 }} href="#" target="_blank" style={{ color: 'var(--text-dim)', fontSize: '1.15rem' }}><FaExternalLinkAlt /></motion.a>
            </div>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>{title}</h3>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem', flex: 1 }}>{desc}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {tags.map((tag, i) => (
                <span key={i} style={{
                    fontSize: '0.75rem',
                    padding: '0.25rem 0.75rem',
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '9999px',
                    color: 'var(--accent)',
                    fontWeight: 600,
                    border: '1px solid var(--border)'
                }}>
                    {tag}
                </span>
            ))}
        </div>
    </Card>
);

const Projects = () => {
    return (
        <section id="projects" className="section container">
            <SectionHeader
                title="Engineering Missions"
                subtitle="High-impact mobile deployments and architectural case studies."
            />

            <div className="bento-grid">
                <ProjectCard
                    featured
                    title="ProChat Alpha"
                    icon={<FaComments />}
                    desc="Architected a high-concurrency real-time messaging ecosystem for corporate teams. Integrated sub-100ms latency synchronization and military-grade encryption tunnels."
                    tags={['Kotlin', 'WebSockets', 'MVVM', 'Clean Arch']}
                    github="https://github.com/VikramRathodk"
                />

                <ProjectCard
                    title="Steveo Enterprise"
                    icon={<FaTasks />}
                    desc="Enterprise resource manager with complex offline-first sync orchestration using advanced Room triggers."
                    tags={['Compose', 'Hilt', 'Room']}
                    github="https://github.com/VikramRathodk"
                    delay={0.1}
                />

                <ProjectCard
                    title="Global Gourmet"
                    icon={<FaHamburger />}
                    desc="Cross-platform delivery engine with real-time logistics tracking and secure payment gateways."
                    tags={['Flutter', 'Maps API', 'Stripe']}
                    github="https://github.com/VikramRathodk"
                    delay={0.2}
                />
            </div>
        </section>
    );
};

export default Projects;
