import { useState, useEffect } from 'react';

/**
 * Tracks which section is currently in view.
 * @param {string[]} sectionIds - Array of section element IDs.
 * @param {number} offset - Scroll offset in px.
 */
export const useScrollspy = (sectionIds = [], offset = 0) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: `0px 0px -${offset}% 0px` }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
};
