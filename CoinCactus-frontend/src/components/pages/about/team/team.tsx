import React from 'react';
import "./team.scss";
import Member from './member/member';
import { RiTeamFill } from "react-icons/ri";
import brian from "./../../../../assets/foto.jpg";
import agustin from "./../../../../assets/foto3.jpg";
import daniel from "./../../../../assets/foto4.jpg";
import johnathan from "./../../../../assets/foto6.jpg";
import iara from "./../../../../assets/foto7.jpg";
import santiago from "./../../../../assets/foto2.jpg";
import { IMember } from './member/interface/member.interface';

const Team = () => {
    let members: IMember[] =
        [
            {
                id: 1,
                name: "Brian Alexis Galli",
                work: "Presidente e ingeniero de software",
                image: brian,
                socialnetwork:
                    [
                        {
                            id: 1,
                            icon: "bi bi-facebook",
                            url: ""
                        },
                        {
                            id: 2,
                            icon: "bi bi-twitter-x",
                            url: ""
                        },
                        {
                            id: 3,
                            icon: "bi bi-instagram",
                            url: ""
                        }
                    ]
            },
            {
                id: 2,
                name: "Agustin Galli",
                work: "Director ejecutivo - Ciberseguridad",
                image: agustin,
                socialnetwork:
                    [
                        {
                            id: 1,
                            icon: "bi bi-facebook",
                            url: ""
                        },
                        {
                            id: 2,
                            icon: "bi bi-twitter-x",
                            url: ""
                        },
                        {
                            id: 3,
                            icon: "bi bi-instagram",
                            url: ""
                        }
                    ]
            },
            {
                id: 3,
                name: "Daniel Parra",
                work: "Infraestructura",
                image: daniel,
                socialnetwork:
                    [
                        {
                            id: 1,
                            icon: "bi bi-facebook",
                            url: ""
                        },
                        {
                            id: 2,
                            icon: "bi bi-twitter-x",
                            url: ""
                        },
                        {
                            id: 3,
                            icon: "bi bi-instagram",
                            url: ""
                        }
                    ]
            },
            {
                id: 4,
                name: "Johnathan Jara",
                work: "Director de Operaciones",
                image: johnathan,
                socialnetwork:
                    [
                        {
                            id: 1,
                            icon: "bi bi-facebook",
                            url: ""
                        },
                        {
                            id: 2,
                            icon: "bi bi-twitter-x",
                            url: ""
                        },
                        {
                            id: 3,
                            icon: "bi bi-instagram",
                            url: ""
                        }
                    ]
            },
            {
                id: 5,
                name: "Iara Selene",
                work: "Desarrolladora de Contenido",
                image: iara,
                socialnetwork:
                    [
                        {
                            id: 1,
                            icon: "bi bi-facebook",
                            url: ""
                        },
                        {
                            id: 2,
                            icon: "bi bi-twitter-x",
                            url: ""
                        },
                        {
                            id: 3,
                            icon: "bi bi-instagram",
                            url: ""
                        }
                    ]
            },
            {
                id: 6,
                name: "Santiago Grisafi",
                work: "Desarrollador Full Stack",
                image: santiago,
                socialnetwork:
                    [
                        {
                            id: 1,
                            icon: "bi bi-facebook",
                            url: ""
                        },
                        {
                            id: 2,
                            icon: "bi bi-twitter-x",
                            url: ""
                        },
                        {
                            id: 3,
                            icon: "bi bi-instagram",
                            url: ""
                        }
                    ]
            }
        ];
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 className="mb-5 text-white divTeamAbout"><span className='icon-team'><RiTeamFill /></span><span className='text-gold'>Nues</span>tro equ<span className='text-gold'>ipo</span></h1>
                    </div>
                    <div className="row g-4">
                        {
                            members.map((member, idx) => {
                                return (<Member key={idx} member={member} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team;