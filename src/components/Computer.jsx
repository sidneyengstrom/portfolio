function Computer() {
    return (
        <div className="desktop-wrap">
            <div className="desktop screen">
                <div className="header-wrap">
                    <span className="text"></span>
                    <span className="text accent"></span>
                </div>
                <div className="paragraph-wrap">
                    <span className="paragraph"></span>
                    <span className="paragraph accent"></span>
                    <span className="paragraph"></span>
                    <span className="paragraph"></span>
                    <span className="paragraph span-2"></span>
                    <span className="paragraph accent"></span>
                    <span className="paragraph w-75 accent"></span>
                </div>
                
                <div className="button-wrap">
                    <div className="button">
                        <span className="text"></span>
                    </div>
                    <div className="button accent">
                        <span className="text accent"></span>
                    </div>
                </div>
                <div className="social-bar">
                    <span className="bar"></span>
                    <span className="icon"></span>
                    <span className="icon"></span>
                    <span className="icon"></span>
                    <span className="icon"></span>
                </div>
            </div>
            
            <div className="desktop-stand"></div>
            <div className="cursor">
                <div className="pointer"></div>
                <div className="wrist"></div>
            </div>
        </div>
    )
}
export default Computer