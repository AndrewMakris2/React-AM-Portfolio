import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import Professional from '../Components/Professional';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Learning from '../Components/Learning';
import Banner from '../Components/Banner';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/experience" element={<Professional />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/learning" element={<Learning />} />
        </Routes>
        <Footer /> {/* ✅ Now inside Router */}
      </Router>
    </div>
  );
};

export default Home;
