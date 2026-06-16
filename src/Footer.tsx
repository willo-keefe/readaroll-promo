import React from 'react';

const Footer: React.FC = () => {
    const currDate = new Date().getFullYear();
    return(
        <footer className="text-center text-light fst-italic mt-5 mb-4">
            Copyright {currDate} Wrotech LLC. All Rights Reserved
        </footer>
    );
};

export default Footer;