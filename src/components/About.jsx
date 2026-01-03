import React from 'react';
import Card from './ui/Card';
import SectionHeader from './ui/SectionHeader';

const About = () => {
    return (
        <section id="about" className="section container">
            <SectionHeader
                title="Strategy & Vision"
                subtitle="Engineering the future of mobile through disciplined architecture and user-obsessed design."
            />

            <div className="bento-grid">
                <Card className="col-span-8" style={{ gridColumn: 'span 8', gridRow: 'span 2' }}>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>The Technical Core</h3>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                        Based in Mumbai and architecting at <strong>Comzent Technologies</strong>, I bridge the gap between complex enterprise requirements and fluid human interaction.
                    </p>
                    <p style={{ color: 'var(--text-dim)', fontSize: '1.125rem' }}>
                        My focus lies in building highly resilient, modular applications using <strong>Jetpack Compose</strong> and <strong>Flutter Multi-platform</strong>. I advocate for 100% test coverage, SOLID principles, and Domain-Driven Design.
                    </p>
                </Card>

                <Card style={{ gridColumn: 'span 4' }} delay={0.1}>
                    <h4 style={{ color: 'var(--accent)', fontSize: '3.5rem', fontWeight: '800', lineHeight: 1 }}>2+</h4>
                    <span style={{ fontWeight: '600', display: 'block', marginTop: '0.5rem' }}>Years Experience</span>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '1rem' }}>Focused on scaling high-impact mobile solutions.</p>
                </Card>

                <Card style={{ gridColumn: 'span 4' }} delay={0.2}>
                    <h4 style={{ color: 'var(--secondary)', fontSize: '3.5rem', fontWeight: '800', lineHeight: 1 }}>25+</h4>
                    <span style={{ fontWeight: '600', display: 'block', marginTop: '0.5rem' }}>Systems Launched</span>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: '1rem' }}>Seamlessly integrated and deployed across stores.</p>
                </Card>

                <Card style={{ gridColumn: 'span 12' }} delay={0.3}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>Education</h3>
                            <p style={{ color: 'var(--text-strong)', fontWeight: '600' }}>Master of Computer Applications (MCA)</p>
                            <p style={{ color: 'var(--text-dim)' }}>Sardar Patel Institute of Technology</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ color: 'var(--accent)', fontSize: '2rem', fontWeight: '800' }}>8.0 CGPA</p>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Class of 2024</p>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default About;
