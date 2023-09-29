import React from 'react';
import './Banner.scss';

// TODO: add color themes
// TODO: add hamburger menu
// TODO: move Banner to component library
const Banner = ({ className, children }) => {
    const classNames = ['banner', classNames].join(' ');
    return (
        <div className={classNames}>
            {children}
        </div>
    );
    
};

export default Banner;
