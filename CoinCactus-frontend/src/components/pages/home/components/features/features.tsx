import React from 'react';
import "./features.scss";
import { Feature } from './interface/features.interface';
import FeatureComponent from './feature/feature';
import { MdOutlineSecurity } from "react-icons/md";

const Features = () => {

    let featuresCoinCactus: Feature[] =
        [
            {
                id: 1,
                title: "Facilidad de uso",
                imgUrl: "bi bi-mouse3-fill",
                desc: "Enfatizamos la experiencia de usuario intuitiva y amigable, que permite a los usuarios realizar transacciones y gestionar sus fondos de manera sencilla."
            },
            {
                id: 2,
                title: "Seguridad robusta",
                imgUrl: "bi bi-shield-shaded",
                desc: "Destacamos con las medidas de seguridad implementadas para proteger los fondos y los datos de los usuarios."
            },
            {
                id: 3,
                title: "Soporte 24/7",
                imgUrl: "bi bi-headset",
                desc: "Resaltamos la disponibilidad de un equipo de soporte al cliente dedicado y eficiente que esté disponible para ayudar a los usuarios."
            },
            {
                id: 4,
                title: "Compatibilidad multiplataforma",
                imgUrl: "bi bi-window-stack",
                desc: "Nuestra plataforma es compatible con múltiples dispositivos y sistemas operativos, como web, aplicaciones móviles y escritorio."
            },
            {
                id: 5,
                title: "Innovación continua",
                imgUrl: "bi bi-activity",
                desc: "Contamos con características únicas e innovadoras a diferencias de otras plataformas."
            },
            {
                id: 6,
                title: "Recompensas",
                imgUrl: "bi bi-wallet-fill",
                desc: "Ofrecemos programas de recompensas o descuentos para nuestros usuarios más 0frecuentes."
            },
        ];

    return (
        <>
            <div className='bg-dark'>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto wow fadeInUp feature-desc" data-wow-delay="0.1s">
                            <h1 className="display-6 text-white title-section"><i className="bi bi-file-earmark-text-fill text-gold"></i> Porque nosotros?</h1>
                            <p className="text-white fs-5 mb-5">Los mejores en la industria de las monedas virtuales!!!!</p>
                        </div>
                        <div className="row g-5">
                            {
                                featuresCoinCactus.map((featureCoinCactus, idx) => {
                                    return (<FeatureComponent key={idx} FeatureDetails={featureCoinCactus} />)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features;