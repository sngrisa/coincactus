import React from 'react';
import "./historyItem.scss";

const HistoryItem = ({ historyItem }) => {
    return (
        <>
            <div className="roadmap-item">
                <div className="roadmap-point"><span></span></div>
                <h5>January 2045</h5>
                <span>Diam dolor ipsum sit amet erat ipsum lorem sit</span>
            </div>
        </>
    )
}

export default HistoryItem;