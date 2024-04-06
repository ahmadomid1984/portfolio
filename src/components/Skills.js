import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const styles = {
    nameStyle: {
        fontSize: '4em',
        marginTop: '50px',
    },
    cardContainer: {
        marginTop: '40px',
    },
    card: {
        width: 'calc(100% - 10px)', // Adjusted width
        margin: '10px', // Reduced margin for better spacing
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        textAlign: 'center',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '1em',
    },
    progressBarContainer: {
        width: '100%',
        backgroundColor: '#ddd',
        borderRadius: '10px',
        marginTop: '30px',
    },
    progressBarFill: {
        backgroundColor: '#007bff',
        borderRadius: '10px',
        height: '20px',
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: '20px',
    },
};
// Define the skillsData array
const skillsData = [
    {
        id: 1,
        title: 'Frontend Capabilities',
        technologies: ['React', 'Wordpress', 'HTML'],
        percent: 60,
    },
    {
        id: 2,
        title: 'Backend Capabilities',
        technologies: ['Node.js', 'PHP', 'MongoDB'],
        percent: 50,
    },
    {
        id: 3,
        title: 'Programming Capabilities',
        technologies: ['Python', 'Java', 'JavaScript'],
        percent: 40,
    },
    {
        id: 4,
        title: 'Data Visualizations',
        technologies: ['Matplotlib', 'Seaborn', 'Power Bi', 'Excel'],
        percent: 40,
    },
    {
        id: 5,
        title: 'Database Management',
        technologies: ['MySQL', 'SSMS', 'VS Community'],
        percent: 40,
    },
    {
        id: 6,
        title: 'Software Development',
        technologies: ['VS Code', 'GitHub', 'Docker', 'Cloud'],
        percent: 60,
    },
    {
        id: 7,
        title: 'Microsoft 365 Capabilities',
        technologies: ['Power Automate', 'Power Apps', 'Teams'],
        percent: 60,
    },
    {
        id: 8,
        title: 'Test Automation Process',
        technologies: ['Robot Framework', 'UiPath', 'RPA'],
        percent: 50,
    },
    {
        id: 9,
        title: 'ML & Data Processing',
        technologies: ['Supervised & Unsupervised Learning'],
        percent: 30,
    },
];

function Skills({ header }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(skillsData);
    }, []);

    // Dynamically adjust font size based on screen width
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const fontSize = width < 1024 ? '1em' : '1em'; // Adjust font size for tablet screens
            document.documentElement.style.fontSize = fontSize;
        };

        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return data ? (
        <div style={{ textAlign: 'center' }}>
            <h1 style={styles.nameStyle}>Skills</h1>
            <h2>{header}</h2>
            <div className="container" style={styles.cardContainer}>
                <div className="row">
                    {data.map((skill, index) => (
                        <div key={skill.id} className="col-lg-4 col-md-12"> {/* Adjusted column size for tablets */}
                            <div style={styles.card}>
                                <h3 style={{ fontSize: '2em' }}>{skill.title}</h3>
                                <div style={{ fontSize: '1.2em' }}>{skill.technologies && skill.technologies.join(', ')}</div>
                                <div style={styles.progressBarContainer}>
                                    <div
                                        style={{
                                            ...styles.progressBarFill,
                                            width: `${skill.percent}%`,
                                        }}
                                    >
                                        {skill.percent}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ) : (
        <div>Loading...</div>
    );
}

Skills.propTypes = {
    header: PropTypes.string.isRequired,
};

export default Skills;