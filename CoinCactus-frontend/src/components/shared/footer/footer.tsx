import React from 'react';
import WeFooter from './weFooter/weFooter';
import Detailsadress from './detailsAdress/detailsadress';
import Copyright from './copyright/copyright';
import ItemsFooter from './itemsFooter/itemsFooter';
import { ItemFooterMenu } from './itemsFooter/interface/ItemFooterMenu.interface';
import Newsletter from './newsletter/newsletter';

const Footer = () => {

    let mapLinks: ItemFooterMenu[] =
        [
            {
                id: 1,
                url: "/home",
                icon: "bi bi-house-door-fill",
            },
            {
                id: 2,
                url: "/about",
                icon: "bi bi-people-fill",
            },
            {
                id: 3,
                url: "/contact",
                icon: "bi bi-question-circle-fill",
            },
        ];

    let itemSocials: ItemFooterMenu[] =
        [
            {
                id: 1,
                url: "/home",
                icon: "bi bi-facebook",
            },
            {
                id: 2,
                url: "/about",
                icon: "bi bi-instagram",
            },
            {
                id: 3,
                url: "/contact",
                icon: "bi bi-twitter-x",
            },
        ];

    return (
        <>
            <div className="container-fluid bg-dark footer pt-5 wow fadeIn" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <WeFooter />
                        <Newsletter />
                        <Detailsadress />
                        <ItemsFooter title={"Mapa del Sitio"} itemsFooter={mapLinks} icon={"bi bi-map-fill"} />
                        <ItemsFooter title={"Nuestras redes sociales"} itemsFooter={itemSocials} icon={"bi bi-file-bar-graph-fill"} />
                    </div>
                </div>
                <Copyright />
            </div>
        </>
    )
}

export default Footer;