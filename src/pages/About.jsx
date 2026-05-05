import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiUser } from 'react-icons/fi';
import './About.css';

const About = () => {
  return (
    <div className="about-container container section">
      <motion.h2
        className="section-title gradient-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-muted">01. </span>About Me
      </motion.h2>

      <div className="about-content grid grid-cols-2 gap-3 mb-3">
        <motion.div
          className="about-text glass-panel p-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="mb-2 text-xl font-bold flex items-center gap-1"><FiUser className="text-accent-cyan" /> Profile</h3>
          <p className="mb-1 text-muted">
            I am a results-driven Software Developer from Mumbai with a strong foundation in programming, data structures, backend development, database management, and object-oriented design.
          </p>
          <p className="mb-2 text-muted">
            I have experience developing scalable web applications, integrating frontend with backend APIs, debugging, testing, and optimizing applications for better performance.
          </p>

          <div className="tech-stack mt-2">
            <h4 className="mb-1 text-accent-cyan font-mono">Current Focus:</h4>
            <div className="flex gap-1 flex-wrap">
              {['MERN Stack', 'Backend Systems', 'AI Automation Learner'].map((tech) => (
                <span key={tech} className="chip">{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="education-panel glass-panel p-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="mb-2 text-xl font-bold flex items-center gap-1"><FiBookOpen className="text-accent-cyan" /> Education</h3>
          
          <div className="education-item mb-2">
            <h4 className="font-bold text-lg">B.Sc. Information Technology</h4>
            <p className="text-accent-cyan font-mono text-sm mb-1">Aug 2021 – May 2024</p>
            <p className="text-muted">University of Mumbai</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
