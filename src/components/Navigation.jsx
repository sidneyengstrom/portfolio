import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const location = useLocation();

    function toggleNav() {
        setIsNavVisible(prevState => !prevState);
    }

    // Check if current location is the home page or projects page
    const isHomePage = location.pathname === '/';
    const isProjectsPage = location.pathname === '/projects';
    const showProjectsLink = !isHomePage && !isProjectsPage; // Show projects link if not on home or projects page

    return (
        <header>
            <nav className={isNavVisible ? 'show' : ''}>
                <ul>
                    {isHomePage ? (
                        <li>
                            <Link to="/">Home</Link>
                            <span className="link-underline"></span>
                        </li>
                    ) : (
                        <li>
                            <Link to="/">Back to Home</Link>
                            <span className="link-underline"></span>
                        </li>
                    )}
                    {showProjectsLink && (
                        <li>
                            <Link to="/projects">See More Projects</Link>
                            <span className="link-underline"></span>
                        </li>
                    )}
                    {isHomePage && (
                        <>
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
                        </>
                    )}
                </ul>
                <div className="menu" onClick={toggleNav} role='button' aria-label="Menu">
                    <span className="bar"></span>
                </div>
            </nav>
            <div className={`overlay ${isNavVisible ? 'show' : ''}`} onClick={toggleNav}></div>
        </header>
    );
}

export default Navigation;
