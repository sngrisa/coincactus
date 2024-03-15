import React from 'react';
import "./home.scss";
import Header from './components/header/header';
import Features from './components/features/features';
import About from './components/about/about';
import Facts from './components/facts/facts';
import Services from './components/services/services';
import History from './components/history/history';
import Faqs from './components/faqs/faqs';

const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Facts />
            <Services />
            <Features />
            <Faqs />
        </>
    )
}

export default Home;