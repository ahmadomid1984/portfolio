import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    useEffect(() => {
        // Initialize the collapse functionality after the component mounts
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navLinks = document.querySelectorAll('.nav-link');

        // Toggle the navbar when the toggler is clicked
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });

        // Function to close the navbar when a nav-link is clicked
        const closeMenu = () => {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        };

        // Add click event to each nav link
        navLinks.forEach(link => link.addEventListener('click', closeMenu));

        // Clean up event listeners when the component unmounts
        return () => {
            navbarToggler.removeEventListener('click', () => {
                navbarCollapse.classList.toggle('show');
            });
            navLinks.forEach(link => link.removeEventListener('click', closeMenu));
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <div className="nav-box">
                            <Link className="nav-link" to="/home">Home</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-box">
                            <Link className="nav-link" to="/personal-info">About</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-box">
                            <Link className="nav-link" to="/skills">Skills</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-box">
                            <Link className="nav-link" to="/educational-background">Education</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-box">
                            <Link className="nav-link" to="/work-experience">Experience</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-box">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
