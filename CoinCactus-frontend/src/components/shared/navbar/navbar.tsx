import React from 'react';
import "./navbar.scss";
import LogoNavbar from './logoNavbar/logoNavbar';
import ItemsNavbar from './itemsNavbar/itemsNavbar';

const navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top p-0 px-4 px-lg-5">
                <LogoNavbar />
                <ItemsNavbar />
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        </>
    )
}

export default navbar;