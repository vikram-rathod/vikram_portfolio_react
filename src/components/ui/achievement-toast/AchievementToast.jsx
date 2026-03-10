import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAchievements } from '../../context/AchievementContext';
import './AchievementToast.css';

const AchievementToast = () => {
    const { lastUnlocked, setLastUnlocked } = useAchievements();

    return (
        <AnimatePresence>
            {lastUnlocked && (
                <motion.div
                    className="achievement-toast"
                    initial={{ x: 400, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 400, opacity: 0 }}
                    onClick={() => setLastUnlocked(null)}
                >
                    <div className="achievement-icon">{lastUnlocked.icon}</div>
                    <div className="achievement-content">
                        <div className="achievement-label">Achievement Unlocked!</div>
                        <div className="achievement-title">{lastUnlocked.title}</div>
                        <div className="achievement-description">{lastUnlocked.description}</div>
                    </div>
                    <div className="achievement-progress" />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AchievementToast;
