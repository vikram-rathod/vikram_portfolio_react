import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import './Hero.css';

/* ── Typewriter hook ─────────────────────────── */
const ROLES = ['Android Developer', 'Flutter Developer', 'Mobile Architect', 'Kotlin Engineer'];

function useTypewriter(words, speed = 80, pause = 1800) {
    const [display, setDisplay] = useState('');
    const [wordIdx, setWordIdx] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIdx % words.length];
        const timeout = setTimeout(() => {
            if (!deleting) {
                setDisplay(current.slice(0, display.length + 1));
                if (display.length + 1 === current.length) {
                    setTimeout(() => setDeleting(true), pause);
                }
            } else {
                setDisplay(current.slice(0, display.length - 1));
                if (display.length - 1 === 0) {
                    setDeleting(false);
                    setWordIdx(i => i + 1);
                }
            }
        }, deleting ? speed / 2 : speed);
        return () => clearTimeout(timeout);
    }, [display, deleting, wordIdx, words, speed, pause]);

    return display;
}

/* ── Floating particle ───────────────────────── */
function Particle({ x, size, duration, delay }) {
    return (
        <motion.span
            className="hero-particle"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -120, opacity: [0, 0.8, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: 'easeOut' }}
            style={{ left: `${x}%`, width: size, height: size }}
        />
    );
}

/* ── Animation variants for staggered entrance ─ */
const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.2 } },
};
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

/* ── Floating ring (decorative) ──────────────── */
function Ring({ size, opacity }) {
    return (
        <motion.div
            className="hero-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{ width: size, height: size, border: `1px solid rgba(56,189,248,${opacity})` }}
        />
    );
}

const PARTICLES = [
    { x: 15, size: '4px', duration: 4.5, delay: 0 },
    { x: 30, size: '3px', duration: 5.5, delay: 1.2 },
    { x: 50, size: '5px', duration: 4, delay: 0.6 },
    { x: 65, size: '3px', duration: 6, delay: 2 },
    { x: 80, size: '4px', duration: 5, delay: 0.3 },
    { x: 90, size: '3px', duration: 4.8, delay: 1.8 },
];

export default function Hero() {
    const role = useTypewriter(ROLES);

    return (
        <section className="hero container">
            {/* Decorative rings */}
            <Ring size="500px" opacity={0.04} />
            <Ring size="750px" opacity={0.03} />
            <Ring size="1000px" opacity={0.02} />

            {/* Floating particles */}
            {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}

            {/* Staggered content entrance */}
            <motion.div
                className="hero-container-content"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {/* Status badge */}
                <motion.div className="hero-badge-container" variants={fadeUp}>
                    <motion.span
                        className="hero-badge"
                        animate={{ boxShadow: ['0 0 0px rgba(56,189,248,0)', '0 0 18px rgba(56,189,248,0.4)', '0 0 0px rgba(56,189,248,0)'] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <motion.span
                            className="hero-badge-dot"
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        Open to Freelance &amp; Full-time
                    </motion.span>
                </motion.div>

                {/* Name */}
                <motion.h1 className="hero-h1" variants={fadeUp}>
                    <span className="gradient-text">Vikram Rathod</span>
                    <br />
                    <span style={{ opacity: 0.45 }}>Android &amp; Flutter</span>
                </motion.h1>

                {/* Typewriter role */}
                <motion.div className="hero-role-wrapper" variants={fadeUp}>
                    <span className="hero-role-text">
                        {role}
                    </span>
                    <span className="hero-cursor" />
                </motion.div>

                {/* Description */}
                <motion.p className="hero-p hero-description" variants={fadeUp}>
                    Mobile Application Developer at Comzent Technologies with 2+ years of experience
                    building production-grade Android &amp; Flutter apps using Kotlin, Jetpack Compose &amp; Clean Architecture.
                </motion.p>

                {/* CTAs */}
                <motion.div className="hero-cta-container" variants={fadeUp}>
                    <Button href="#projects" variant="primary" icon={<FaArrowRight />}>
                        Explore Work
                    </Button>
                    <Button
                        href="https://www.canva.com/design/DAG409WH0Gs/i0xLy23FwPL-pfRj_aYVIQ/view"
                        variant="outline"
                        target="_blank"
                        icon={<FaDownload />}
                    >
                        Review CV
                    </Button>
                </motion.div>
            </motion.div>

            {/* Blink keyframe (global/inline fallback if needed) */}
            <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
        </section>
    );
}
