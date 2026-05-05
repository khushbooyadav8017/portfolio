import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTerminal, FiCode, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section container flex flex-col justify-start items-start" style={{ paddingTop: '80px' }}>
        <motion.div
          className="status-badge glass-panel flex items-center gap-1 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="status-dot"></span>
          <span className="status-text text-sm">AVAILABLE FOR HIRE</span>
        </motion.div>

        <motion.h1
          className="hero-title flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span>Hi, I’m <span className="gradient-text">Khushboo Yadav</span></span>
          <span style={{ fontSize: '0.85em', display: 'inline-block' }}>👩‍💻</span>
        </motion.h1>

        <motion.h2
          className="hero-subtitle mb-2 font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Software Developer | MERN Stack Developer
        </motion.h2>

        <motion.p
          className="hero-description mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          I build scalable, responsive, and user-friendly web applications using modern technologies.
        </motion.p>

        <motion.p
          className="hero-description mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Passionate Software Developer from Mumbai with experience in full-stack development, backend systems, and database management. I specialize in building efficient web applications and exploring AI-driven automation.
        </motion.p>

        <motion.div
          className="hero-actions flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <Link to="/projects" className="btn btn-primary">
            View Projects <FiArrowRight />
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact Me
          </Link>
          <a href="#" className="btn btn-secondary">
            Download Resume
          </a>
        </motion.div>
      </section>

      {/* Quick Highlights Section */}
      <section className="container mt-3 mb-3">
        <h2 className="mb-2 text-xl font-bold font-mono text-accent-cyan">Quick Highlights</h2>
        <div className="grid grid-cols-2 gap-2">
          <div className="glass-panel p-2 flex items-center gap-1"><span className="text-xl">💻</span> 1+ Year Experience in Software Development</div>
          <div className="glass-panel p-2 flex items-center gap-1"><span className="text-xl">🚀</span> Specialized in MERN Stack (React, Node.js, MongoDB)</div>
          <div className="glass-panel p-2 flex items-center gap-1"><span className="text-xl">🧠</span> Strong in Problem Solving & Backend Logic</div>
          <div className="glass-panel p-2 flex items-center gap-1"><span className="text-xl">🔗</span> API Development & Integration</div>
          <div className="glass-panel p-2 flex items-center gap-1"><span className="text-xl">📊</span> Database Management (MongoDB & MySQL)</div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="container mt-3 mb-3">
        <h2 className="mb-2 text-xl font-bold font-mono text-accent-cyan">Featured Projects</h2>
        <div className="grid grid-cols-2 gap-3 mb-2">
          <div className="glass-panel p-3">
            <h3 className="font-bold text-xl mb-1">Employee Management System</h3>
            <p className="text-muted">Full-stack MERN application with authentication, CRUD operations, and responsive UI.</p>
          </div>
          <div className="glass-panel p-3">
            <h3 className="font-bold text-xl mb-1">E-commerce Website</h3>
            <p className="text-muted">Modern online store with product management, cart system, and secure user authentication.</p>
          </div>
        </div>
        <Link to="/projects" className="btn btn-primary">View All Projects <FiArrowRight /></Link>
      </section>

      {/* Skills Snapshot */}
      <section className="container mt-3 mb-3">
        <h2 className="mb-2 text-xl font-bold font-mono text-accent-cyan">Skills Snapshot</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="glass-panel p-2">
            <h3 className="font-bold mb-1 flex items-center gap-1 text-accent-cyan"><FiLayers /> Frontend</h3>
            <p>React, HTML, CSS, Bootstrap</p>
          </div>
          <div className="glass-panel p-2">
            <h3 className="font-bold mb-1 flex items-center gap-1 text-accent-cyan"><FiServer /> Backend</h3>
            <p>Node.js, Express.js</p>
          </div>
          <div className="glass-panel p-2">
            <h3 className="font-bold mb-1 flex items-center gap-1 text-accent-cyan"><FiDatabase /> Database</h3>
            <p>MongoDB, MySQL</p>
          </div>
          <div className="glass-panel p-2">
            <h3 className="font-bold mb-1 flex items-center gap-1 text-accent-cyan"><FiTerminal /> Tools</h3>
            <p>Git, Postman, VS Code, Figma</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mt-3 mb-3 text-center glass-panel p-3">
        <h2 className="text-xl font-bold mb-1 gradient-text">Let’s Build Something Amazing Together 🚀</h2>
        <p className="mb-2 text-muted">I’m open to job opportunities, freelance work, and collaborations.</p>
        <div className="flex justify-center gap-2">
          <Link to="/contact" className="btn btn-primary">Hire Me</Link>
          <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
};

// Quick fix for missing icon
const FiServer = FiDatabase;

export default Home;
