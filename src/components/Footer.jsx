import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer glass-panel mt-3">
      <div className="container footer-container flex flex-col items-center gap-1 p-3">
        <div className="social-links flex gap-2 mb-1">
          <a href="mailto:khushbooyadav8017@gmail.com" className="social-icon" aria-label="Email"><FiMail className="text-xl hover:text-accent-cyan" /></a>
          <a href="https://linkedin.com/in/khushboo-yadav-5522b5238" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn"><FiLinkedin className="text-xl hover:text-accent-cyan" /></a>
          <a href="#" className="social-icon" aria-label="GitHub"><FiGithub className="text-xl hover:text-accent-cyan" /></a>
        </div>
        <p className="footer-text font-mono text-muted text-sm text-center">
          &copy; 2026 Khushboo Yadav. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
