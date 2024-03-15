import React from 'react';
import "./itemFooter.scss";

const ItemFooter = ({ itemFooter }) => {
    return (
        <>
            <a className="btn btn-link mapLinkSite" href={itemFooter.url}><i className={itemFooter.icon}></i></a>
        </>
    )
}

export default ItemFooter;