import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project, index }) {
    const projectRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (projectRef.current) {
            observer.observe(projectRef.current);
        }

        return () => {
            if (projectRef.current) {
                observer.unobserve(projectRef.current);
            }
        };
    }, [projectRef]);

    return (
        <div className={`project card-bg ${index % 2 === 0 ? 'left-swipe' : 'right-swipe'}`} ref={projectRef}>
            <img src={`/src/assets/images/${project.thumbsrc}`} alt={project.thumbalt} />
            <h3>{project.title}</h3>
            <p className='excerpt'>{project.excerpt}</p>
            <div className="learn-more">
                <Link to={`/project/${project.slug}`}>
                    <p>Learn More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon arrow" width="19" height="19" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M17 7l-10 10" />
                        <path d="M8 7l9 0l0 9" />
                    </svg>
                </Link>
            </div>
            <div className="tech-used">
                {project.featuredTech.map((featuredTech, index) => (
                    <p className='tech' key={index}>{featuredTech}</p>
                ))}
            </div>
        </div>
    );
}

export default ProjectCard;
