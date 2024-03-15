import React from 'react';
import ItemFooter from './itemFooter/itemFooter';
import "./itemsFooter.scss";

const ItemsFooter = ({ itemsFooter, title, icon }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 text-center text-white">
                <h5 className="mb-4 text-white title-Select"><i className={icon} id='iconMenuSelection'></i> {title}</h5>
                {
                    itemsFooter.map((itemFooterItem, idx) => {
                        return (<ItemFooter key={idx} itemFooter={itemFooterItem} />)
                    })
                }
            </div>
        </>
    )
}

export default ItemsFooter;