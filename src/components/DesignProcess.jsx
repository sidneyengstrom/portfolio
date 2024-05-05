function DesignProcess({ project }) {
    return (
        <div className='panel'>
            <div className='text'>
                {project.process.design.text.map((designParagraph, index) => (
                    <p key={index}>{designParagraph}</p>
                ))}
            </div>
            {project.process.design.featuredImages && (
                <div className={`featured-image-wrapper grid-col-${project.process.design.featuredImages.length + (project.process.design.videos ? project.process.design.videos.length : 0)}`}>
                    {project.process.design.featuredImages.map((featuredImage, index) => (
                        <img src={`/src/assets/images/${featuredImage}`} key={index} alt={`Featured Image ${index}`} />
                    ))}
                    {project.process.design.videos && project.process.design.videos.map((video, index) => (
                        <video key={index}>
                            <source src={`/src/assets/videos/process/${video}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ))}
                </div>
            )}

            {project.process.design.links && (
                <div className='links'>
                    {project.process.design.links.xd && (
                        <p><a href={project.process.design.links.xd}>Adobe XD</a></p>
                    )}
                    {project.process.design.links.figma && (
                        <p><a href={project.process.design.links.figma}>Figma</a></p>
                    )}
                </div>
            )}         
        </div>
    );
}

export default DesignProcess;
