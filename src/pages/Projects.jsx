import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Employee Management System",
      description: "A full-stack application to manage employee records, roles, authentication, and CRUD operations. Built REST APIs using Node.js and Express.js, designed a responsive React UI, and integrated MongoDB for data storage.",
      tech: ["MERN Stack", "React", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "E-commerce Website",
      description: "A responsive e-commerce platform with user authentication, product listing, cart management, order management, backend APIs, and database integration using MySQL/MongoDB.",
      tech: ["Full Stack", "MySQL", "MongoDB", "React", "Node.js"],
      github: "#",
      live: "#",
      featured: true
    }
  ];

  return (
    <div className="projects-container container section">
      <motion.h2 
        className="section-title gradient-text mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-muted">03. </span>Projects
      </motion.h2>

      <div className="projects-grid grid grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className={`project-card glass-panel p-3 flex flex-col justify-between ${project.featured ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div>
              <div className="project-header flex justify-between items-center mb-2">
                <FiFolder className="folder-icon text-accent-cyan text-xl" />
                <div className="project-links flex gap-1">
                  <a href={project.github} target="_blank" rel="noreferrer" className="icon-link"><FiGithub /></a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="icon-link"><FiExternalLink /></a>
                </div>
              </div>
              
              <h3 className="project-title font-bold text-xl mb-1">{project.title}</h3>
              <p className="project-description text-muted mb-2">{project.description}</p>
            </div>
            
            <ul className="project-tech-list flex gap-1 flex-wrap mt-2">
              {project.tech.map((tech, i) => (
                <li key={i} className="font-mono text-accent-cyan text-sm">{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
