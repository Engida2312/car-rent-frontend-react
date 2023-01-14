import React from 'react'
import logo from '../Assets/Images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar con'>
       <Link to="/">
        <img src={logo} alt="logo" />
      </Link> 
    </div>
  )
}

export default Navbar