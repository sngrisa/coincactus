import React from 'react';
import "./snniper.scss";
import { ImCoinDollar } from "react-icons/im";

const Snniper = () => {
    return (
        <>
            <div id="spinner"
                className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div className="spinner-grow bi bi-coin text-gold" role='status'></div>
            </div >
        </>
    )
}

export default Snniper;