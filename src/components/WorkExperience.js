import React from 'react';

const WorkExperience = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center" style={{ fontSize: '3em', marginBottom: '50px' }}>Work Experience</h2>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3"> {/* Center the column horizontally */}
                    <div className="card p-4 h-100">
                        <h4 style={{ fontSize: '2.2em' }}>AI & ML Developer</h4>
                        <p className="text-muted" style={{ fontSize: '16px' }}>Chart Lightning Oy</p>
                        <p className="text-muted" style={{ fontSize: '16px' }}>05/2024 - 08/2024</p>
                        <p className="text-muted" style={{ fontSize: '20px' }}>Creating predictive analytics projects with LCJS and LC Python.
                        Creating projects with LLM tools, which visualize data with LC Python or LCJS.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3"> {/* Center the column horizontally */}
                    <div className="card p-4 h-100">
                        <h4 style={{ fontSize: '2.2em' }}>Web Developer</h4>
                        <p className="text-muted" style={{ fontSize: '16px' }}>Bovi Oy</p>
                        <p className="text-muted" style={{ fontSize: '16px' }}>02/2024 - 05/2024</p>
                        <p className="text-muted" style={{ fontSize: '20px' }}>Bovi, a specialized service centered around food and drinks, such as restaurants and cafes. 
                        As a web developer, my role involves enhancing and working on various sections of their website.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3"> {/* Center the column horizontally */}
                    <div className="card p-4 h-100">
                        <h4 style={{ fontSize: '2.2em' }}>University Lecturer</h4>
                        <p className="text-muted" style={{ fontSize: '16px' }}>Allameh Tabataba'i University</p>
                        <p className="text-muted" style={{ fontSize: '16px' }}>2021 - 2022</p>
                        <p className="text-muted" style={{ fontSize: '20px' }}>As a University Lecturer, I taught specialized English courses to students in communications, public relations, and journalism, 
                        focusing on developing their proficiency and practical skills for professional success.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3"> {/* Center the column horizontally */}
                    <div className="card p-4 h-100">
                        <h4 style={{ fontSize: '2.2em' }}>University Lecturer</h4>
                        <p className="text-muted" style={{ fontSize: '16px' }}>University of Applied Sciences & Technology</p>
                        <p className="text-muted" style={{ fontSize: '16px' }}>2019 - 2021</p>
                        <p className="text-muted" style={{ fontSize: '20px' }}>As a University Lecturer, my role is to teach courses in communications, public relations, and journalism field studies, 
                        aiming to equip students with the knowledge and skills needed for success in these dynamic industries.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3"> {/* Center the column horizontally */}
                    <div className="card p-4 h-100">
                        <h4 style={{ fontSize: '2.2em' }}>Senior Editor</h4>
                        <p className="text-muted" style={{ fontSize: '16px' }}>Iranian Media</p>
                        <p className="text-muted" style={{ fontSize: '16px' }}>2013 - 2022</p>
                        <p className="text-muted" style={{ fontSize: '20px' }}>My role is to manage the content creation process, ensuring all materials meet our quality standards. 
                        My responsibilities include editing submissions, leading a team of writers and junior editors, and guiding our strategic content direction.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 mb-3"> {/* Center the column horizontally */}
                    <div className="card p-4 h-100">
                        <h4 style={{ fontSize: '2.2em' }}>Translator & Interpreter</h4>
                        <p className="text-muted" style={{ fontSize: '16px' }}>Iranian Media</p>
                        <p className="text-muted" style={{ fontSize: '16px' }}>2005 - 2013</p>
                        <p className="text-muted" style={{ fontSize: '20px' }}>As a Translator and Interpreter, my role involves converting written text and spoken language between English, Arabic, and Persian, 
                        ensuring clarity and fidelity to preserve the original message’s intent and tone.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;
