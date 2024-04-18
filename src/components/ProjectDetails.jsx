import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../project-data.js';
import FeaturedCarousel from './FeaturedCarousel.jsx';

function ProjectDetails() {
  
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page-wrapper">
      <FeaturedCarousel />
      <div className="project-links">
        <p>{project.repo ? <a href={project.repoLink}>
            GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
              <path d="M11 13l9 -9" />
              <path d="M15 4h5v5" />
            </svg>
        </a> : 'GitHub Repository currently private.'}</p>

        <p><a href={project.liveSite}>
          Live Site
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
              <path d="M11 13l9 -9" />
              <path d="M15 4h5v5" />
          </svg>
          </a></p>
      </div>
    </div>
  );
}

export default ProjectDetails;