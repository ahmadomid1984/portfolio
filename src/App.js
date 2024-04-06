import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import Home component
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import EducationalBackground from './components/EducationalBackground';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Redirect from the root path to /personal-info */}
          <Route path="/" element={<Navigate to="/personal-info" />} />
          <Route path="/home" element={<Home />} /> {/* Add route for Home */}
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/educational-background" element={<EducationalBackground />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/work-experience" element={<WorkExperience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
