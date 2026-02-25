import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { FaArrowRight, FaDownload } from 'react-icons/fa';

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
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: -120, opacity: [0, 0.8, 0] }}
            transition={{ duration, delay, repeat: Infinity, ease: 'easeOut' }}
            style={{
                position: 'absolute',
                bottom: '10%',
                left: `${x}%`,
                width: size,
                height: size,
                borderRadius: '50%',
                background: 'var(--accent)',
                pointerEvents: 'none',
            }}
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
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            style={{
                position: 'absolute',
                width: size,
                height: size,
                borderRadius: '50%',
                border: `1px solid rgba(56,189,248,${opacity})`,
                pointerEvents: 'none',
            }}
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
                variants={container}
                initial="hidden"
                animate="show"
                style={{ position: 'relative', zIndex: 1, width: '100%' }}
            >
                {/* Status badge */}
                <motion.div variants={fadeUp} style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <motion.span
                        animate={{ boxShadow: ['0 0 0px rgba(56,189,248,0)', '0 0 18px rgba(56,189,248,0.4)', '0 0 0px rgba(56,189,248,0)'] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{
                            background: 'rgba(56,189,248,0.1)',
                            border: '1px solid rgba(56,189,248,0.25)',
                            borderRadius: '9999px',
                            padding: '0.45rem 1.1rem',
                            color: 'var(--accent)',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.6rem',
                        }}
                    >
                        <motion.span
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            style={{ width: 7, height: 7, background: '#4ade80', borderRadius: '50%', display: 'inline-block' }}
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
                <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem', minHeight: '2.2rem' }}>
                    <span style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.2rem, 3vw, 1.75rem)',
                        color: 'var(--accent)',
                        fontWeight: 600,
                    }}>
                        {role}
                    </span>
                    <span style={{
                        display: 'inline-block',
                        width: 2,
                        height: '1.4em',
                        background: 'var(--accent)',
                        borderRadius: 2,
                        marginLeft: 4,
                        verticalAlign: 'middle',
                        animation: 'blink 1s step-end infinite',
                    }} />
                </motion.div>

                {/* Description */}
                <motion.p className="hero-p" variants={fadeUp} style={{ margin: '0 auto 3.5rem' }}>
                    Mobile Application Developer at Comzent Technologies with 2+ years of experience
                    building production-grade Android &amp; Flutter apps using Kotlin, Jetpack Compose &amp; Clean Architecture.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    variants={fadeUp}
                    style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}
                >
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

            {/* Blink keyframe — injected once */}
            <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
        </section>
    );
}
