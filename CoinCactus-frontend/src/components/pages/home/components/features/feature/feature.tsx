import React from 'react';
import "./feature.scss";

const FeatureComponent = ({ FeatureDetails }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 wow fadeInUp text-white" data-wow-delay="0.1s">
                <div className="d-flex align-items-start">
                    <i className={FeatureDetails.imgUrl} id='imgFeature'></i>
                    <div className="ps-4 text-cursor">
                        <h5 className="pt-3">{FeatureDetails.title}</h5>
                        <span>{FeatureDetails.desc}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureComponent;