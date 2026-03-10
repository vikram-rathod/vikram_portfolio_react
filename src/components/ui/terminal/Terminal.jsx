import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaRegSquare, FaMinus } from 'react-icons/fa';
import { SKILL_GROUPS, PROJECTS, EXPERIENCE, SOCIAL_LINKS } from '../../../constants/data';
import { useAchievements, ACHIEVEMENTS } from '../../../context/AchievementContext';
import './Terminal.css';


const WELCOME_MSG = [
    "Welcome to Vikram OS v1.0.0",
    "Type 'help' to see a list of available commands.",
    "------------------------------------------------"
];

export default function Terminal({ isOpen, onClose }) {
    const { unlock } = useAchievements();
    const [history, setHistory] = useState([]);

    const [input, setInput] = useState('');
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    // Auto focus and scroll
    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            setHistory([{ type: 'output', text: WELCOME_MSG.join('\n') }]);
        }
    }, [isOpen]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmd) => {
        const trimmed = cmd.trim().toLowerCase();
        let output = '';

        switch (trimmed) {
            case 'help':
                output = `Available commands:
  whoami        - Display basic info
  skills        - List top tech stack
  projects      - Show featured work
  contact       - Get social links
  theme cyber   - Activate high-contrast mode
  clear         - Clear terminal
  exit          - Close terminal`;

                break;
            case 'whoami':
                output = "Vikram Rathod\nMobile Application Developer building scalable flutter & android apps.";
                break;
            case 'skills':
                output = SKILL_GROUPS.map(g => `${g.label}:\n  ${g.skills.map(s => s.name).join(', ')}`).join('\n\n');
                break;
            case 'projects':
                output = PROJECTS.map(p => `- ${p.title} (${p.tags.join(', ')})\n  ${p.github}`).join('\n\n');
                break;
            case 'contact':
                output = `Email: ${SOCIAL_LINKS.email}\nGitHub: ${SOCIAL_LINKS.github}\nLinkedIn: ${SOCIAL_LINKS.linkedin}`;
                break;
            case 'sudo':
            case 'sudo rm -rf /':
                output = "Permission denied. Nice try! 😉";
                break;
            case 'theme cyber':
                document.documentElement.setAttribute('data-theme', 'cyber');
                unlock(ACHIEVEMENTS.THEME_CYBER.id);
                output = "Cyberpunk theme activated. [Override Successful]";
                break;
            case 'matrix':
                output = "Initializing Matrix protocol...\nWake up, Neo...\n[The Matrix has you]";
                // Just a fun text for now, could add full effect later
                break;

            case 'clear':
                setHistory([{ type: 'output', text: WELCOME_MSG.join('\n') }]);
                setInput('');
                return;
            case 'exit':
                onClose();
                setInput('');
                return;
            case '':
                output = '';
                break;
            default:
                output = `Command not found: ${trimmed}. Type 'help' for available commands.`;
        }

        setHistory(prev => [
            ...prev,
            { type: 'input', text: `vikram@portfolio:~$ ${cmd}` },
            ...(output ? [{ type: 'output', text: output }] : [])
        ]);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleCommand(input);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="terminal-overlay">
                    <Draggable handle=".terminal-header" bounds="parent" defaultPosition={{ x: 0, y: 0 }}>
                        <motion.div
                            className="terminal-window"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        >
                            {/* Window header */}
                            <div className="terminal-header">
                                <div className="terminal-actions">
                                    <button className="term-btn close" onClick={onClose}><FaTimes size={8} /></button>
                                    <button className="term-btn min"><FaMinus size={8} /></button>
                                    <button className="term-btn max"><FaRegSquare size={8} /></button>
                                </div>
                                <div className="terminal-title">vikram@portfolio: ~</div>
                            </div>

                            {/* Window body */}
                            <div className="terminal-body" onClick={() => inputRef.current?.focus()}>
                                {history.map((entry, i) => (
                                    <div key={i} className={`term-line ${entry.type}`}>
                                        {entry.text}
                                    </div>
                                ))}
                                <div className="term-input-line">
                                    <span className="term-prompt">vikram@portfolio:~$</span>
                                    <input
                                        type="text"
                                        ref={inputRef}
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="term-input"
                                        autoFocus
                                        spellCheck="false"
                                        autoComplete="off"
                                    />
                                </div>
                                <div ref={bottomRef} />
                            </div>
                        </motion.div>
                    </Draggable>
                </div>
            )}
        </AnimatePresence>
    );
}
