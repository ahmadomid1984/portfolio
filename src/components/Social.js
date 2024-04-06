import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        minHeight: '40vh',
    },
};

function Social() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch data or use local data as per your requirement
        const socialData = [
        {
            network: 'linkedin',
            href: 'https://www.linkedin.com/in/ahmad-omid-69677654/',
        },
        {
            network: 'github',
            href: 'https://github.com/ahmadomid1984',
        },
        {
            network: 'email',
            href: 'mailto:a.omid1984@gmail.com',
        },
        ];
        setData(socialData);
    }, []);

    return (
        <div style={styles.container}>
        {data &&
            data.map((social) => (
            <SocialIcon
                key={social.network}
                url={social.href}
                network={social.network}
                style={{ margin: '0 10px' }}
                target="_blank"
                rel="noopener"
            />
            ))}
        </div>
    );
}

export default Social;
