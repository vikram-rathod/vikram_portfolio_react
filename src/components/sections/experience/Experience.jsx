import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../../ui/SectionHeader';
import { EXPERIENCE } from '../../../constants/data';
import './Experience.css';

/* ── Stagger variants ─────────────────────────── */
const listContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const listItem = {
    hidden: { opacity: 0, x: -16 },
    show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function Experience() {
    const work = EXPERIENCE.find(e => e.type === 'work');
    const edu = EXPERIENCE.find(e => e.type === 'education');

    return (
        <section id="experience" className="section container">
            <SectionHeader
                title="Professional Path"
                subtitle="A chronological record of production work, architectural leadership, and shipping to real users."
            />

            <div className="timeline-track">

                {/* ── Work role card ── */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative', marginBottom: '3.5rem' }}
                >
                    <motion.span className="experience-timeline-dot-wrapper">
                        <motion.span
                            className="experience-timeline-ping"
                            animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                        />
                    </motion.span>

                    <motion.div className="bento-card" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                        <div className="experience-card-header">
                            <div>
                                <h3 className="experience-role-title">{work.role}</h3>
                                <p className="experience-company">
                                    {work.company} — {work.location}
                                </p>
                            </div>
                            <motion.span
                                className="experience-date-badge"
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                {work.period}
                            </motion.span>
                        </div>

                        <motion.ul
                            className="experience-bullet-list"
                            variants={listContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {work.bullets.map((b, i) => (
                                <motion.li key={i} className="experience-bullet-item" variants={listItem}>
                                    <motion.span className="experience-bullet-dot" />
                                    {b}
                                </motion.li>
                            ))}
                        </motion.ul>

                        <div className="experience-tech-container">
                            {work.tech.map(tag => (
                                <span key={tag} className="experience-tech-badge">{tag}</span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* ── Education card ── */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ position: 'relative' }}
                >
                    <span className="experience-timeline-dot-wrapper secondary" />

                    <motion.div className="bento-card" whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 className="experience-role-title" style={{ fontSize: '1.4rem' }}>
                                    {edu.role}
                                </h3>
                                <p className="experience-company secondary" style={{ fontWeight: 600 }}>
                                    {edu.company} · {edu.location}
                                </p>
                            </div>
                            <span className="experience-date-badge secondary">
                                {edu.period} · {edu.cgpa} CGPA
                            </span>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
