import React from 'react';
import { motion } from 'framer-motion';
import { GitHubCalendar } from 'react-github-calendar';
import SectionHeader from '../../ui/SectionHeader';
import { GITHUB_USERNAME } from '../../../constants/data';
import { useTheme } from '../../../hooks/useTheme';
import { FaGithub } from 'react-icons/fa';
import './Github.css';

export default function Github() {
    const { theme } = useTheme();

    // Mapping custom colors for the graph based on the dark/light theme
    const themeObj = {
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'], // GitHub standard light
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'], // GitHub standard dark
    };

    return (
        <section id="github" className="section container">
            <SectionHeader
                title="Open Source Activity"
                subtitle="Consistency is key. Here's a real-time look at my code contributions."
                align="center"
            />

            <motion.div
                className="github-container bento-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ borderColor: 'rgba(56, 189, 248, 0.22)' }}
            >
                <div className="github-header">
                    <FaGithub className="github-icon" />
                    <h3 className="github-username">@{GITHUB_USERNAME}</h3>
                    <a
                        href={`https://github.com/${GITHUB_USERNAME}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                    >
                        View Profile
                    </a>
                </div>

                <div className="github-graph-wrapper">
                    <GitHubCalendar
                        username={GITHUB_USERNAME}
                        blockSize={14}
                        blockMargin={6}
                        fontSize={14}
                        theme={themeObj}
                        colorScheme={theme === 'dark' ? 'dark' : 'light'}
                    />
                </div>
            </motion.div>
        </section>
    );
}
