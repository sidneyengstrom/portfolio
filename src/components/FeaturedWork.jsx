import { Link } from 'react-router-dom';
import { projects } from '../project-data.js';
import ProjectCard from './ProjectCard.jsx';

function FeaturedWork () {
  const featuredProjects = projects.filter(project => project.feature);
    return (
        <section id="featured-work">
            <h2>/ My Work</h2>
            <div className="project-wrapper">
            {featuredProjects.map((project, index) => (
                project.feature ? (
                  <ProjectCard project={project} key={projects.indexOf(project)} index={projects.indexOf(project)} />
                ) : null
            ))}
            </div>
            <Link to='/projects' className='see-more-btn'>See more</Link>
            
        </section>
    )

}
export default FeaturedWork