import React from 'react';
import { SiKotlin, SiAndroid, SiFlutter, SiDart, SiFirebase, SiSqlite } from 'react-icons/si';
import { FaJava, FaLayerGroup, FaBoxOpen, FaNetworkWired, FaSyringe, FaProjectDiagram, FaCubes, FaDatabase, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SkillCard = ({ icon, name }) => (
    <motion.div
        className="skill-card"
        whileHover={{ y: -5, borderColor: 'var(--accent-primary)', backgroundColor: 'rgba(255,255,255,0.08)' }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
    >
        {icon}
        <span>{name}</span>
    </motion.div>
);

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Tech <span className="gradient-text">Stack</span></h2>

                <div className="skills-category">
                    <h3>Mobile Development</h3>
                    <div className="skills-grid">
                        <SkillCard icon={<SiAndroid style={{ color: '#3DDC84' }} />} name="Android" />
                        <SkillCard icon={<SiKotlin style={{ color: '#7F52FF' }} />} name="Kotlin" />
                        <SkillCard icon={<FaJava style={{ color: '#ED8B00' }} />} name="Java" />
                        <SkillCard icon={<SiFlutter style={{ color: '#02569B' }} />} name="Flutter" />
                        <SkillCard icon={<SiDart style={{ color: '#0175C2' }} />} name="Dart" />
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Frameworks & Libraries</h3>
                    <div className="skills-grid">
                        <SkillCard icon={<FaLayerGroup style={{ color: '#4285F4' }} />} name="Jetpack Compose" />
                        <SkillCard icon={<FaBoxOpen style={{ color: '#4285F4' }} />} name="Android Jetpack" />
                        <SkillCard icon={<FaNetworkWired style={{ color: '#48B983' }} />} name="Retrofit" />
                        <SkillCard icon={<FaSyringe style={{ color: '#4285F4' }} />} name="Hilt Dagger" />
                    </div>
                </div>

                <div className="skills-category">
                    <h3>Architecture & Backend</h3>
                    <div className="skills-grid">
                        <SkillCard icon={<FaProjectDiagram style={{ color: '#FF6B6B' }} />} name="MVVM" />
                        <SkillCard icon={<FaCubes style={{ color: '#4ECDC4' }} />} name="Clean Arch" />
                        <SkillCard icon={<SiFirebase style={{ color: '#FFCA28' }} />} name="Firebase" />
                        <SkillCard icon={<SiSqlite style={{ color: '#07405E' }} />} name="Room / SQLite" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
