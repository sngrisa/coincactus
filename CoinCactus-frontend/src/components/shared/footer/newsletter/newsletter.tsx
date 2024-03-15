import React from 'react';
import "./newsletter.scss";

const Newsletter = () => {
    return (
        <>
            <div className="col-md-6 text-white">
                <h5 className="mb-4 newsletter-title"><i className="bi bi-newspaper text-gold"></i> Newsletter</h5>
                <p> Reciba las últimas noticias en su correo!!!!</p>
                <div className="position-relative">
                    <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                        placeholder="Ingrese su email" />
                    <button type="button"
                        className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">Suscribirse</button>
                </div>
            </div>
        </>
    )
}

export default Newsletter;