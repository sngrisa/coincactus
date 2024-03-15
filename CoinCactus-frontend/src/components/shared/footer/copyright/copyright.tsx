import React, { useEffect, useState } from 'react';
import "./copyright.scss";

const Copyright = () => {

    let [year, setYear] = useState(0);

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, [])

    return (
        <>
            <div className="container-fluid copyright pt-3 pb-5">
                <div className="container text-center text-white">
                    &copy; {year} <a href='' className='copyright'>CactusSoft</a>. Todos los derechos reservados
                </div>
            </div>
        </>
    )
}

export default Copyright;