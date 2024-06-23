import React from 'react'
import "../../src/App.css"
const Homepage = ({setloginuser}) => {
  return (
    <div className='homepage'>
        <h1>hello homePage</h1>
        <div className='button' onClick={()=>setloginuser({})}  >Logout</div>
    </div>
  )
}

export default Homepage