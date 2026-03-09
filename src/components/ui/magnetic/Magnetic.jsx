import React, { useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

export default function Magnetic({ children, strength = 0.5 }) {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Initial position
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Give it physics
    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();

        // Calculate center
        const middleX = left + width / 2;
        const middleY = top + height / 2;

        // Output distance from center
        const distanceX = (clientX - middleX) * strength;
        const distanceY = (clientY - middleY) * strength;

        x.set(distanceX);
        y.set(distanceY);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => setIsHovered(true);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                x: springX,
                y: springY,
                display: 'inline-flex',
                zIndex: isHovered ? 10 : 1 // bring to front when hovering
            }}
        >
            {children}
        </motion.div>
    );
}
