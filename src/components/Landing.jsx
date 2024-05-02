import LandingInfo from './LandingInfo';
import Socials from './Socials';
import LandingDecoration from './LandingDecoration';

function Landing({ darkMode, toggleDarkMode }) {
    return (
        <>
        <section id="landing">
            <LandingInfo />
            <LandingDecoration />
        </section>
        <Socials darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        </>
        
    )
}
export default Landing