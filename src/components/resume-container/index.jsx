import React from 'react';

import './styles.scss';

import Header from '../header/index.jsx';
import MainSection from '../main-section/index.jsx';
import SideSection from '../side-section/index.jsx';

const ResumeContainer = (props) => {
    return (
        <div className='resume-container'>
            <Header term='4B' />
            <MainSection />
            <SideSection />
        </div>
    );
};

export default ResumeContainer;