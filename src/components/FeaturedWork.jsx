import { projects } from '../project-data.js';
import { Link } from 'react-router-dom';

function FeaturedWork () {
    return (
        <section id="featured-work">
            <h2>/ My Work</h2>
            <div className="project-wrapper">
            {projects.map((project, index) => (
                project.feature ? (
                    <div className="project" key={index}>
                        <img src={`/src/assets/images/${project.thumbsrc}`} alt={project.thumbalt} />
                        <h3>{project.title}</h3>
                        <p>{project.excerpt}</p>
                        <Link to={`/project/${project.slug}`}>
                            <div className="learn-more">
                                <p>Learn More</p>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon arrow" width="19" height="19" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M17 7l-10 10" />
                                    <path d="M8 7l9 0l0 9" />
                                </svg>
                            </div>
                        </Link>
                        <div className="tech-used">
                            {project.tech.map((tech, index) => (
                                <p className='tech' key={index}>{tech}</p>
                            ))}
                        </div>
                    </div>
                ) : null
            ))}
            </div>
            <Link to={`/projects`} className='see-more-btn'>See more</Link>
            
        </section>
    )

}
export default FeaturedWork