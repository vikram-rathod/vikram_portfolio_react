import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaGithub, FaLinkedinIn, FaEnvelope, FaGlobe } from 'react-icons/fa';
import { SiKotlin, SiFlutter, SiAndroid } from 'react-icons/si';

const Hero = () => {
    return (
        <header className="hero">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">👋 Hi, I'm Vikram Rathod</div>
                    <h1>Building <span className="gradient-text">World-Class</span><br /> Mobile Experiences</h1>
                    <div className="typing-container">
                        <span>
                            <Typewriter
                                words={['Android Developer', 'Flutter Developer', 'Open Source Enthusiast', 'Clean Code Advocate']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </div>
                    <p className="hero-description">
                        Mobile Application Developer with 1.10+ years of hands-on experience crafting high-quality enterprise Android applications using Kotlin, Jetpack Compose, and modern architecture patterns.
                    </p>
                    <div className="hero-btns">
                        <a href="#projects" className="btn-primary">View Projects</a>
                        <a href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view" target="_blank" className="btn-secondary">
                            Resume
                        </a>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/VikramRathodk" target="_blank"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/vikram-rathod-438442289/" target="_blank"><FaLinkedinIn /></a>
                        <a href="mailto:rathodvikramk382@gmail.com"><FaEnvelope /></a>
                        <a href="https://vikramrathod.dev" target="_blank"><FaGlobe /></a>
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
                                <span className="keyword">class</span> <span className="class-name">Developer</span> {'{'}
                                <span className="keyword">val</span> name = <span className="string">"Vikram Rathod"</span>
                                <span className="keyword">val</span> skills = listOf(
                                <span className="string">"Kotlin"</span>,
                                <span className="string">"Flutter"</span>,
                                <span className="string">"Jetpack Compose"</span>
                                )

                                <span className="keyword">fun</span> <span className="function">buildAwesomeApps</span>() {'{'}
                                <span className="comment">// Creating magic...</span>
                                return <span className="keyword">true</span>
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
