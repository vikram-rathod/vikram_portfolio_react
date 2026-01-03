import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiAndroid } from 'react-icons/si';

const Hero = () => {
    return (
        <header className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">👋 Dedicated Mobile Solutions Architect</div>
                    <h1>Crafting <span className="gradient-text">Premium</span><br /> Digital Experiences</h1>
                    <div className="typing-container">
                        <span>
                            <Typewriter
                                words={['Senior Android Developer', 'Expert Flutter Developer', 'Architecture Specialist', 'Product Consultant']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={80}
                                deleteSpeed={40}
                                delaySpeed={1500}
                            />
                        </span>
                    </div>
                    <p className="hero-description">
                        Results-driven Mobile Developer with <strong>2+ years of professional experience</strong> in building scalable, enterprise-grade applications. Expert in Kotlin, Jetpack Compose, and Flutter, with a passion for clean architecture and high-performance user interfaces.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn-primary">Explore My Work</a>
                        <a href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view" target="_blank" className="btn-secondary">
                            Download Resume
                        </a>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/VikramRathodk" target="_blank" aria-label="GitHub"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/vikram-rathod-438442289/" target="_blank" aria-label="LinkedIn"><FaLinkedinIn /></a>
                        <a href="mailto:rathodvikramk382@gmail.com" aria-label="Email"><FaEnvelope /></a>
                        <a href="https://vikramrathod.dev" target="_blank" aria-label="Website"><FaGlobe /></a>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="code-card">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="code-content">
                            <pre>
                                <span className="keyword">@Inject</span>
                                <span className="keyword">class</span> <span className="class-name">MobileArchitect</span>(
                                <span className="keyword">private val</span> strategy: <span className="class-name">ScaleStrategy</span>
                                ) {'{'}
                                <span className="keyword">val</span> experience = <span className="string">"2+ Years"</span>
                                <span className="keyword">fun</span> <span className="function">deployEnterpriseSolution</span>() {'{'}
                                <span className="comment">// Optimizing performance...</span>
                                strategy.<span className="function">implementCleanArchitecture</span>()
                                <span className="keyword">return</span> <span className="keyword">true</span>
                                {'}'}
                                {'}'}
                            </pre>
                        </div>
                    </div>
                    <div className="floating-icon icon-android"><SiAndroid /></div>
                    <div className="floating-icon icon-flutter"><SiFlutter /></div>
                    <div className="floating-icon icon-kotlin"><SiKotlin /></div>
                </div>
            </div>
        </header>
    );
};

export default Hero;
