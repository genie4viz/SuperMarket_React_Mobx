import React from 'react';


const SuperMarketTemplate = ({ items, basket }) => {
    return (
        <div className="supermarket-template">
            <div className="items-wrapper">
                <h2>Goods</h2>
                {items}
            </div>
            <div className="basket-wrapper">
                <h2>Shopping Market</h2>
                {basket}
            </div>
        </div>
    );
};

export default SuperMarketTemplate;