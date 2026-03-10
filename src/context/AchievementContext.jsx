import React, { createContext, useContext, useState, useEffect } from 'react';

const AchievementContext = createContext(null);

export const ACHIEVEMENTS = {
    TERMINAL_OPEN: {
        id: 'terminal_open',
        title: 'The Hacker',
        description: 'Accessed the Vikram OS terminal',
        icon: '💻'
    },
    KONAMI_CODE: {
        id: 'konami_code',
        title: 'Old School',
        description: 'Triggered the legendary Konami code',
        icon: '🎮'
    },
    THEME_CYBER: {
        id: 'theme_cyber',
        title: 'Cyberpunk',
        description: 'Activated the Cyberpunk theme override',
        icon: '🌆'
    },
    RESUME_VIEW: {
        id: 'resume_view',
        title: 'Career Minded',
        description: 'Viewed the professional resume',
        icon: '📄'
    }
};

export const AchievementProvider = ({ children }) => {
    const [unlocked, setUnlocked] = useState(() => {
        const saved = localStorage.getItem('achievements');
        return saved ? JSON.parse(saved) : [];
    });
    const [lastUnlocked, setLastUnlocked] = useState(null);

    useEffect(() => {
        localStorage.setItem('achievements', JSON.stringify(unlocked));
    }, [unlocked]);

    const unlock = (achievementId) => {
        if (!unlocked.includes(achievementId)) {
            setUnlocked(prev => [...prev, achievementId]);
            const achievement = Object.values(ACHIEVEMENTS).find(a => a.id === achievementId);
            setLastUnlocked(achievement);

            // Clear notification after 5 seconds
            setTimeout(() => setLastUnlocked(null), 5000);
        }
    };

    return (
        <AchievementContext.Provider value={{ unlocked, unlock, lastUnlocked, setLastUnlocked }}>
            {children}
        </AchievementContext.Provider>
    );
};

export const useAchievements = () => {
    const context = useContext(AchievementContext);
    if (!context) throw new Error('useAchievements must be used within AchievementProvider');
    return context;
};
