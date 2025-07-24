import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='Nav'>
      <div className='bar'>
        <Link to="/banner"><h2>Andrew Makris Portfolio</h2></Link>
        <div className="vertical-line"></div>

        <Link to="/experience"><h4>Experience & Certifications</h4></Link>
        <Link to="/skills"><h4>Technical Skills & Tools</h4></Link>
        <Link to="/projects"><h4>Projects</h4></Link>
        <Link to="/problem-solving"><h4>Problem-Solving & Risk Management</h4></Link>
        <Link to="/learning"><h4>Learning & Development</h4></Link>
      </div>
    </div>
  );
};

export default NavBar;
