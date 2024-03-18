import React from 'react';

const Project = ({ projectDesc }) => {
    return (
        <>
            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item-about text-center pt-3">
                    <div className="p-4">
                        <span id='iconCardProject'>{projectDesc.icon}</span>
                        <h5 className="mb-3">{projectDesc.title}</h5>
                        <p>{projectDesc.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;