import React from 'react';
import "./aboutText.scss";
import money from "./../../../../assets/moneyeuro.png";
import Coin from './coin/coin';

const AboutText = () => {
    return (
        <>
            <section className="about-section text-center" id="about">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-lg-8">
                            <h2 className="text-subtitle-about mb-4">¡Bienvenido a nuestra plataforma de moneda digital propia!</h2>
                            <p className="text-white">
                                En un mundo en constante evolución, donde las fronteras entre lo físico y lo digital se desdibujan cada vez más, nos enorgullece presentarte nuestra innovadora solución de moneda digital propia. Diseñada para ofrecerte libertad financiera y flexibilidad en tus transacciones, nuestra plataforma está impulsada por la última tecnología blockchain y respaldada por un equipo dedicado a brindarte una experiencia segura y sin complicaciones.
                            </p>
                        </div>
                    </div>
                    <Coin />
                </div>
            </section>
        </>
    )
}

export default AboutText;