import Landing from './Landing';
import FeaturedWork from './FeaturedWork';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';

function Home({ darkMode, toggleDarkMode }) {
    return (
        <>
            <Landing darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <FeaturedWork />
            <div className='skills-abt-wrapper'>
                <Skills />
                <About />
            </div>
            <Contact />
        </>
    )
  }
  
  export default Home