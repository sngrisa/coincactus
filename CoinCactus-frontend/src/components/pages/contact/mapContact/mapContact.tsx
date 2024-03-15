import React from 'react';
import "./mapContact.scss";

const MapContact = () => {
    return (
        <>
            <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                <iframe className="w-100 mb-n2 mapContact"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28342.658201132563!2d-55.931111659055155!3d-27.38095307170028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1710529876040!5m2!1ses-419!2sar"
                    allowfullscreen="" aria-hidden="false" tabindex="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default MapContact;