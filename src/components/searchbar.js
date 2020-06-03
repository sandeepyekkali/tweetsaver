import React, { useState } from 'react'

function Searchbar({onSearchStringSubmit}) {

    const [searchString, setsearchString] = useState('')

   const handleSearchChange=(e)=>{
      setsearchString(e.target.value)
      console.log(searchString)
   }

   const handleSubmit=(e)=>{
       console.log('submit')
      e.preventDefault()
      onSearchStringSubmit(searchString)
   }

    return (
            <div className='container'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                <input placeholder='Search Tweets' type='text' autoComplete='off' className='form-control' id='search' 
                 onChange={handleSearchChange}/>
                </div>
                <button type='submit' className='btn btn-primary'>Search</button>
            </form>
        </div>
    )
}

export default Searchbar
