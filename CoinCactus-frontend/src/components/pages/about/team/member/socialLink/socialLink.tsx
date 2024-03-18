import React from 'react';
import "./socialLink.scss";

const SocialLink = ({ socialLinkItem }) => {
    return (
        <>
            <a className="btn btn-sm-square btn-social-team mx-1" href={socialLinkItem.url}><i className={socialLinkItem.icon}></i></a>
        </>
    )
}

export default SocialLink;