import React from 'react';
import "./header.scss";
import backgroundAboutHeader from "./../../../../assets/everest.jpg";

const Header = () => {
    return (
        <>
            <header id='sectionAbout'>
                <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div className="d-flex justify-content-center">
                        <div className="text-center">
                            <h1 className="mx-auto my-0 text-gold-about"><i className="bi bi-coin"></i> <span className='text-white'>Coin</span>Cactus</h1>
                            <h2 className="text-white-50 mx-auto mt-2 mb-5">Libertad financiera en cada transacción</h2>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;