import React from 'react';
import "./itemNavbar.scss";

const ItemNavbar = ({ itemNavbarItem }) => {
    return (
        <>
            <a href={itemNavbarItem.url} className="nav-item nav-link active"><i className={itemNavbarItem.icon} id="iconNavbarResponsive"></i><small className='text-item-navbar'>{itemNavbarItem.title}</small></a>
        </>
    )
}

export default ItemNavbar;
