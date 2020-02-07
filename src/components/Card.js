import React from 'react'




const Card = function({id, name, email, onClick, onHover, onExit}){
    return(
        
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc' value={name}>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card