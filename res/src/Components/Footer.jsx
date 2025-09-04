import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-columns">
        
        {/* Contact Info */}
        <div className="footer-col contact-info">
          <h3>Contact</h3>
          <p>Andrew Makris</p>
          <p>Email: amakris03@gmail.com</p>
          <p>Phone: (623) 806-9966</p>
        </div>

        {/* Table of Contents */}
        <div className="footer-col table-of-contents">
          <h3>Table of Contents</h3>
          <ul>
            <li><Link to="/experience">Experience & Certifications</Link></li>
            <li><Link to="/skills">Technical Skills & Tools</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/learning">Learning & Development</Link></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="footer-col other">
          <h3>Connect</h3>
          <p>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/andrew-makris-441969258/" target="_blank" rel="noopener noreferrer">
              Profile
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a href="https://github.com/AndrewMakris2" target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
