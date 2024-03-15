import React from 'react';
import DescAboutHome from './components/descAboutHome/descAboutHome';
import DescItemAboutHome from './components/descItemAboutHome/descItemAboutHome';
import "./about.scss";
import Pig from "./../../../../../assets/pig.png";

const About = () => {
    let descItemsAboutHome = [
        {
            id: 1,
            desc: "Facilitar que las transacciones sean seguras y eficientes entre los usuarios",
            icon: "bi bi-shield-fill-check"
        },
        {
            id: 2,
            desc: "Buscar y proporcionar acceso a los servicios de moneda digital a personas de todo el mundo",
            icon: "bi bi-globe"
        },
        {
            id: 3,
            desc: "Cumplir con las regulaciones y normativas locales e internacionales para garantizar la legalidad y legitimidad de sus operaciones",
            icon: "bi bi-award-fill"
        },
        {
            id: 4,
            desc: "Estar a la vanguardia de la tecnología financiera, desarrollando y adoptando nuevas características y funcionalidades para mejorar la experiencia del usuario y adaptarse a las necesidades cambiantes del mercado.",
            icon: "bi bi-back"
        },
    ]
    return (
        <>
            <div className='bg-abouthome'>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <img className="img-fluid" src={Pig} alt="Alcancia.png" id='imgAboutHome' />
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="h-100">
                                    <DescAboutHome />
                                    {
                                        descItemsAboutHome.map((descItemAboutHome, idx) => {
                                            return (<DescItemAboutHome key={idx} descItemAboutHomeItem={descItemAboutHome} />)
                                        })
                                    }
                                    <a className="btn btn-about-home py-3 px-4 mt-4" href="">Más Información</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;

