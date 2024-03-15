import React from 'react';
import "./faqs.scss";
import Faq from './faq/faq';
import { FaqItem } from './interface/FaqItem.interface';
import { MdTimelapse } from "react-icons/md";
import { SiAnswer } from "react-icons/si";

const Faqs = () => {
    let FaqsArray: FaqItem[] =
        [
            {
                id: 1,
                question: "¿Qué es una moneda digital?",
                answer: "Una moneda digital es una forma de moneda digital que utiliza criptografía para garantizar y verificar transacciones, así como para controlar la creación de nuevas unidades.",
                icon: <SiAnswer />
            },
            {
                id: 2,
                question: "¿Qué monedas están disponibles para negociar en esta plataforma?",
                answer: "Ofrecemos nuestra propia moneda virtual, la cual es segura y totalmente confiable",
                icon: <SiAnswer />
            },
            {
                id: 3,
                question: "¿Cómo puedo comprar monedas en esta plataforma?",
                answer: "Puedes comprar monedas en nuestra plataforma registrando una cuenta, verificando tu identidad según sea necesario y depositando fondos en tu cuenta. Luego puedes utilizar esos fondos para comprar las monedas disponibles en nuestra plataforma.",
                icon: <SiAnswer />
            },
            {
                id: 4,
                question: "¿Qué es una billetera (wallet) de monedas digitales y cómo funciona?",
                answer: "Una billetera de monedas digitales es un software o dispositivo que almacena claves públicas y privadas y se utiliza para interactuar con las cadenas de bloques para enviar y recibir monedas digitales.",
                icon: <SiAnswer />
            },
            {
                id: 5,
                question: "¿Cuáles son las tarifas asociadas con las transacciones en esta plataforma?",
                answer: "Nuestra plataforma cobra tarifas de transacción que pueden variar según el tipo de operación y el volumen negociado. Puedes encontrar información detallada sobre nuestras tarifas en la sección correspondiente de nuestro sitio web.",
                icon: <SiAnswer />
            },
            {
                id: 6,
                question: "¿Cómo puedo retirar fondos de mi cuenta?",
                answer: "Puedes retirar fondos de tu cuenta iniciando sesión, seleccionando la opción de retiro y siguiendo los pasos proporcionados. Los fondos se transferirán a la cuenta bancaria o billetera externa que hayas especificado.",
                icon: <SiAnswer />
            },
            {
                id: 7,
                question: "¿Qué medidas de seguridad tienen implementadas para proteger mis fondos y datos personales?",
                answer: "Nuestra plataforma utiliza medidas de seguridad avanzadas, como la autenticación de dos factores, cifrado SSL y almacenamiento en frío de fondos, para proteger tus activos y datos personales.",
                icon: <SiAnswer />
            },
            {
                id: 8,
                question: "¿Qué debo hacer si olvidé mi contraseña o mi cuenta está comprometida?",
                answer: "Si olvidaste tu contraseña o sospechas que tu cuenta ha sido comprometida, puedes utilizar la opción de recuperación de contraseña o contactar a nuestro equipo de soporte para obtener asistencia adicional.",
                icon: <SiAnswer />
            },
        ];

    return (
        <>
            <div className='bg-gray-800'>
                <div className="container-xxl py-5">
                    <div className='container'>
                        <div className="text-center mx-auto wow fadeInUp title-faqs-section" data-wow-delay="0.1s">
                            <h1 className="display-6 text-white title-faqs"><span className='icon-faqs'><MdTimelapse /></span>Preguntas más frecuentes</h1>
                            <p className="fs-5 mb-5 text-gold sub-text">Lo que más preguntan nuestros usuarios</p>
                        </div>
                        <div className="row justify-content-center">
                            {
                                FaqsArray.map((FaqItem, idx) => {
                                    return (<Faq key={idx} faqItem={FaqItem} />)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs;