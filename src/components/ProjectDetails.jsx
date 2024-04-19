import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../project-data.js';
import FeaturedCarousel from './FeaturedCarousel.jsx';
import InfoSorting from './InfoSorting.jsx';

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
    </div>
  );
}

export default ProjectDetails;