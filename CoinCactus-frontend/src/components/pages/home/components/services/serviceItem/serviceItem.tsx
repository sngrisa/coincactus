import React from 'react';
import "./serviceItem.scss";

const ServiceItem = ({ ServiceItemObject }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item border border-primary p-5">
                    <span className='icon-serviceItem text-primary'>{ServiceItemObject.icon}</span>
                    <h5 className="mb-3 mt-3 serviceItemtext">{ServiceItemObject.title}</h5>
                    <p className='text-descService'>{ServiceItemObject.desc}</p>
                </div>
            </div>
        </>
    )
}

export default ServiceItem;