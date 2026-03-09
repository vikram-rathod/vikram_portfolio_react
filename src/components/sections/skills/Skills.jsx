import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';
import { SKILL_GROUPS } from '../../../constants/data';
import {
    SiKotlin, SiAndroid, SiFlutter, SiDart, SiFirebase,
    SiSqlite, SiTypescript, SiSpringboot, SiNodedotjs, SiMongodb,
} from 'react-icons/si';
import { FaJava, FaCubes, FaLayerGroup, FaProjectDiagram, FaGitAlt, FaCode } from 'react-icons/fa';
import './Skills.css';

/* ── Icon registry: maps string key → component ── */
const ICON_MAP = {
    SiAndroid, SiKotlin, SiFlutter, SiDart, SiFirebase,
    SiSqlite, SiTypescript, SiSpringboot, SiNodedotjs, SiMongodb,
    FaJava, FaCubes, FaLayerGroup, FaProjectDiagram, FaGitAlt, FaCode,
};

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
                {SKILL_GROUPS.map((group, gi) => {
                    const Icon = ICON_MAP[group.skills[0]?.icon]; // used for display only
                    return (
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
                                {group.skills.map(({ icon, name, color }) => {
                                    const SkillIcon = ICON_MAP[icon];
                                    return (
                                        <motion.div
                                            key={name}
                                            className="skills-chip"
                                            variants={chipItem}
                                            whileHover={{ x: 6 }}
                                        >
                                            <span className="skills-icon">
                                                {SkillIcon && <SkillIcon style={{ color }} />}
                                            </span>
                                            <span className="skills-name">{name}</span>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
