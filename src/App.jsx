import Landing from './components/Landing';
import Navigation from './components/Navigation';
import FeaturedWork from './components/FeaturedWork';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navigation />
      <Landing />
      <FeaturedWork />
    </Router>
  )
}

export default App
