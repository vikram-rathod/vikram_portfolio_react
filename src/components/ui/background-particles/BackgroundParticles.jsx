import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

/* Deterministic pseudo-random so particles are stable across renders */
function makeRand(seed) {
    let s = seed;
    return () => {
        s = (s * 9301 + 49297) % 233280;
        return s / 233280;
    };
}

const COLORS = ['#38bdf8', '#818cf8', '#c084fc', '#34d399', '#fb923c'];

export default function BackgroundParticles({ count = 40 }) {
    const particles = useMemo(() => {
        const rand = makeRand(7);
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            x: rand() * 100,
            y: rand() * 100,
            size: rand() * 2.5 + 0.8,
            color: COLORS[Math.floor(rand() * COLORS.length)],
            duration: rand() * 18 + 12,
            delay: rand() * 12,
            floatY: rand() * 60 - 30,
            floatX: rand() * 30 - 15,
            opacity: rand() * 0.25 + 0.04,
        }));
    }, [count]);

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                pointerEvents: 'none',
                zIndex: 0,
                overflow: 'hidden',
            }}
            aria-hidden="true"
        >
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    style={{
                        position: 'absolute',
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                        borderRadius: '50%',
                        background: p.color,
                        boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
                    }}
                    animate={{
                        y: [0, p.floatY, 0],
                        x: [0, p.floatX, 0],
                        opacity: [p.opacity, p.opacity * 3, p.opacity],
                        scale: [1, 1.4, 1],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
}
