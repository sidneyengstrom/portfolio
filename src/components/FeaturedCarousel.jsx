import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../project-data.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function FeaturedCarousel() {
  
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  


  return (
      <section id="carousel" style={{ paddingTop: '5rem' }}>
        <Carousel
            responsive={responsive}
            infinite
            itemClass="carousel-item-padding-40-px"
            removeArrowOnDeviceType={'mobile'}
          >
            {project.carouselImgs.map((img, index) => (
              <img src={`/src/assets/images/${img}`} alt={project.carouselAlt} key={index} draggable="false" />
            ))}
          </Carousel>
      </section>
  );
}

export default FeaturedCarousel;