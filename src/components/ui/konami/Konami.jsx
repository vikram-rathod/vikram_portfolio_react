import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useAchievements, ACHIEVEMENTS } from '../../../context/AchievementContext';

const KONAMI_CODE = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

export default function Konami() {
    const [inputSeq, setInputSeq] = useState([]);
    const { unlock } = useAchievements();


    useEffect(() => {
        const handleKeyDown = (e) => {
            setInputSeq((prev) => {
                const newSeq = [...prev, e.key];
                if (newSeq.length > KONAMI_CODE.length) {
                    newSeq.shift(); // Keep bounded
                }

                // Check match
                const isMatch = newSeq.every((key, i) => key.toLowerCase() === KONAMI_CODE[i]?.toLowerCase());

                if (isMatch && newSeq.length === KONAMI_CODE.length) {
                    triggerConfetti();
                    unlock(ACHIEVEMENTS.KONAMI_CODE.id);
                    return []; // Reset after trigger
                }

                return newSeq;
            });
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const triggerConfetti = () => {
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#38bdf8', '#818cf8', '#c084fc']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#38bdf8', '#818cf8', '#c084fc']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();
    };

    return null; // Invisible component
}
