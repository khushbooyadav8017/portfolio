import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "Vantage Knowledge Academy Ltd",
      date: "Oct 2024 - Oct 2025",
      description: [
        "Worked on web-based software applications.",
        "Implemented backend business logic and database management.",
        "Handled CRUD operations and API integration.",
        "Conducted testing, debugging, and optimization.",
        "Participated in sprint planning and team collaboration."
      ]
    }
  ];

  return (
    <div className="experience-container container section">
      <motion.h2 
        className="section-title gradient-text mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-muted">05. </span>Experience
      </motion.h2>

      <div className="timeline-container relative">
        <div className="timeline-line"></div>
        
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="timeline-item flex gap-2 mb-3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="timeline-dot"></div>
            
            <div className="timeline-content glass-panel p-3">
              <h3 className="text-xl font-bold mb-1">
                {exp.title} <span className="text-accent-cyan">@ {exp.company}</span>
              </h3>
              <p className="font-mono text-muted mb-2 text-sm">{exp.date}</p>
              
              <ul className="timeline-description">
                {exp.description.map((desc, i) => (
                  <li key={i} className="mb-1 text-muted">{desc}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
