import React, { useState } from 'react'
import './navbar.css'
import run from '../images/run.png'

const Navbar = () => {
    const[show, setShow]=useState(false)
  return (
    <nav className="navbar">
        <img className='run' src={run} alt="" />
        <h2 className='navTitle'>
            Running & Research


        </h2>
        
        <button className='btn' onClick={()=>setShow(!show)}>Contact Me</button>
          
            {
              
                show?<p className='email'> runningandresearch@gmail.com </p>:null
                

            }
           

    </nav>
  )
}

export default Navbar