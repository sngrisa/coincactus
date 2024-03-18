import React from 'react';
import "./coin.scss";
import coinsII from "./../../../../../assets/coinsII.png";

const Coin = () => {
    return (
        <>
            <img src={coinsII} className='floating imgCoinAbout' />
        </>
    )
}

export default Coin;