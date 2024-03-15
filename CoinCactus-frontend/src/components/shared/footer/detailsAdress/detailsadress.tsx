import React from 'react';
import "./detailsAdress.scss";

const Detailsadress = () => {
    return (
        <>
            <div className="col-lg-4 col-md-6 text-white">
                <h5 className="mb-2 text-white link-title"><i className="bi bi-person-rolodex text-gold"></i> Datos de  contacto</h5>
                <div className='mt-3 mb-1'>
                    <a href='' className='detailsAdress text-blue'><i className="bi bi-map-fill text-gold"></i> Ciudad de Posadas, Provincia de Misiones, República Argentina</a>
                </div>
                <div className='mt-3 text-white'>
                    <a href='' className='detailsAdress'><i className="bi bi-telephone-fill text-gold"></i>+54 9 376 470-4718</a>
                </div>
                <div className='mt-2 text-white'>
                    <a href='mailto:soportecactusar@gmail.com' className='detailsAdress'><i className="bi bi-envelope-at-fill text-gold"></i> soportecactusar@gmail.com</a>
                </div>
            </div>
        </>
    )
}

export default Detailsadress;