import React, { useState, useEffect } from 'react';

function LandingInfo () {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    
    const Typewriter = ({ text }) => {
      useEffect(() => {
        if (currentIndex < text.length && isTyping) {
          const timeout = setTimeout(() => {
            setDisplayText((prevText) => prevText + text[currentIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }, 20);
    
          return () => clearTimeout(timeout);
        } else {
          setIsTyping(false);
        }
      }, [currentIndex, text, isTyping]);
    
      return <span>{displayText}</span>;
    };
      
    const textToType = "I am a developer based in Vancouver, BC with a passion for creating clean, manageable code behind appealing and accessible user interfaces.";

    return (
        <div className="landing-info">
            <div className="name">
                <h1>Sidney</h1>
                <h1 className="accent-text">Engstrom</h1>
            </div>
            <div className="job-title">
                <h2>/ Front-End Developer</h2>
                <h2>/ Web Designer</h2>
            </div>
            <div className="self-desc">
                <Typewriter text={textToType} />
            </div>
            <div className={`cta ${isTyping ? '' : 'show'}`}>
                <button className="primary cta">See my work</button>
                <button className="secondary cta">Learn about me</button>
            </div>
        </div>
    )
}
export default LandingInfo