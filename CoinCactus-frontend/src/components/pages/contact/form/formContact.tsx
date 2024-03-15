import React from 'react';
import "./formContact.scss";

const FormContact = () => {
    return (
        <>
            <form>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre" />
                            <label htmlFor="name">Tú Nombre</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="Ingrese su dirección de email" />
                            <label htmlFor="email">Tu dirección de email</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="subject" placeholder="Ingrese el asunto" />
                            <label htmlFor="subject">Asunto</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control textarea-form" placeholder="Ingrese su mensaje o consulta" id="message" />
                            <label htmlFor="message">Mensaje</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-gold-submit py-3 px-4" type="submit">Enviar mensaje</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormContact;