import React from 'react';
import "./project.scss";
import Project from './project/project';
import { IoPeopleCircle } from "react-icons/io5";
import { TbGrowth } from "react-icons/tb";
import { BsFillAwardFill } from "react-icons/bs";
import { GiTechnoHeart } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { FaUniversalAccess } from "react-icons/fa6";
import { GrUploadOption } from "react-icons/gr";
import { GrServices } from "react-icons/gr";
import { GrSupport } from "react-icons/gr";
import { GoProjectSymlink } from "react-icons/go";

const Projects = () => {

    let projects = [
        {
            id: 1,
            title: "Facilitar el Acceso",
            icon: <FaUniversalAccess />,
            desc: "Nuestra meta principal es hacer que las monedas digitales sean accesibles para una amplia gama de usuarios, incluyendo a aquellos que son nuevos en este espacio"
        },
        {
            id: 2,
            title: "Educación del Usuario",
            icon: <MdCastForEducation />,
            desc: "Proporcionar recursos educativos para ayudar a los usuarios a comprender las monedas digitales, la tecnología y cómo utilizar la plataforma de manera segura y eficiente"
        },
        {
            id: 3,
            title: "Seguridad y Confianza",
            icon: <MdOutlineSecurity />,
            desc: "Establecer medidas de seguridad robustas para proteger los fondos y la información de los usuarios, y construir una reputación de confianza en el mercado"
        },
        {
            id: 4,
            title: "Ampliar la Adopción",
            icon: <GrUploadOption />,
            desc: "Fomentar la adopción masiva de las monedas mediante la promoción de su utilidad y beneficios, así como la mejora de la facilidad de uso de la plataforma."
        },
        {
            id: 5,
            title: "Variedad de Servicios",
            icon: <GrServices />,
            desc: "Ofrecer una amplia gama de servicios relacionados con las monedas virtuales como intercambio, billeteras digitales, trading, préstamos, staking, y más, para satisfacer las diversas necesidades financieras."
        },
        {
            id: 6,
            title: "Innovación Tecnológica",
            icon: <GiTechnoHeart />,
            desc: "Estar a la vanguardia de la innovación tecnológica en el espacio de las monedas, explorando nuevas tecnologías y soluciones para mejorar la experiencia del usuario y la eficiencia de la plataforma"
        },
        {
            id: 7,
            title: "Cumplimiento Normativo",
            icon: <BsFillAwardFill />,
            desc: "Cumplir con las regulaciones financieras y de cumplimiento en todas las jurisdicciones relevantes donde opera la plataforma, para garantizar la legalidad y la transparencia de las operaciones"
        },
        {
            id: 8,
            title: "Crecimiento Sostenible",
            icon: <TbGrowth />,
            desc: "Establecer una estrategia de crecimiento sostenible que permita a la plataforma expandirse de manera orgánica mientras mantiene altos estándares de calidad y seguridad"
        },
        {
            id: 9,
            title: "Atención al Cliente",
            icon: <GrSupport />,
            desc: "Proporcionar un excelente servicio al cliente, respondiendo rápidamente a las consultas y resolviendo los problemas de los usuarios de manera efectiva y amigable"
        },
        {
            id: 10,
            title: "Participación de la Comunidad",
            icon: <IoPeopleCircle />,
            desc: "Fomentar la participación activa de la comunidad de usuarios, escuchando sus comentarios y sugerencias, e involucrándolos en el desarrollo y la mejora continua de la plataforma"
        }
    ]
    return (
        <>
            <div className="container-xxl py-5">
                <h2 className='text-center text-white pb-4 text-projects'><span className='icon-projects'><GoProjectSymlink /></span><span className='text-gold'>Nues</span>tras <span className='text-gold'>metas </span></h2>
                <div className="container">
                    <div className="row g-4">
                        {
                            projects.map((project, idx) => {
                                return (<Project key={idx} projectDesc={project} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Projects;