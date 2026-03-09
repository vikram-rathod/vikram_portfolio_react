import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <p>&copy; 2026 Vikram Rathod. Crafted with <FaHeart style={{ color: '#FF6B6B', display: 'inline' }} /> and React.</p>
            </div>
        </footer>
    );
};

export default Footer;
