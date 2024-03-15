import React from 'react';
import Fact from './fact/fact';
import { IFact } from './interface/fact.interface';
import "./facts.scss";
import { GiCoins } from "react-icons/gi";
import { FaCoins } from "react-icons/fa6";
import { GiTwoCoins } from "react-icons/gi";

const Facts = () => {
    let totalTransactions: IFact[] = [
        {
            id: 1,
            title: "Total de transaciones en los últimos 3 años",
            number: 14000,
            icon: <GiCoins />
        },
        {
            id: 2,
            title: "Total de transaciones hace 1 año",
            number: 7000,
            icon: <FaCoins />
        },
        {
            id: 2,
            title: "Total de transaciones en el último mes",
            number: 1500,
            icon: <GiTwoCoins />
        }
    ]
    return (
        <>
            <div className='bg-gray-900 fact-square'>
                <div className="container-xxl bg-white py-5 card-stats">
                    <div className="container py-5">
                        <div className="row g-5">
                            {
                                totalTransactions.map((totalTransaction, idx) => {
                                    return (<Fact key={idx} totalTransaction={totalTransaction} />)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Facts;