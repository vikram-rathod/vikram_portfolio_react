import React from 'react';
import { motion } from 'framer-motion';
import { SiKotlin, SiAndroid, SiFlutter, SiDart, SiFirebase, SiSqlite } from 'react-icons/si';
import { FaJava, FaLayerGroup, FaNetworkWired, FaSyringe, FaProjectDiagram, FaCubes, FaMobileAlt } from 'react-icons/fa';

const SkillCategory = ({ title, skills, delay = 0 }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: delay
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <motion.div
            className="bento-card"
            style={{ gridColumn: 'span 4' }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>{title}</h3>
            <div className="tags">
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        className="skill-chip"
                        variants={itemVariants}
                        whileHover={{ y: -5, borderColor: 'var(--primary)', background: 'rgba(99, 102, 241, 0.05)' }}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            background: 'rgba(255,255,255,0.02)',
                            padding: '0.6rem 1rem',
                            borderRadius: '1rem',
                            border: '1px solid var(--border)',
                            width: '100%',
                            cursor: 'default'
                        }}
                    >
                        <span style={{ fontSize: '1.25rem' }}>{skill.icon}</span>
                        <span style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-primary)' }}>{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title gradient-text">Tech Intel</h2>
                    <p className="section-subtitle">A curated selection of the tools and frameworks I use to build world-class mobile software.</p>
                </motion.div>

                <div className="bento-grid">
                    <SkillCategory
                        title="Mobile & Core"
                        skills={[
                            { icon: <SiAndroid style={{ color: '#3DDC84' }} />, name: 'Android Native' },
                            { icon: <SiKotlin style={{ color: '#7F52FF' }} />, name: 'Kotlin' },
                            { icon: <FaJava style={{ color: '#ED8B00' }} />, name: 'Java' },
                            { icon: <SiFlutter style={{ color: '#02569B' }} />, name: 'Flutter' },
                            { icon: <SiDart style={{ color: '#0175C2' }} />, name: 'Dart' }
                        ]}
                    />

                    <SkillCategory
                        title="Architecture & Domain"
                        delay={0.2}
                        skills={[
                            { icon: <FaCubes />, name: 'Clean Architecture' },
                            { icon: <FaProjectDiagram />, name: 'MVVM Pattern' },
                            { icon: <FaSyringe />, name: 'Dependency Injection' },
                            { icon: <FaLayerGroup />, name: 'Jetpack Compose' },
                            { icon: <FaMobileAlt />, name: 'Modular Dev' }
                        ]}
                    />

                    <SkillCategory
                        title="Infrastructure & Backend"
                        delay={0.4}
                        skills={[
                            { icon: <SiFirebase style={{ color: '#FFCA28' }} />, name: 'Firebase / Auth' },
                            { icon: <SiSqlite style={{ color: '#07405E' }} />, name: 'Room / SQLite' },
                            { icon: <FaNetworkWired />, name: 'Retrofit / REST' },
                            { icon: <SiAndroid />, name: 'WorkManager' },
                            { icon: <SiAndroid />, name: 'Performance Auth' }
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;
