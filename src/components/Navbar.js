import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    useEffect(() => {
        // Initialize the collapse functionality after the component mounts
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });

        // Clean up event listener when the component unmounts
        return () => {
            navbarToggler.removeEventListener('click', () => {
                navbarCollapse.classList.toggle('show');
            });
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                <img src="/images/Logo.png" alt="Logo" width="200" height="80" />
            </Link>

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
