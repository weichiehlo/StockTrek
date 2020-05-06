import React from 'react'
import Card from './Card.js'


const CardList = function ({stocks}){
    return(
        <div>
            {
                stocks.map((stock, i) => {
                    return <Card key= {i} name={stock.symbol} price={stock.price} average={stock.average}/>
                    })
            }  
        </div>
    );
} 

export default CardList