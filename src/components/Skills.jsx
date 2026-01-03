import React from 'react';
import { motion } from 'framer-motion';
import { SiKotlin, SiAndroid, SiFlutter, SiDart, SiFirebase, SiSqlite } from 'react-icons/si';
import { FaJava, FaLayerGroup, FaNetworkWired, FaSyringe, FaProjectDiagram } from 'react-icons/fa';

const SkillCard = ({ icon, name }) => (
    <motion.div
        className="skill-tag"
        whileHover={{ transform: "translateY(-4px)", borderColor: "var(--primary)" }}
    >
        {icon}
        <span>{name}</span>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="gradient-text">Core Tech Stack</h2>
                    <p>Specialized in building the next generation of mobile experiences.</p>
                </div>

                <div style={{ marginBottom: '4rem' }}>
                    <h3 style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--primary)' }}>Mobile & Languages</h3>
                    <div className="skills-list">
                        <SkillCard icon={<SiAndroid style={{ color: '#3DDC84' }} />} name="Android" />
                        <SkillCard icon={<SiKotlin style={{ color: '#7F52FF' }} />} name="Kotlin" />
                        <SkillCard icon={<FaJava style={{ color: '#ED8B00' }} />} name="Java" />
                        <SkillCard icon={<SiFlutter style={{ color: '#02569B' }} />} name="Flutter" />
                        <SkillCard icon={<SiDart style={{ color: '#0175C2' }} />} name="Dart" />
                    </div>
                </div>

                <div>
                    <h3 style={{ marginBottom: '2rem', fontSize: '1.2rem', color: 'var(--primary)' }}>Architecture & Infrastructure</h3>
                    <div className="skills-list">
                        <SkillCard icon={<SiFirebase style={{ color: '#FFCA28' }} />} name="Firebase" />
                        <SkillCard icon={<SiSqlite style={{ color: '#07405E' }} />} name="Room / SQL" />
                        <SkillCard icon={<FaLayerGroup />} name="Jetpack Compose" />
                        <SkillCard icon={<FaNetworkWired />} name="Retrofit" />
                        <SkillCard icon={<FaSyringe />} name="Hilt / Dagger" />
                        <SkillCard icon={<FaProjectDiagram />} name="MVVM / Clean Arch" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
