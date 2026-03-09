import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Highlight, themes } from 'prism-react-renderer';
import { FaTimes, FaCode, FaRegCopy, FaCheck } from 'react-icons/fa';
import { VscJson, VscMarkdown, VscRecordKeys } from 'react-icons/vsc';

// Re-using our constants for the code view
import * as DATA from '../../../constants/data';
import './CodeView.css';

const TABS = [
    { id: 'data.json', icon: <VscJson />, lang: 'json' },
    { id: 'README.md', icon: <VscMarkdown />, lang: 'markdown' },
];

export default function CodeView({ isOpen, onClose }) {
    const [activeTab, setActiveTab] = useState(TABS[0].id);
    const [copied, setCopied] = useState(false);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const getCodeString = () => {
        if (activeTab === 'data.json') {
            return JSON.stringify(DATA, null, 2);
        }
        if (activeTab === 'README.md') {
            return `# Vikram Rathod - Mobile Application Developer

> Building scalable Android & Flutter apps with clean architecture.

## Stack
- Kotlin & Jetpack Compose
- Flutter & Dart
- Firebase & Node.js
- Clean Architecture & MVVM

*Run \`npm start\` to launch my interactive portfolio!*
`;
        }
        return '';
    };

    const currentTab = TABS.find(t => t.id === activeTab);
    const codeString = getCodeString();

    const handleCopy = () => {
        navigator.clipboard.writeText(codeString);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="cv-overlay">
                    <motion.div
                        className="cv-modal"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, type: 'spring', bounce: 0.4 }}
                    >
                        {/* VS Code macOS Header */}
                        <div className="cv-header">
                            <div className="cv-mac-buttons">
                                <span className="cv-mac-btn cv-close" onClick={onClose} />
                                <span className="cv-mac-btn cv-min" />
                                <span className="cv-mac-btn cv-max" />
                            </div>
                            <div className="cv-title">vikram_portfolio — VS Code</div>
                        </div>

                        {/* Editor Layout */}
                        <div className="cv-layout">
                            {/* Sidebar Explorer */}
                            <div className="cv-sidebar">
                                <span className="cv-sidebar-title">EXPLORER</span>
                                <div className="cv-file-tree">
                                    <span className="cv-folder"><VscRecordKeys style={{ marginRight: '6px' }} /> PORTFOLIO_DATA</span>
                                    {TABS.map(tab => (
                                        <div
                                            key={tab.id}
                                            className={`cv-file ${activeTab === tab.id ? 'active' : ''}`}
                                            onClick={() => setActiveTab(tab.id)}
                                        >
                                            {tab.icon} <span>{tab.id}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Editor */}
                            <div className="cv-editor-area">
                                {/* Editor Tabs */}
                                <div className="cv-tabs">
                                    {TABS.map(tab => (
                                        <div
                                            key={tab.id}
                                            className={`cv-tab ${activeTab === tab.id ? 'active' : ''}`}
                                            onClick={() => setActiveTab(tab.id)}
                                        >
                                            {tab.icon} {tab.id}
                                            {activeTab === tab.id && <span className="cv-tab-close"><FaTimes /></span>}
                                        </div>
                                    ))}
                                    <div style={{ flexGrow: 1 }} />
                                    <button className="cv-copy-btn" onClick={handleCopy} title="Copy code">
                                        {copied ? <FaCheck color="#a855f7" /> : <FaRegCopy />}
                                        {copied ? 'Copied!' : 'Copy'}
                                    </button>
                                </div>

                                {/* Code Editor Content */}
                                <div className="cv-editor-content">
                                    <Highlight
                                        theme={themes.vsDark}
                                        code={codeString}
                                        language={currentTab.lang}
                                    >
                                        {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                            <pre className={className} style={{ ...style, margin: 0, padding: '1.5rem', background: 'transparent' }}>
                                                {tokens.map((line, i) => (
                                                    <div key={i} {...getLineProps({ line })} className="cv-line">
                                                        <span className="cv-line-number">{i + 1}</span>
                                                        <span className="cv-line-content">
                                                            {line.map((token, key) => (
                                                                <span key={key} {...getTokenProps({ token })} />
                                                            ))}
                                                        </span>
                                                    </div>
                                                ))}
                                            </pre>
                                        )}
                                    </Highlight>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
