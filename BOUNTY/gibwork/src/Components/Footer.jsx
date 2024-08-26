import React from 'react';
import { motion } from 'framer-motion';
import './Footer.css'; 
function Footer() {
    return (
        <motion.footer
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="footer"
        >
            <div className="footer-content">
                <p>&copy; 2024 My Website. All Rights Reserved.</p>
                <div className="social-icons">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div> 
            </div>
        </motion.footer>
    );
}

export default Footer;
