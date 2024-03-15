import React from 'react';
import ItemNavbar from './itemNavbar/itemNavbar';
import { iItemNavbar } from './interface/ItemNavbar.interface';

const ItemsNavbar = ({ }) => {
    let mapLinks: iItemNavbar[] =
        [
            {
                id: 1,
                title: "Home",
                url: "/home",
                icon: "bi bi-house-door-fill",
            },
            {
                id: 2,
                title: "Nosotros",
                url: "/about",
                icon: "bi bi-people-fill",
            },
            {
                id: 3,
                title: "Contacto",
                url: "/contact",
                icon: "bi bi-question-circle-fill",
            },
        ];
    return (
        <>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-4 py-lg-0">
                    {
                        mapLinks.map((itemNavbarItem, idx) => {
                            return (<ItemNavbar key={idx} itemNavbarItem={itemNavbarItem} />)
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default ItemsNavbar;

