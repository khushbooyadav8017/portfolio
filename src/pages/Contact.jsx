import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiSend, FiPhone } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message transmission initiated. Please wait for confirmation.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container container section">
      <motion.h2
        className="section-title gradient-text mb-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="text-muted">06. </span>Contact
      </motion.h2>

      <div className="contact-content grid grid-cols-2 gap-3">
        <motion.div
          className="contact-info glass-panel p-3 flex flex-col justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
          <p className="text-muted mb-3">
            I’m open to job opportunities, freelance work, and collaborations. Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
          </p>

          <div className="contact-methods flex flex-col gap-2">
            <div className="contact-method flex items-center gap-1">
              <div className="method-icon"><FiPhone className="text-accent-cyan text-xl" /></div>
              <div>
                <h4 className="font-mono text-sm text-accent-cyan">Phone</h4>
                <p>+91 9920784235</p>
              </div>
            </div>

            <div className="contact-method flex items-center gap-1">
              <div className="method-icon"><FiMail className="text-accent-cyan text-xl" /></div>
              <div>
                <h4 className="font-mono text-sm text-accent-cyan">Email</h4>
                <p>khushbooyadav8017@gmail.com</p>
              </div>
            </div>

            <div className="contact-method flex items-center gap-1">
              <div className="method-icon"><FiMapPin className="text-accent-cyan text-xl" /></div>
              <div>
                <h4 className="font-mono text-sm text-accent-cyan">Location</h4>
                <p>Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          className="contact-form glass-panel p-3 flex flex-col gap-2"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="form-group">
            <label htmlFor="name" className="font-mono text-sm text-accent-cyan">Sender Identity</label>
            <input
              type="text"
              id="name"
              name="name"
              className="cyber-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="font-mono text-sm text-accent-cyan">Return Address (Email)</label>
            <input
              type="email"
              id="email"
              name="email"
              className="cyber-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message" className="font-mono text-sm text-accent-cyan">Encrypted Payload (Message)</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="cyber-input"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary mt-1 self-start">
            <FiSend /> Transmit Data
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
