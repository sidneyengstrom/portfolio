import LandingInfo from './LandingInfo';
import Socials from './Socials';

function Landing({ darkMode, toggleDarkMode }) {
    return (
        <section id="landing">
            <LandingInfo />
            <Socials darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        </section>
    )
}
export default Landing