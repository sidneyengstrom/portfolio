import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../project-data.js';

function SeeMoreProjects({ currentProjectSlug }) {
    const featuredProjects = projects.filter(project => project.feature && project.slug !== currentProjectSlug);

    return (
        <section id="see-more-projects">
            <h2>/ See More Projects</h2>
            <div className="project-thumbnails">
                {featuredProjects.map((project, index) => (
                    <Link key={index} to={`/project/${project.slug}`} className="project-thumbnail card-bg">
                        <img src={`/src/assets/images/${project.thumbsrc}`} alt={project.thumbalt} />
                        <p>{project.title}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default SeeMoreProjects;

