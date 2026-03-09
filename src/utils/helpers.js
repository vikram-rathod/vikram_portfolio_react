/**
 * Smoothly scrolls to an element by its ID.
 * @param {string} id - The element's ID.
 */
export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

/**
 * Truncates a string to a given length and appends ellipsis.
 * @param {string} str
 * @param {number} maxLength
 */
export const truncate = (str, maxLength = 100) =>
  str.length > maxLength ? str.slice(0, maxLength) + '…' : str;
