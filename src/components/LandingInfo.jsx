function LandingInfo () {
    return (
        <div className="landing-info-wrap">
            <div className="name-wrap">
                <h1>Sidney</h1>
                <h1 className="accent-text">Engstrom</h1>
            </div>
            <div className="job-title-wrap">
                <h2>/ Front-End Web Developer</h2>
                <h2>/ Web Designer</h2>
            </div>
            <div className="lorem self-desc-wrap">
                <p>Lorem ipsum dolor sit <span className="accent-text">amet, consectetur</span> adipiscing elit. Mauris sagittis scelerisque libero. <span className="accent-text">Morbi a ex faucibus</span> leo tincidunt viverra quis nec nisi.</p>
            </div>
            <div className="cta-wrap">
                <button className="primary cta">See my work</button>
                <button className="secondary cta">Learn about me</button>
            </div>
        </div>
    )
}
export default LandingInfo