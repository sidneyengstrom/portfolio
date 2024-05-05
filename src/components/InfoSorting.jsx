import { useState } from 'react';
import { projects } from '../project-data.js';
import { useParams } from 'react-router-dom';
import DesignProcess from './DesignProcess';
import PrototypingProcess from './PrototypingProcess';
import DevelopmentProcess from './DevelopmentProcess';


function InfoSorting() {
    const [activeSection, setActiveSection] = useState('description');
    const [activeProcess, setActiveProcess] = useState(null);

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
        'PHP': 'php-logo.png',
        'Figma': 'figma-logo.png',
        'Git / GitHub': 'github-logo.png',
      };

      return (
        <section id="project-info">
            <div className='buttons'>
                <button className={activeSection === 'description' ? 'active' : ''} onClick={() => setActiveSection('description')}>Description</button>
                <button className={activeSection === 'process' ? 'active' : ''} onClick={() => setActiveSection('process')}>Process</button>
                <button className={activeSection === 'learnings' ? 'active' : ''} onClick={() => setActiveSection('learnings')}>What I learned</button>
            </div>
            <div className='project-wrapper'>    
                {activeSection === 'description' && (
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
                )}
                {activeSection === 'learnings' && (
                    <div className='learnings'>
                        <div className='desc'>
                            <h2>What I Learned</h2>
                            {project.learnings.map((learningParagraph, index) => (
                                <p key={index}>{learningParagraph}</p>
                            ))}
                        </div>
                    </div>
                )}
                {activeSection === 'process' && (
                    <div className='process'>
                        <h2>The Process</h2>
                        {project.process.design && (
                            <>
                                <button className='accordion' onClick={() => setActiveProcess(prevState => prevState === 'design' ? null : 'design')}>
                                    Design
                                    {activeProcess === 'design' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M5 12l14 0" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 5l0 14" />
                                            <path d="M5 12l14 0" />
                                        </svg>
                                    )}
                                    </button>
                                {activeProcess === 'design' && (
                                    <DesignProcess project={project} />
                                )}
                            </>
                        )}

                        {project.process.prototyping && (
                            <>
                                <button className='accordion' onClick={() => setActiveProcess(prevState => prevState === 'prototyping' ? null : 'prototyping')}>
                                    Prototyping
                                    {activeProcess === 'prototyping' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M5 12l14 0" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 5l0 14" />
                                            <path d="M5 12l14 0" />
                                        </svg>
                                    )}
                                    
                                    </button>
                                {activeProcess === 'prototyping' && (
                                    <PrototypingProcess project={project} />
                                )}
                            </>
                        )}

                        {project.process.development && (
                            <>
                                <button className='accordion' onClick={() => setActiveProcess(prevState => prevState === 'development' ? null : 'development')}>
                                    Development
                                    {activeProcess === 'development' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-minus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M5 12l14 0" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                            <path d="M12 5l0 14" />
                                            <path d="M5 12l14 0" />
                                        </svg>
                                    )}
                                    </button>
                                {activeProcess === 'development' && (
                                    <DevelopmentProcess project={project} />
                                )}
                            </>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}
export default InfoSorting;