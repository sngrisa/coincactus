import React from 'react';
import "./weFooter.scss";

const WeFooter = () => {
    return (
        <>
            <div className="col-md-6 text-white">
                <a href='/home' className='logoFooter'><h1 className="mb-4 logoFooterItem"><i className="bi bi-coin"></i> <span className='text-white'>Coin</span>Cactus</h1></a>
                <span>Creemos en la innovación continua y en el poder de la tecnología para transformar la manera en que manejamos nuestras finanzas. Únete a nosotros en esta emocionante aventura hacia un futuro financiero más inclusivo y descentralizado. ¡Juntos, podemos hacer que cada transacción cuente!</span>
            </div>
        </>
    )
}

export default WeFooter;