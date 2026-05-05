import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiDatabase, FiServer, FiTerminal, FiCpu } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <FiLayout className="text-accent-cyan text-xl" />,
      skills: ["HTML", "CSS", "Bootstrap", "React.js", "Responsive Web Design"]
    },
    {
      title: "Backend",
      icon: <FiServer className="text-accent-cyan text-xl" />,
      skills: ["Node.js", "Express.js", "PHP", "Laravel"]
    },
    {
      title: "Database",
      icon: <FiDatabase className="text-accent-cyan text-xl" />,
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Tools",
      icon: <FiTerminal className="text-accent-cyan text-xl" />,
      skills: ["Git", "Postman", "VS Code", "Figma", "WordPress"]
    },
    {
      title: "Other",
      icon: <FiCpu className="text-accent-cyan text-xl" />,
      skills: ["ChatGPT API", "Problem Solving", "Code Optimization"]
    }
  ];

  return (
    <div className="container section">
      <motion.h2 
        className="section-title gradient-text mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-muted">04. </span>Skills
      </motion.h2>

      <div className="grid grid-cols-2 gap-3">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index}
            className="glass-panel p-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-1 mb-2">
              {category.icon}
              <h3 className="font-bold text-xl">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-1">
              {category.skills.map((skill, i) => (
                <span key={i} className="chip">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
