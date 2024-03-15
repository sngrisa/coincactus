import React from 'react';
import "./fact.scss";

const Fact = ({ totalTransaction }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
                <div className='text-details-square-tranzations'>
                    <span id='iconFact'>{totalTransaction.icon}</span>
                    <h1 className="display-4" id='text-transations' data-toggle="counter-up">{totalTransaction.number}</h1>
                    <p className="fs-5 mb-0" id='text-transations-number'>{totalTransaction.title}</p>
                </div>
            </div>
        </>
    )
}

export default Fact;