import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../project-data.js';
import FeaturedCarousel from './FeaturedCarousel';
import InfoSorting from './InfoSorting';
import SeeMoreProjects from './SeeMoreProjects';

function ProjectDetails() {
  
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-page-wrapper">
      <FeaturedCarousel />
      <InfoSorting />
      <SeeMoreProjects currentProjectSlug={slug} />
    </div>
  );
}

export default ProjectDetails;