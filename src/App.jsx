import Home from './components/Home';
import Navigation from './components/Navigation';
import ProjectDetails from './components/ProjectDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/project/:slug" element={<ProjectDetails />}></Route>
      </Routes>
      <Navigation />
    </Router>
  )
}

export default App
