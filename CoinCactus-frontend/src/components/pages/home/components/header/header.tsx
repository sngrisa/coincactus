import React from 'react';
import "./header.scss";
import coins from "./../../../../../assets/coins.png";

const Header = () => {
    return (
        <>
            <div className
                ="container-fluid hero-header bg-black py-5">
                <div className
                    ="container py-5">
                    <div className
                        ="row g-5 align-items-center">
                        <div className
                            ="col-lg-6">
                            <h1 className
                                ="display-4 mb-3 animated slideInDown text-gold">
                                <h1 className="mb-4 logoFooterItem"><i className="bi bi-coin"></i> <span className='text-white'>Coin</span>Cactus</h1>
                            </h1>
                            <p className="animated slideInDown text-white text-header">Tu nuevo hogar para una revolución financiera digital! Somos una plataforma innovadora que ofrece nuestra propia moneda virtual, diseñada para brindar a los usuarios una experiencia financiera segura, rápida y eficiente en el mundo digital.</p>
                            <a href="" className
                                ="btn hero-btn py-3 px-4 animated slideInDown text-header">Más Información</a>
                        </div>
                        <div className
                            ="col-lg-6 animated fadeIn">
                            <img className
                                ="img-fluid animated pulse infinite imgheader img-header" src={coins}
                                alt="title-coins.png" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;