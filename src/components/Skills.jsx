import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './ui/SectionHeader';
import { SiKotlin, SiAndroid, SiFlutter, SiDart, SiFirebase, SiSqlite } from 'react-icons/si';
import { FaJava, FaCubes, FaLayerGroup, FaProjectDiagram, FaGitAlt, FaCode } from 'react-icons/fa';

const SKILL_GROUPS = [
    {
        label: 'Mobile Development',
        color: 'var(--accent)',
        skills: [
            { icon: <SiAndroid style={{ color: '#3DDC84' }} />, name: 'Android' },
            { icon: <SiKotlin style={{ color: '#7F52FF' }} />, name: 'Kotlin' },
            { icon: <FaJava style={{ color: '#ED8B00' }} />, name: 'Java' },
            { icon: <SiFlutter style={{ color: '#54C5F8' }} />, name: 'Flutter' },
            { icon: <SiDart style={{ color: '#0175C2' }} />, name: 'Dart' },
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
    {
        label: 'Backend & Data',
        color: 'var(--primary)',
        skills: [
            { icon: <SiFirebase style={{ color: '#FFCA28' }} />, name: 'Firebase' },
            { icon: <SiSqlite style={{ color: '#38bdf8' }} />, name: 'Room DB' },
            { icon: <SiSqlite style={{ color: '#94a3b8' }} />, name: 'SQLite' },
            { icon: <FaCode style={{ color: '#818cf8' }} />, name: 'REST APIs' },
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
                        {/* Group label */}
                        <p style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            letterSpacing: '0.12em',
                            color: group.color,
                            marginBottom: '1.5rem',
                        }}>
                            {group.label}
                        </p>

                        {/* Staggered chip grid */}
                        <motion.div
                            variants={chipContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
                        >
                            {group.skills.map(({ icon, name }) => (
                                <motion.div
                                    key={name}
                                    variants={chipItem}
                                    whileHover={{
                                        x: 6,
                                        background: 'rgba(255,255,255,0.05)',
                                        transition: { duration: 0.2 },
                                    }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.85rem',
                                        padding: '0.7rem 1rem',
                                        borderRadius: 'var(--radius-sm)',
                                        border: '1px solid var(--border)',
                                        background: 'rgba(255,255,255,0.02)',
                                        cursor: 'default',
                                    }}
                                >
                                    <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{icon}</span>
                                    <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>{name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
