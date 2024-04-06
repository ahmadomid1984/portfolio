import React from 'react';
import Social from './Social'; // Import the Social component

const styles = {
    nameStyle: {
        fontSize: '6em',
        fontFamily: 'Times New Roman',
        marginBottom: '20px',
        textAlign: 'center',
        marginTop: '200px',
    },
};

const Home = () => {
    return (
        <div>
            <h1 style={styles.nameStyle}>Ahmad Omid</h1>
            <div>
                <h2 style={{ fontSize: '2.6em', textAlign: 'center', marginBottom: '40px' }}>I'm a Developer & a Computer Applications Student</h2>
            </div>
            <Social /> {/* Include the Social component here */}
        </div>
    );
}

export default Home;
