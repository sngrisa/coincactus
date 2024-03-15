import React from 'react'
import HistoryItem from './historyItem/historyItem'

const History = () => {
    let itemsHistory =
        [
            {
                id: 1,
                date: "Agosto del 2016",
                desc: "",
                icon: "",
            },
            {
                id: 2,
                date: "",
                desc: "",
                icon: "",
            }
        ];
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp divHistory" data-wow-delay="0.1s">
                        <h1 className="display-6">Roadmap</h1>
                        <p className="text-primary fs-5 mb-5">We Translate Your Dream Into Reality</p>
                    </div>
                    <div className="owl-carousel roadmap-carousel wow fadeInUp" data-wow-delay="0.1s">
                        {
                            itemsHistory.map((itemHistory, idx) => {
                                return (<HistoryItem key={idx} historyItem={itemHistory} />)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default History;