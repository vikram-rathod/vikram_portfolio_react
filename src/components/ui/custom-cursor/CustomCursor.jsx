import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);

    // Exact positioning
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Spring physics configuration for the smooth trailing ring
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    // We hide the cursor on mobile/touch interfaces via CSS
    return (
        <div className="custom-cursor-wrapper" style={{ opacity: isVisible ? 1 : 0 }}>
            {/* The exact dot */}
            <motion.div
                className="cursor-dot"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />
            {/* The trailing spring circle */}
            <motion.div
                className="cursor-ring"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            />
        </div>
    );
}
