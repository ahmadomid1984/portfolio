import React from 'react';

const EducationalBackground = () => {
    const cardStyle = {
        width: '400px',  // Set a fixed width
        height: '250px',  // Set a fixed height to maintain square shape
        margin: '0 auto',  // Automatically center the card in its column
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',  // Evenly distribute space among items
        textAlign: 'center',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '1.3em',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'  // Optional: Adds shadow for depth
    };

    return (
        <div className="container py-5" style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="text-center" style={{ fontSize: '3em', marginBottom: '40px' }}>Educational Background</h2>
            
            {/* Bachelor studies */}
            <div className="text-center" style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '2em', marginBottom: '20px' }}>Bachelor Studies</h3>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="card mb-3" style={cardStyle}>
                        <h4 style={{ fontSize: '1.4em', fontWeight: 'bold' }}>Computer Applications</h4>
                        <p className="text-muted">University of HAMK, Finland</p>
                        <p className="text-muted">2022 - 2025</p>
                        <p className="text-muted">GPA - 4.7/5.0</p>
                    </div>
                    <div className="card mb-3" style={cardStyle}>
                        <h4 style={{ fontSize: '1.4em', fontWeight: 'bold' }}>English Literature</h4>
                        <p className="text-muted">Azad University, Iran</p>
                        <p className="text-muted">2003 - 2007</p>
                        <p className="text-muted">GPA - 17/20</p>
                    </div>
                </div>
            </div>

            {/* Master studies */}
            <div className="text-center" style={{ marginBottom: '40px' }}>
                <h3 style={{ fontSize: '2em', marginBottom: '20px' }}>Master Studies</h3>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="card mb-3" style={cardStyle}>
                        <h4 style={{ fontSize: '1.4em', fontWeight: 'bold' }}>TEFL</h4>
                        <p className="text-muted">University of Shiraz, Iran</p>
                        <p className="text-muted">2008 - 2011</p>
                        <p className="text-muted">GPA - 16.5/20</p>
                    </div>
                    <div className="card mb-3" style={cardStyle}>
                        <h4 style={{ fontSize: '1.4em', fontWeight: 'bold' }}>Journalism</h4>
                        <p className="text-muted">Allameh Tabataba'i University, Iran</p>
                        <p className="text-muted">2018 - 2020</p>
                        <p className="text-muted">GPA - 17.2/20</p>
                    </div>
                </div>
            </div>

            {/* Ph.D. studies */}
            <div className="text-center">
                <h3 style={{ fontSize: '2em', marginBottom: '20px' }}>Ph.D. Studies</h3>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="card mb-3" style={cardStyle}>
                        <h4 style={{ fontSize: '1.4em', fontWeight: 'bold' }}>Ph.D Candidate, Communications</h4>
                        <p className="text-muted">Allameh Tabataba'i University, Iran</p>
                        <p className="text-muted">2020 - Present</p>
                        <p className="text-muted">GPA - 18.2/20</p>
                    </div>
                    {/* Additional cards for Ph.D. studies can be added here if needed */}
                </div>
            </div>
        </div>
    );
}

export default EducationalBackground;
