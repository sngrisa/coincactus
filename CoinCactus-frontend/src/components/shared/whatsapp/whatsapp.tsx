import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Coincactussupport from "./../../../assets/coincactuslogo.png";

const Whatsapp = () => {
    return (
        <>
            <FloatingWhatsApp phoneNumber='+54 9 376 470-4718' accountName='Soporte Coin Cactus' statusMessage='Reponde en pocos minutos' chatMessage='Hola, en que te podemos ayudar?' avatar={Coincactussupport} />
        </>
    )
}

export default Whatsapp;