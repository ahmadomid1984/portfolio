import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const styles = {
    nameStyle: {
        fontSize: '4em',
        marginTop: '50px',
    },
    cardContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '3rem auto',
        maxWidth: '1200px', // This width accommodates three 300px cards plus 10px margin on each side of the cards
    },
    card: {
        width: '350px', // Set a fixed width
        height: '200px', // Set a fixed height to make the card square
        margin: '10px', // Margin around each card to ensure spacing
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center content vertically
        alignItems: 'center', // Center content horizontally
        textAlign: 'center',
        backgroundColor: '#fff',
        color: '#000',
        fontSize: '1em',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)', // Optional: add shadow for better aesthetics
    },
};

const skillsData = [
    { id: 1, title: 'Frontend Capabilities', technologies: ['React', 'Wordpress', 'HTML'] },
    { id: 2, title: 'Backend Capabilities', technologies: ['Node.js', 'Express.js', 'PHP'] },
    { id: 3, title: 'Programming Capabilities', technologies: ['Python', 'Java', 'JavaScript'] },
    { id: 4, title: 'Data Visualizations', technologies: ['Matplotlib', 'Seaborn', 'Power Bi'] },
    { id: 5, title: 'Database Management', technologies: ['MySQL', 'SSMS', 'MongoDB'] },
    { id: 6, title: 'Software Development', technologies: ['VS Code', 'GitHub', 'Docker', 'Cloud'] },
    { id: 7, title: 'Microsoft 365 Capabilities', technologies: ['Power Automate', 'Power Apps', 'Teams'] },
    { id: 8, title: 'Test Automation Process', technologies: ['Robot Framework', 'UiPath', 'RPA'] },
    { id: 9, title: 'ML & Data Processing', technologies: ['Supervised & Unsupervised Learning'] },
];

function Skills({ header }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        setData(skillsData);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const fontSize = width < 1024 ? '1em' : '1em';
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
            <div style={styles.cardContainer}>
                {data.map((skill, index) => (
                    <div key={skill.id} style={styles.card}>
                        <h3 style={{ fontSize: '1.6em', fontWeight: 'bold' }}>{skill.title}</h3>
                        <div style={{ fontSize: '1.2em' }}>{skill.technologies.join(', ')}</div>
                    </div>
                ))}
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
