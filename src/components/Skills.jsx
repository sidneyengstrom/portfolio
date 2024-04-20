import { skills } from "../skills-data";
import { useState } from 'react';
function ProjectDetails() {
    const [activeSection, setActiveSection] = useState('all');
    return (
        <section id="skills">
            <h2>/ Skills</h2>

            <div className="skill-wrapper">
                <div className='buttons'>
                    <button className={activeSection === 'all' ? 'active' : ''} onClick={() => setActiveSection('all')}>All</button>
                    <button className={activeSection === 'dev' ? 'active' : ''}onClick={() => setActiveSection('dev')}>Development</button>
                    <button className={activeSection === 'design' ? 'active' : ''}onClick={() => setActiveSection('design')}>Design</button>
                </div>

                <div className="skill-card card-bg">  

                    {skills.map((skill, index) => (
                        (activeSection === 'all' || skill.type.includes(activeSection)) ? (
                            <div className="skill" key={index}>
                            <img src={`/src/assets/images/logos/${skill.img}-logo.png`} alt={skill.title} />
                            <p>{skill.title}</p>
                        </div>
                        ) : null
                    ))}
                    
                </div>
            </div>
        </section>
    )
}
export default ProjectDetails;