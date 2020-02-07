import React from 'react'
import Card from './Card.js'


const CardList = function ({robots, onClick, onHover, onExit}){
    
    return(
        <div>
            {
                robots.map((robot, i) => {
                    return <Card key= {i} id={robot.id} name={robot.name} email={robot.email}/>
                    })
            }  
        </div>
    );
} 

export default CardList