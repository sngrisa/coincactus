import React from 'react';
import "./errorPage.scss";
import { MdError } from "react-icons/md";
import { TbError404 } from "react-icons/tb";

const ErrorPage = () => {
    return (
        <>
            <div className='bg-dark'>
                <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <span className='icon-warning'><TbError404 /></span>
                                <h1 className="mb-4 text-error text-gold"><span className='iconErr'><MdError /></span>Error al cargar la página <span className='iconErr'><MdError /></span></h1>
                                <p className="mb-4 text-white text-err-page">Lo sentimos, ¡la página que has buscado no existe en nuestro sitio web!!!</p>
                                <a className="btn py-3 px-4 button404" href="/">Volver a la página principal</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage;