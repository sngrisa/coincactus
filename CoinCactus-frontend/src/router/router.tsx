import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/pages/home/home';
import ErrorPage from '../components/pages/home/components/errorPage/errorPage';
import Contact from '../components/pages/contact/contact';
import About from '../components/pages/about/about';

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/err' element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Router;