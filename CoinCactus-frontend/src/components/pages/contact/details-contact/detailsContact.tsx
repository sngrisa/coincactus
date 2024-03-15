import React from 'react';
import "./detailsContact.scss";

const DetailsContact = ({ detailsContactItem }) => {
    return (
        <>
            <div className="wow fadeInUp" data-wow-delay="0.1s">
                <p className="mb-2 text-white"><span className='detailsContact-icon'>{detailsContactItem.icon}</span>{detailsContactItem.name}</p>
                <a href={detailsContactItem.url} className='text-white a-details'>{detailsContactItem.value}</a>
                <hr className="w-100" />
            </div>
        </>
    )
}

export default DetailsContact;