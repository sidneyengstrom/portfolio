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
                    <img src="/src/assets/images/self.png" alt="Photo of the developer." />
                    <h3>Sidney Engstrom</h3>
                    {activeSection === 'work' ? (
                        <>
                            <p className='text-light'>Responsiveness, Accessibility, Maintainable Code, Creative Design. Not necessarily in that order.</p>
                            <p>For the users of my sites, I strive to create visually appealing, interesting and interactive user interfaces, doing my best to abide by accessiblity best practices laid out by the W3C guidelines. For clients, or other developers who may be collaborating with me on projects, I aim to compartmentalize and organize my code in clear and intuitive ways to avoid headaches during ongoing development projects.</p>
                        </>
                        
                    ) : (
                        <>
                            <p className='text-light'>Guitar, Hockey, Travel, Baking. Probably in that order.</p>
                            <p>When I take a minute away from my work, you can often find me trying to learn how to play guitar, watching hockey, or baking an absurd amount of cookies or brownies for my small family. When I can take more than a minute away, I like to take road trips in the Rockies or long drives down the Oregon and California coast.</p>
                        </>
                    
                    )}
                
                </div>
            </div>
        </section>
    )
    
}
export default About