import React from 'react';
// eslint-disable-next-line
import Social from './Social';

const styles = {
    mainContainer: {
        fontFamily: 'Times New Roman',
        minHeight: '50vh',
    },
    aboutHeading: {
        fontSize: '5em',
        marginTop: '50px',
        textAlign: 'center', // Center the text
    },
    personalInfoContainer: {
        marginTop: '10px',
        textAlign: 'center',
    },
    cardContainer: {
        marginTop: '40px',
    },
    cardText: {
        textAlign: 'left',
        marginLeft: '40px',
        marginTop: '10px',
        fontSize: '24px',
    },
};

const PersonalInfo = () => {
    return (
        <div style={styles.mainContainer}>
            <h1 style={styles.aboutHeading}>About</h1> {/* Add the About heading */}
            <div style={styles.personalInfoContainer} className="container py-5">
                <div className="row">
                    <div className="col-md-6 col-sm-12 order-2 order-md-1"> {/* Order changed for smaller screens */}
                        <p className="white-text" style={styles.cardText}>As a motivated computer applications student, I possess a strong passion for advancing my knowledge in the realm of machine learning and artificial intelligence. I am currently seeking opportunities for an entry-level or trainee position within esteemed tech companies, where I can immerse myself in the dynamic field of ML and AI development. <br/><br/>Moreover, I love learning in challenging environments that push me to think creatively. Solving problems and crafting predictive models excites me, especially when they have real-world impact. With a strong work ethic, good communication skills, and a track record of success, I'm confident I can contribute to a dynamic team that values innovation.</p>
                    </div>
                    <div className="col-md-6 col-sm-12 order-1 order-md-2"> {/* Order changed for smaller screens */}
                        <div style={{ ...styles.cardContainer, flexDirection: 'column', textAlign: 'center' }}>
                            <img src="/images/profile-2.png" alt="John Doe" className="img-fluid rounded-circle shadow" style={{ maxWidth: '350px', marginBottom: '20px' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;
