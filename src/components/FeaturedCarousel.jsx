import { useParams } from 'react-router-dom';
import { projects } from '../project-data.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function FeaturedCarousel() {
  
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);

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
      <section id="carousel">
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
          <div className="project-links">
            <p><a href={project.liveSite}>
            Live Site
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                <path d="M11 13l9 -9" />
                <path d="M15 4h5v5" />
            </svg>
            </a></p>

            <p>{project.repo ? <a href={project.repoLink}>
                GitHub
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-external-link" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
                <path d="M11 13l9 -9" />
                <path d="M15 4h5v5" />
                </svg>
            </a> : 'GitHub Repository currently private.'}</p>
        </div>
      </section>
  );
}

export default FeaturedCarousel;