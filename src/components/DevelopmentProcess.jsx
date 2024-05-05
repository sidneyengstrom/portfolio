function DevelopmentProcess({ project, activeProcess }) {
    return (
        <div className={`panel ${activeProcess === 'development' ? 'active' : ''}`}>
            {project.process.development.text.map((developmentParagraph, index) => (
                <p key={index}>{developmentParagraph}</p>
            ))}
                    
            {project.process.development.featuredImages && (
                <div className={`featured-image-wrapper grid-col-${project.process.development.featuredImages.length +(project.process.development.videos ? project.process.development.videos.length : 0)}`}>
                    {project.process.development.featuredImages.map((featuredImage, index) => (
                        <img src={`/src/assets/images/${featuredImage}`} key={index} alt={`Featured Image ${index}`} />
                    ))}
                    {project.process.development.videos && project.process.development.videos.map((video, index) => (
                        <video key={index}>
                            <source src={`/src/assets/videos/process/${video}`} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    ))}
                </div>
            )}
        </div>
    );
}

export default DevelopmentProcess;