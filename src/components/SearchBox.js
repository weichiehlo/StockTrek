import React from 'react'


const SearchBox = function({searchChange}){
    return (
        <div>
            <input className='pa3 ba b--green bg-lightest-blue' 
            type='search' 
            placeholder="Search Robot"
            onChange={searchChange}/>
        </div>
    )
}
export default SearchBox