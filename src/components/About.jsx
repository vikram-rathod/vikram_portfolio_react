import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section" style={{ borderTop: '1px solid var(--border)' }}>
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title gradient-text">About Me</h2>
                    <p className="section-subtitle">A Senior Solutions Architect dedicated to pushing the boundaries of mobile technology.</p>
                </div>

                <div className="bento-grid">
                    {/* Bio Card */}
                    <div className="bento-card" style={{ gridColumn: 'span 8', gridRow: 'span 2' }}>
                        <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Strategic Vision</h3>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: '1.7' }}>
                            Currently based in Mumbai and architecting at <strong>Comzent Technologies</strong>, I bridge the gap between complex engineering and human-centric design. With a focus on <strong>Kotlin, Jetpack Compose, and Flutter</strong>, I build ecosystems that are not just applications, but robust business assets.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem', fontSize: '1.125rem', lineHeight: '1.7' }}>
                            My engineering philosophy is simple: write code that is as maintainable as it is performant. I strictly adhere to <strong>Clean Architecture</strong> and <strong>SOLID principles</strong> to ensure every project clears the highest technical hurdles.
                        </p>
                    </div>

                    {/* Stats Card */}
                    <div className="bento-card" style={{ gridColumn: 'span 4' }}>
                        <h3 style={{ color: 'var(--primary)', fontSize: '3rem', marginBottom: '0.25rem' }}>2+</h3>
                        <p style={{ fontWeight: '600', color: 'var(--text-primary)' }}>Years of Mastery</p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.5rem' }}>Deep specialization in Android & Flutter architecture.</p>
                    </div>

                    {/* Strengths Card */}
                    <div className="bento-card" style={{ gridColumn: 'span 4' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.25rem' }}>Core Strengths</h3>
                        <div className="tags">
                            <span className="tag-chip">System Architecture</span>
                            <span className="tag-chip">Clean Code</span>
                            <span className="tag-chip">MVVM</span>
                            <span className="tag-chip">API Orchestration</span>
                            <span className="tag-chip">Leadership</span>
                            <span className="tag-chip">Unit Testing</span>
                        </div>
                    </div>

                    {/* Education Card (Full Width on mobile, span on desktop) */}
                    <div className="bento-card" style={{ gridColumn: 'span 12' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Academic Foundation</h3>
                                <p style={{ color: 'var(--text-primary)', fontWeight: '600' }}>Master of Computer Applications (MCA)</p>
                                <p style={{ color: 'var(--text-secondary)' }}>Sardar Patel Institute of Technology</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <p style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.5rem' }}>8.0 CGPA</p>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Class of 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
