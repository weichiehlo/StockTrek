import React from 'react'
import Card from './Card.js'


const CardList = function ({stocks}){
    
    return(
        <div>
            {
                stocks.map((stock, i) => {
                    return <Card key= {i} id={stock.id} name={stock.name} email={stock.email}/>
                    })
            }  
        </div>
    );
} 

export default CardList