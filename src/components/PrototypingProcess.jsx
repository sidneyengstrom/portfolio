function PrototypingProcess({ project, activeProcess }) {
    return (
        <div className={`panel ${activeProcess === 'prototyping' ? 'active' : ''}`}>
            {project.process.prototyping.text.map((prototypingParagraph, index) => (
                <p key={index}>{prototypingParagraph}</p>
            ))}

            {project.process.prototyping.featuredImages && (
                <div className={`featured-image-wrapper grid-col-${project.process.prototyping.featuredImages.length + (project.process.prototyping.videos ? project.process.prototyping.videos.length : 0)}`}>
                    {project.process.prototyping.featuredImages.map((featuredImage, index) => (
                        <img src={`/src/assets/images/process/${featuredImage}`} key={index} alt={`Featured Image ${index}`} />
                    ))}
                    {project.process.prototyping.videos && project.process.prototyping.videos.map((video, index) => (
                        <video key={index} autoplay loop muted>
                            <source src={`/src/assets/videos/process/${video}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ))}
                </div>
            )}

            {project.process.prototyping.links && (
                <div className='links'>
                    {project.process.prototyping.links.xd && (
                        <p><a href={project.process.prototyping.links.xd}>Adobe XD</a></p>
                    )}
                    {project.process.prototyping.links.figma && (
                        <p><a href={project.process.prototyping.links.figma}>Figma</a></p>
                    )}
                </div>
            )}   
        </div>
    );
}

export default PrototypingProcess;