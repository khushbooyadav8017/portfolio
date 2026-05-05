import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar glass-nav">
      <div className="container nav-container flex justify-between items-center">
        <Link to="/" className="brand flex items-center gap-1">
          <span className="brand-name">Khushboo Yadav</span>
        </Link>
        
        <ul className="nav-links flex gap-2">
          <li><Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link></li>
          <li><Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link></li>
          <li><Link to="/projects" className={`nav-link ${isActive('/projects')}`}>Projects</Link></li>
          <li><Link to="/skills" className={`nav-link ${isActive('/skills')}`}>Skills</Link></li>
          <li><Link to="/experience" className={`nav-link ${isActive('/experience')}`}>Experience</Link></li>
          <li><Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link></li>
        </ul>

        <div className="nav-actions">
          <Link to="/contact" className="btn btn-primary">Hire Me</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
