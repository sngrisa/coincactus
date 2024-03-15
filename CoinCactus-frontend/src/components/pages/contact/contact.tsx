import React from 'react';
import "./contact.scss";
import FormContact from './form/formContact';
import { FaInfoCircle } from "react-icons/fa";
import { PiMapPinBold } from "react-icons/pi";
import { AiTwotonePhone } from "react-icons/ai";
import { MdAttachEmail } from "react-icons/md";
import DetailsContact from './details-contact/detailsContact';
import MapContact from './mapContact/mapContact';
import { DetailsContactItem } from './interface/detailsContactItems.interface';

const Contact = () => {
    let phoneNumber: string = "+5493764704718";
    let textPhone: string = "Consulta%20desde%20el%20sitio%20web";
    let DetailsContactItems: DetailsContactItem[] =
        [
            {
                id: 1,
                name: "Ubicación",
                value: "Ciudad de Posadas, Provincia de Misiones, República de Argentina",
                icon: <PiMapPinBold />,
                url: "https://maps.app.goo.gl/iACRQXNchSuUVgjq7",
            },
            {
                id: 2,
                name: "Número de teléfono",
                value: "+54 9 376 470-4718",
                icon: <AiTwotonePhone />,
                url: `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${textPhone}`,
            },
            {
                id: 3,
                name: "Email",
                value: "soportecactusar@gmail.com",
                icon: <MdAttachEmail />,
                url: "mailto:soportecactusar@gmail.com",
            },
        ];
    return (
        <>
            <div className='bg-black'>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="col-lg-6">
                                <h1 className="display-6 text-white title-contact"><i className="bi bi-people-fill icon-contact"></i>Contacto</h1>
                                <p className="fs-5 mb-0 text-gold subtitle-contact">Si tiene alguna consulta, contáctenos</p>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div className='col-md-5 col-lg-6'>
                                {
                                    DetailsContactItems.map((DetailsContactItem, idx) => {
                                        return (<DetailsContact key={idx} detailsContactItem={DetailsContactItem} />)
                                    })
                                }
                            </div>
                            <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <p className="mb-4 text-white"><span className='icon-form-contact'><FaInfoCircle /></span>Por favor, complete los campos anteriores y nos pondremos en contacto con usted lo antes posible.</p>
                                <FormContact />
                            </div>
                        </div>
                    </div>
                </div>
                <MapContact />
            </div>

        </>
    )
}

export default Contact;