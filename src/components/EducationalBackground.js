import React from 'react';

const EducationalBackground = () => {
    return (
        <div className="container py-5">
            <h2 className="text-center" style={{ fontSize: '4em', marginBottom: '80px' }}>Educational Background</h2>
            
            {/* Bachelor studies */}
            <div className="mb-5 text-center">
                <h3 className="mb-3" style={{ fontSize: '2.5em' }}>Bachelor Studies</h3>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card p-4 mb-3">
                            <h4 style={{ fontSize: '2em' }}>B.A, Computer Applications</h4>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>University of HAMK, Finland</p>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>2022 - Present</p>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>GPA - 4.7/5.0</p>
                        </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <div className="card p-4 mb-3">
                            <h4 style={{ fontSize: '2em' }}>B.A, English Literature</h4>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>Azad University, Iran</p>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>2003 - 2007</p>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>GPA - 17/20</p>
                        </div>
                    </div>
                    {/* Add more cards for bachelor studies if needed */}
                </div>
            </div>
            
            {/* Master studies */}
            <div className="mb-5 text-center">
                <h3 className="mb-3" style={{ fontSize: '2.5em' }}>Master Studies</h3>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card p-4 mb-3">
                            <h4 style={{ fontSize: '2em' }}>M.A, TEFL</h4>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>University of Shiraz, Iran</p>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>2008 - 2011</p>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>GPA - 16.5/20</p>
                        </div>
                    </div>
                    <div className="col-md-6 mx-auto">
                        <div className="card p-4 mb-3">
                            <h4 style={{ fontSize: '2em' }}>M.A, Journalism</h4>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>Allameh Tabataba'i University, Iran</p>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>2018 - 2020</p>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>GPA - 17.2/20</p>
                        </div>
                    </div>
                    {/* Add more cards for master studies if needed */}
                </div>
            </div>
            
            {/* Ph.D. studies */}
            <div className="mb-5 text-center">
                <h3 className="mb-3" style={{ fontSize: '2.5em' }}>Ph.D. Studies</h3>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card p-4 mb-3">
                            <h4 style={{ fontSize: '2em' }}>Ph.D Candidate, Communications</h4>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>Allameh Tabataba'i University, Iran</p>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>2020 - Present</p>
                            <p className="text-muted" style={{ fontSize: '1.2em' }}>GPA - 18.2/20</p>
                        </div>
                    </div>
                    {/* Add more cards for Ph.D. studies if needed */}
                </div>
            </div>
        </div>
    );
}

export default EducationalBackground;
