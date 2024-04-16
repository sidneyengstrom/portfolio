import React, { useState } from 'react';

function Navigation() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    function toggleNav () {
        setIsNavVisible(prevState => !prevState);
    }

    return (
        <header>
            <nav className={isNavVisible ? 'show' : ''}>
                <ul>
                    <li>
                        <a href="#landing">Home</a>
                        <span className="link-underline"></span>
                    </li>
                    <li>
                        <a href="#featured-work">My Work</a>
                        <span className="link-underline"></span>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                        <span className="link-underline"></span>
                    </li>
                    <li>
                        <a href="#about">About</a>
                        <span className="link-underline"></span>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                        <span className="link-underline"></span>
                    </li>
                </ul>
                <div className="menu" onClick={toggleNav}>
                    <span className="bar"></span>
                </div>
            </nav>
            <div className={`overlay ${isNavVisible ? 'show' : ''}`}></div>
        </header>
    )
}
export default Navigation