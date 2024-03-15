import React from 'react'

const DescItemAboutHome = ({ descItemAboutHomeItem }) => {
    return (
        <>
            <div className="d-flex align-items-center mb-2 text-white text-about-home">
                <i className="fa fa-check bg-light text-primary btn-sm-square rounded-circle me-3 fw-bold"></i>
                <span><i className={descItemAboutHomeItem.icon} id='icon-advatanje-home'></i> {descItemAboutHomeItem.desc}</span>
            </div>
        </>
    )
}

export default DescItemAboutHome;