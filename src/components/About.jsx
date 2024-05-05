import { useState } from 'react';

function About () {
    const [activeSection, setActiveSection] = useState('work');
    return (
        <section id="about">
            <h2>/ About</h2>
            <div className="about-wrapper">
                <div className='buttons'>
                    <button className={activeSection === 'work' ? 'active' : ''} onClick={() => setActiveSection('work')}>Work</button>
                    <button className={activeSection === 'play' ? 'active' : ''}onClick={() => setActiveSection('play')}>Play</button>
                </div>
                <div className="about card-bg">
                    <img src="/src/assets/images/self.png" alt="Photo of the developer."/>
                    <h3>Sidney Engstrom</h3>
                    {activeSection === 'work' ? (
                        <>
                            <p className='text-light'>Work-related content goes here.</p>
                            <p>all work and no play makes jack a dull boy. all work and no play makes jack a dull boy. all work and no play makes jack a dull boy. all work and no play makes jack a dull boy. all work and no play makes jack a dull boy. all work and no play makes jack a dull boy. all work and no play makes jack a dull boy. all work and no play makes jack a dull boy. all work and no play makes jack a dull boy.</p>
                        </>
                        
                    ) : (
                        <>
                            <p className='text-light'>Non-work-related content goes here.</p>
                            <p>all play and no work makes jack a broke boy. all play and no work makes jack a broke boy. all play and no work makes jack a broke boy. all play and no work makes jack a broke boy. all play and no work makes jack a broke boy. all play and no work makes jack a broke boy. all play and no work makes jack a broke boy</p>
                        </>
                    
                    )}
                
                </div>
            </div>
        </section>
    )
    
}
export default About