import React from 'react'


const AddBox = function({addChange, addSubmit}){
    return (
        
        <form onSubmit={addSubmit}>
        <div>
                <input className='pa3 ba b--green bg-lightest-blue' 
                type='text' 
                placeholder="Add Stock"
                onChange={addChange}/>
        </div>
        <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-black">Add Stock</button>
      </form>
        
    )
}
export default AddBox