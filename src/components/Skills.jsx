import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { SiKotlin, SiAndroid, SiFlutter, SiDart, SiFirebase, SiSqlite, SiTypescript, SiSpringboot, SiNodedotjs, SiMongodb } from 'react-icons/si';
import { FaJava, FaCubes, FaLayerGroup, FaProjectDiagram, FaGitAlt, FaCode } from 'react-icons/fa';
import './Skills.css';

const SKILL_GROUPS = [
    {
        label: 'Mobile & Web Core',
        color: 'var(--accent)',
        skills: [
            { icon: <SiAndroid style={{ color: '#3DDC84' }} />, name: 'Android' },
            { icon: <SiKotlin style={{ color: '#7F52FF' }} />, name: 'Kotlin' },
            { icon: <SiFlutter style={{ color: '#54C5F8' }} />, name: 'Flutter' },
            { icon: <SiTypescript style={{ color: '#3178C6' }} />, name: 'TypeScript' },
            { icon: <FaJava style={{ color: '#ED8B00' }} />, name: 'Java / Dart' },
        ],
    },
    {
        label: 'Backend & Data',
        color: 'var(--primary)',
        skills: [
            { icon: <SiSpringboot style={{ color: '#6DB33F' }} />, name: 'Spring Boot' },
            { icon: <SiNodedotjs style={{ color: '#339933' }} />, name: 'Node.js' },
            { icon: <SiFirebase style={{ color: '#FFCA28' }} />, name: 'Firebase' },
            { icon: <SiMongodb style={{ color: '#47A248' }} />, name: 'MongoDB' },
            { icon: <SiSqlite style={{ color: '#38bdf8' }} />, name: 'Room DB / SQLite' },
        ],
    },
    {
        label: 'Architecture & Patterns',
        color: 'var(--secondary)',
        skills: [
            { icon: <FaCubes style={{ color: '#c084fc' }} />, name: 'Clean Arch' },
            { icon: <FaProjectDiagram style={{ color: '#818cf8' }} />, name: 'MVVM' },
            { icon: <FaLayerGroup style={{ color: '#38bdf8' }} />, name: 'Jetpack Compose' },
            { icon: <FaCode style={{ color: '#34d399' }} />, name: 'Hilt / DI' },
            { icon: <FaGitAlt style={{ color: '#f97316' }} />, name: 'Git / GitHub' },
        ],
    },
];

/* ── Stagger variants ────────────────────────── */
const groupVariant = (delay = 0) => ({
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] } },
});

const chipContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.07 } },
};
const chipItem = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
    return (
        <section id="skills" className="section container">
            <SectionHeader
                title="Capability Matrix"
                subtitle="A precision-tuned stack for cross-platform mobile dominance."
                align="center"
            />

            <div className="bento-grid">
                {SKILL_GROUPS.map((group, gi) => (
                    <motion.div
                        key={group.label}
                        className="bento-card"
                        style={{ gridColumn: 'span 4' }}
                        variants={groupVariant(gi * 0.12)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: '-60px' }}
                        whileHover={{ y: -5 }}
                    >
                        <p className="skills-group-label" style={{ color: group.color }}>
                            {group.label}
                        </p>

                        <motion.div
                            className="skills-chip-container"
                            variants={chipContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {group.skills.map(({ icon, name }) => (
                                <motion.div
                                    key={name}
                                    className="skills-chip"
                                    variants={chipItem}
                                    whileHover={{ x: 6 }}
                                >
                                    <span className="skills-icon">{icon}</span>
                                    <span className="skills-name">{name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
