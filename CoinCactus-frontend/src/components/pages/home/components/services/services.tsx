import React from 'react';
import "./services.scss";
import { MdDesignServices } from "react-icons/md";
import { GiBuyCard } from "react-icons/gi";
import { TbZoomMoney } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import ServiceItem from './serviceItem/serviceItem';
import { GiReceiveMoney } from "react-icons/gi";
import { FcNeutralTrading } from "react-icons/fc";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GrUserPolice } from "react-icons/gr";
import { FaCreditCard } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { IServiceItem } from './interface/IServiceItem.interface';

const Services = () => {
    let ServiceItems: IServiceItem[] = [
        {
            id: 1,
            title: "Cartera digital",
            desc: "Proporcionamos a los usuarios un lugar seguro para almacenar sus monedas. Pueden ser carteras en línea, de escritorio o móviles.",
            icon: <FaWallet />
        },
        {
            id: 2,
            title: "Procesador de pago",
            desc: "Ofrecemos a los comerciantes la capacidad de aceptar pagos en monedas digitales en sus tiendas en línea o físicas.",
            icon: <TbZoomMoney />
        },
        {
            id: 3,
            title: "Intercambio de monedas",
            desc: "Permitimos a los usuarios comprar, vender e intercambiar una variedad de monedas digitales.",
            icon: <GiReceiveMoney />
        },
        {
            id: 4,
            title: "Plataforma de trading",
            desc: "Permitimos a los usuarios realizar operaciones de compra y venta de monedas digitales, así como realizar análisis técnico y seguimiento del mercado.",
            icon: <FcNeutralTrading />
        },
        {
            id: 5,
            title: "Educación y análisis",
            desc: "Proporcionamos recursos educativos sobre monedas digitales y análisis de mercado para ayudar a los usuarios a tomar decisiones informadas sobre sus inversiones.",
            icon: <FaChalkboardTeacher />
        },
        {
            id: 6,
            title: "Servicios de custodia",
            desc: "Ofrecemos almacenamiento seguro de monedas digitales para inversores institucionales y grandes tenedores.",
            icon: <GrUserPolice />
        },
        {
            id: 7,
            title: "Tarjetas de débito",
            desc: "Permitimos a los usuarios gastar sus monedas en tiendas físicas y en línea utilizando tarjetas de débito vinculadas a sus carteras digitales",
            icon: <FaCreditCard />
        },
        {
            id: 8,
            title: "Préstamos",
            desc: "Facilitamos a los usuarios obtener préstamos utilizando sus monedas como garantía.",
            icon: <GiTakeMyMoney />
        },
        {
            id: 9,
            title: "Plataforma de préstamos digitales",
            desc: "Los usuarios pueden prestar sus monedas a otros usuarios a cambio de intereses.",
            icon: <FaMoneyBillTransfer />
        },
    ]
    return (
        <>
            <div className='bg-gray-900 div-services'>
                <div className="container-xxl bg-white services-square">
                    <div className="container py-5">
                        <div className="text-center mx-auto wow fadeInUp div-service" data-wow-delay="0.1s">
                            <h1 className="display-6 title-services"><span className='icon-services'><MdDesignServices /></span>Nuestros <span className='services-contitle'>Servicios</span></h1>
                            <p className="fs-5 mb-5 sub-text-golden"><span className='icon-subtitle-services-right'><GiBuyCard /></span>Compra, vende e intercambia monedas digitales</p>
                        </div>
                        <div className="row g-4">
                            {
                                ServiceItems.map((ServiceItemObject, idx) => {
                                    return (<ServiceItem key={idx} ServiceItemObject={ServiceItemObject} />)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services;