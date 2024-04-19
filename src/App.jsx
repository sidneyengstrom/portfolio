import Home from './components/Home';
import Navigation from './components/Navigation';
import ProjectDetails from './components/ProjectDetails';
import AllProjects from './components/AllProjects';
// import AllProjects from './components/AllProjects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project/:slug" element={<ProjectDetails />}></Route>
        <Route path="/projects" element={<AllProjects />}></Route>
      </Routes>
      <Navigation />
    </Router>
  )
}

export default App
