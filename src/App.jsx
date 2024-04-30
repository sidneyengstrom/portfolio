import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Navigation from './components/Navigation';
import ProjectDetails from './components/ProjectDetails';
import AllProjects from './components/AllProjects';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const rootElement = document.querySelector('body');
    if (rootElement) {
      darkMode ? rootElement.classList.add('light-mode') : rootElement.classList.remove('light-mode');
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <Router>
      <div id='app-wrap' className={darkMode ? 'dark-mode' : 'light-mode'}>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}></Route>
          <Route path="/project/:slug" element={<ProjectDetails />}></Route>
          <Route path="/projects" element={<AllProjects />}></Route>
        </Routes>
        <Navigation />
        <Footer />
      </div>
    </Router>
  )
}

export default App
