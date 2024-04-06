import React from 'react';

const Projects = () => {
    return (
        <div className="container py-5">
            <h1 className="mb-4 text-center" style={{ fontSize: '5em' }}>Projects</h1>
            <div className="row justify-content-center">
                <div className="col-md-4 col-sm-10 mb-4 mt-5"> {/* Added col-sm-10 for smaller screens */}
                    <div className="card h-100">
                        <img src="images/portfolio.png" className="card-img-top" alt="Project 1" />
                        <div className="card-body text-center">
                            <h5 className="card-title" style={{ fontSize: '2.5em' }}>Dev Portfolio</h5>
                            <p className="card-text" style={{ fontSize: '1.4em' }}>A responsive Dev Portfolio Website made in React and Bootstrap.</p>
                        </div>
                        <div className="card-footer text-center">
                            <a href="https://github.com/ahmadomid1984/portfolio.git" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-10 mb-4 mt-5"> {/* Added col-sm-10 for smaller screens */}
                    <div className="card h-100">
                        <img src="images/Hotel-Waltikka.png" className="card-img-top" alt="Project 2" />
                        <div className="card-body text-center">
                            <h5 className="card-title" style={{ fontSize: '2.5em' }}>Hotel Waltikka UI</h5>
                            <p className="card-text" style={{ fontSize: '1.4em' }}>IoT interface system integrating temperature, moisture, and CO2 data.</p>
                        </div>
                        <div className="card-footer text-center">
                            <a href="https://github.com/LeylaMolnar/Waltikka-Group2" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-10 mb-4 mt-5"> {/* Added col-sm-10 for smaller screens */}
                    <div className="card h-100">
                        <img src="images/Coffeshop.png" className="card-img-top" alt="Project 3" />
                        <div className="card-body text-center">
                            <h5 className="card-title" style={{ fontSize: '2.5em' }}>Crush Cafe</h5>
                            <p className="card-text" style={{ fontSize: '1.4em' }}>Designing a website in different formats (PHP, HTML and Wordpress).</p>
                        </div>
                        <div className="card-footer text-center">
                            <a href="http://localhost:3000/projects" className="btn btn-primary">GitHub</a>
                        </div>
                    </div>
                </div>
                {/* Repeat the same structure for other cards */}
            </div>
        </div>
    );
}

export default Projects;
