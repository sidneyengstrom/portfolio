import { useState } from 'react';
import { projects } from '../project-data.js';
import { useParams } from 'react-router-dom';


function InfoSorting() {
    const [activeSection, setActiveSection] = useState('description');
    const { slug } = useParams();
    const project = projects.find((project) => project.slug === slug);

    const techImages = {
        'React': 'react-logo.png',
        'Chakra UI': 'chakra-ui-logo.png',
        'TMDB API': 'tmdb-logo.png',
        'SASS / SCSS': 'sass-logo.png',
        'HTML5': 'html-logo.png',
        'CSS3': 'css-logo.png',
        'Photoshop': 'photoshop-logo.png',
        'Adobe XD': 'xd-logo.png',
        'Illustrator': 'illustrator-logo.png',
        'JavaScript': 'javascript-logo.png',
        'jQuery': 'jquery-logo.png',
        'WordPress': 'wordpress-logo.png',
        'PHP': 'php-logo.png'
      };

    return (
        <section id="project-info">
            <div className='buttons'>
                <button className={activeSection === 'description' ? 'active' : ''} onClick={() => setActiveSection('description')}>Description</button>
                <button className={activeSection === 'learnings' ? 'active' : ''}onClick={() => setActiveSection('learnings')}>What I learned</button>
            </div>
            <div className='project-wrapper'>    
                {activeSection === 'description' ? (
                    <div className='info'>
                        <div className='desc'>
                            <h2>Project Description</h2>
                            <p>{project.description}</p>
                        </div>
                        <div className='tech'>
                            <h2>Tech Used</h2>
                            <ul>
                                {project.alltech.map((tech, index) => (
                                    <li key={index}>
                                        {techImages[tech] && (
                                            <img src={`/src/assets/images/logos/${techImages[tech]}`} alt={`${tech} Logo`} />
                                        )}
                                        {tech}
                                    </li>
                                    
                                ))}
                            </ul>
                        </div>
                    </div>
                ) : (
                    <div className='learnings'>
                        <div className='desc'>
                            <h2>What I Learned</h2>
                            <p>{project.learnings}</p>
                        </div>
                    </div>
                )}
                
            </div>
        </section>
    )
}
export default InfoSorting;