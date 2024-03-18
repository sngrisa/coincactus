import React, { useState } from 'react';
import "./formContact.scss";
import { getNotificationError, getNotificationSucess } from '../confirmSend/popUpConfirm';


const FormContact = () => {

    let [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    let [status, setStatus] = useState(false);

    let submitEmail = (): any => {
        event?.preventDefault();
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
        setStatus(() => !status);
        return (status) ? getNotificationSucess() : getNotificationError();
    }

    return (
        <>
            <form onSubmit={() => submitEmail()} autoCapitalize='off' autoComplete='off' name='formData' id='formData'>
                <div className="row g-3">
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="name" placeholder="Ingrese su nombre" value={formData.name} onChange={(e: any) => setFormData({ ...formData, name: e.target.value })} />
                            <label htmlFor="name">Tú Nombre</label>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="Ingrese su dirección de email" value={formData.email} onChange={(e: any) => setFormData({ ...formData, email: e.target.value })} />
                            <label htmlFor="email">Tu dirección de email</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <input type="text" className="form-control" id="subject" placeholder="Ingrese el asunto" value={formData.subject} onChange={(e: any) => setFormData({ ...formData, subject: e.target.value })} />
                            <label htmlFor="subject">Asunto</label>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-floating">
                            <textarea className="form-control textarea-form" placeholder="Ingrese su mensaje o consulta" id="message" value={formData.message} onChange={(e: any) => setFormData({ ...formData, message: e.target.value })} />
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