import React from 'react'




const Card = function({id, name, price, average, max, min}){
    return(
        
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc' value={name}>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'></img>
            <div>
                <h2>{name}</h2>
                <p>Current Price ${price}</p>
                <p>Daily Average Price ${average}</p>
                <p>Daily High ${max}</p>
                <p>Daily Low ${min}</p>
            </div>
        </div>
    )
}

export default Card