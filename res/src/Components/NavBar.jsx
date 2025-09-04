import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    // Dynamically add 'mobile-menu-active' class when menuOpen is true
    <div className={`Nav ${menuOpen ? 'mobile-menu-active' : ''}`}>
      {/* This is the hamburger icon visible on mobile */}
      <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Main navigation bar content */}
      <div className='bar'>
        <Link to="/"><h2>Andrew Makris Portfolio</h2></Link>
        <div className="vertical-line"></div>

        {/* These links are visible on desktop/tablet */}
        <Link to="/experience"><h4>Professional Experience</h4></Link>
        <Link to="/skills"><h4>Technical Skills & Tools</h4></Link>
        <Link to="/projects"><h4>Projects</h4></Link>
        <Link to="/learning"><h4>Learning & Development</h4></Link>
      </div>

      {/* This is the mobile menu. It will always be rendered, but its
          visibility and position will be controlled by CSS based on the
          'mobile-menu-active' class on the parent .Nav */}
      <div className="mobile-menu">
        {/* We need to close the menu when a link is clicked */}
        <Link to="/" onClick={() => setMenuOpen(false)}><h2>Home</h2></Link>
        <Link to="/experience" onClick={() => setMenuOpen(false)}><h4>Professional Experience</h4></Link>
        <Link to="/skills" onClick={() => setMenuOpen(false)}><h4>Technical Skills & Tools</h4></Link>
        <Link to="/projects" onClick={() => setMenuOpen(false)}><h4>Projects</h4></Link>
        <Link to="/learning" onClick={() => setMenuOpen(false)}><h4>Learning & Development</h4></Link>
      </div>
    </div>
  );
};

export default NavBar;