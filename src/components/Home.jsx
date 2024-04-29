import Landing from './Landing';
import FeaturedWork from './FeaturedWork';
import Skills from './Skills';
import About from './About';

function Home() {
    return (
        <>
            <Landing />
            <FeaturedWork />
            <div className='skills-abt-wrapper'>
                <Skills />
                <About />
            </div>
        </>
    )
  }
  
  export default Home