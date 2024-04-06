import React from 'react';

const WorkExperience = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center" style={{ fontSize: '4em', marginBottom: '80px' }}>Work Experience</h2>
            <div className="row">
                <div className="col-md-6 mb-3"> {/* Center the column horizontally */}
                    <div className="card p-4 h-100">
                        <h4 style={{ fontSize: '2.2em' }}>AI & ML Developer</h4>
                        <p className="text-muted">Chart Lightening Oy</p>
                        <p className="text-muted">05/2024 - Present</p>
                        <p className="text-muted">Creating predictive analytics projects with LCJS and LC Python.
                        Creating projects with LLM tools, which visualize data with LC Python or LCJS.</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3"> {/* Center the column horizontally */}
                    <div className="card p-4 h-100">
                        <h4 style={{ fontSize: '2.2em' }}>Web Developer</h4>
                        <p className="text-muted">Bovi Oy</p>
                        <p className="text-muted">02/2024 - 05/2024</p>
                        <p className="text-muted">Bovi, a specialized service centered around food and drinks, such as restaurants and cafes. 
                        As a web developer, my role involves enhancing and working on various sections of their website.</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3"> {/* Center the column horizontally */}
                    <div className="card p-4 h-100">
                        <h4 style={{ fontSize: '2.2em' }}>PDF Invoice Automation</h4>
                        <p className="text-muted">University project</p>
                        <p className="text-muted">01/2024 - 03/2024</p>
                        <p className="text-muted">Creating an automated PDF invoice processing system with UIPath and Robot Framework, 
                        enhancing efficiency and workflow integration.</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3"> {/* Center the column horizontally */}
                    <div className="card p-4 h-100">
                        <h4 style={{ fontSize: '2.2em' }}>AI & ML Projects</h4>
                        <p className="text-muted">University project.</p>
                        <p className="text-muted">08/2023 - 12/2023</p>
                        <p className="text-muted">Working on various university projects, including supervised learning with the KNN algorithm, 
                        unsupervised learning utilizing the k-means algorithm, topic detection, regular expressions, and Natural Language Processing (NLP).</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3"> {/* Center the column horizontally */}
                    <div className="card p-4 h-100">
                        <h4 style={{ fontSize: '2.2em' }}>Hotel Waltikka UI for Sensor Data</h4>
                        <p className="text-muted">University design factory project</p>
                        <p className="text-muted">08/2023 - 10/2023"</p>
                        <p className="text-muted">Designed an IoT interfaces integrating temperature, moisture, and CO2 data. 
                        Planned long-term optimization of heating and ventilation systems using collected data.</p>
                    </div>
                </div>
                <div className="col-md-6 mb-3"> {/* Center the column horizontally */}
                    <div className="card p-4 h-100">
                        <h4 style={{ fontSize: '2.2em' }}>Web Developer</h4>
                        <p className="text-muted">University project</p>
                        <p className="text-muted">01/2023 - 03/2023"</p>
                        <p className="text-muted">Developed a Coffee Shop website as a university project in different formats, utilizing PHP, HTML and Wordpress.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
