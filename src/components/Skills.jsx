import React from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';
import { SiKotlin, SiAndroid, SiFlutter, SiDart, SiFirebase, SiSqlite } from 'react-icons/si';
import { FaJava, FaCubes, FaLayerGroup, FaProjectDiagram } from 'react-icons/fa';

const SkillItem = ({ icon, name }) => (
    <motion.div
        whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.05)' }}
        style={{
            padding: '1rem',
            borderRadius: 'var(--radius-sm)',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'rgba(255,255,255,0.02)',
            transition: 'var(--transition-base)'
        }}
    >
        <span style={{ fontSize: '1.5rem' }}>{icon}</span>
        <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>{name}</span>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="section container">
            <SectionHeader
                title="Capability Matrix"
                subtitle="A high-precision stack for engineering cross-platform dominance."
                align="center"
            />

            <div className="bento-grid">
                <Card style={{ gridColumn: 'span 6' }}>
                    <h3 style={{ marginBottom: '2rem', fontSize: '1.25rem', fontFamily: 'var(--font-display)', color: 'var(--accent)' }}>Native & Multi-platform Core</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                        <SkillItem icon={<SiAndroid style={{ color: '#3DDC84' }} />} name="Android" />
                        <SkillItem icon={<SiKotlin style={{ color: '#7F52FF' }} />} name="Kotlin" />
                        <SkillItem icon={<FaJava style={{ color: '#ED8B00' }} />} name="Java" />
                        <SkillItem icon={<SiFlutter style={{ color: '#02569B' }} />} name="Flutter" />
                        <SkillItem icon={<SiDart style={{ color: '#0175C2' }} />} name="Dart" />
                    </div>
                </Card>

                <Card style={{ gridColumn: 'span 6' }} delay={0.2}>
                    <h3 style={{ marginBottom: '2rem', fontSize: '1.25rem', fontFamily: 'var(--font-display)', color: 'var(--secondary)' }}>Architecture & Infrastructure</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                        <SkillItem icon={<FaCubes />} name="Clean Architecture" />
                        <SkillItem icon={<FaProjectDiagram />} name="MVVM" />
                        <SkillItem icon={<FaLayerGroup />} name="Jetpack Compose" />
                        <SkillItem icon={<SiFirebase style={{ color: '#FFCA28' }} />} name="Firebase" />
                        <SkillItem icon={<SiSqlite style={{ color: '#07405E' }} />} name="Room DB" />
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default Skills;
