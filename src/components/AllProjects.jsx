import { projects } from '../project-data.js';
import ProjectCard from './ProjectCard.jsx';

function AllProjects() {
    return(
        <section id="all-work">
            <div className='project-wrapper'>
            {projects.map((project, index) => (
                <ProjectCard project={project} key={projects.indexOf(project)} index={projects.indexOf(project)} />
            ))}
        </div>
        </section>
        
        
    )
}

export default AllProjects