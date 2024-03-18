import React from 'react';
import "./about.scss";
import Header from './header/header';
import AboutText from './aboutText/aboutText';
import Projects from './projects/projects';
import Team from './team/team';

const About = () => {
    return (
        <>
            <Header />
            <div className='bg-about'>
                <AboutText />
                <Projects />
                <Team />
            </div>

        </>
    )
}

export default About;