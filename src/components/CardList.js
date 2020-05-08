import React from 'react'
import Card from './Card.js'


const CardList = function ({stocks}){
    return(
        <div>
            {
                stocks.map((stock, i) => {
                    return <Card key= {i} id ={i} name={stock.symbol} price={stock.price} average={stock.average} max={stock.max} min={stock.min}/>
                    })
            }  
        </div>
    );
} 

export default CardList