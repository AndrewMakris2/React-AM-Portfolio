import React from 'react';


const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-columns">
        <div className="footer-col contact-info">
          <h3>Contact</h3>
          <p>Andrew Makris</p>
          <p>Email: andrew.makris@email.com</p>
          <p>Phone: (555) 123-4567</p>
        </div>
        <div className="footer-col table-of-contents">
          <h3>Table of Contents</h3>
          <ul>
            <li>Experience & Certifications</li>
            <li>Technical Skills & Tools</li>
            <li>Projects</li>
            <li>Problem-Solving & Risk Management</li>
            <li>Learning & Development</li>
          </ul>
        </div>
        <div className="footer-col other">
          <h3>Connect</h3>
          <p>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">Profile</a></p>
          <p>GitHub: <a href="https://github.com" target="_blank" rel="noopener noreferrer">Repository</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;